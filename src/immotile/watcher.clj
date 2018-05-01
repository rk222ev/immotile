(ns immotile.watcher
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [hawk.core :as hawk]
            [hiccup.core :refer [html]]
            [immotile.converters.core :as c]))

(defn- get-file-path [f] (str/join "/" (drop 1 (str/split (.getPath f) #"/"))))
(defn- read-template-fn [path] (load-file path))
(defn- remove-newlines [s] (str/replace s #"\n" ""))
(defn- directory? [file] (.isDirectory file))
(defn- is-of-path [regexp file] (boolean (re-find regexp (.getPath file))))
(defn- post? [file] (is-of-path #"/posts/" file))
(defn- page? [file] (is-of-path #"/pages/" file))
(defn- public? [file] (is-of-path #"/public" file))
(defn- template? [file] (is-of-path #"/templates/" file))

(defn- copy-public-to-out
  "Copies `file` to public folder in `out-path`."
  [out-path file]
  (let [file-path (str/replace (get-file-path file) #"public/" "")
        destination (str out-path "/" file-path)]
    (io/make-parents destination)
    (io/copy
     file
     (io/file destination))))

(defn- filename-without-extension
  "Returns the name of a `file`."
  [^java.io.File file]
  (-> file
      .getName
      (str/split #"\.")
      drop-last
      (->> (str/join "."))))

(defn- generate-page
  "Generate a page using a `template-fn` and some `data`"
  ;; TODO: spec data and use a better name
  [template-fn data]
  (->> (template-fn data)
       (html)
       (remove-newlines)
       (str "<!doctype html>")))

(defn- write-file
  ([config file]
   (write-file config file ""))
  ([config file sub-path]
   (let [page-data (c/convert config file)
         filename (filename-without-extension file)
         dest (str (:out config) "/" sub-path filename ".html")]
     (io/make-parents (io/file dest))
     (spit dest
           (generate-page
            (read-template-fn "im-src/templates/default.clj")
            page-data))
     (dissoc page-data :body))))

(defn- write-post
  [config file]
  (let [page-data (c/convert config file)
        filename (filename-without-extension file)
        date (:date page-data)
        dest (str (:out config) "/posts/" date "-" filename ".html")]
    (io/make-parents (io/file dest))
    (spit dest
          (generate-page
           (read-template-fn "im-src/templates/default.clj")
           page-data))
    (dissoc (merge page-data {:link (str "posts/" date "-" filename ".html")}) :body)))

(defonce ^:private all-posts
  (atom {:posts []}))

(defn- process-file
  [config file]
  (condp #(%1 %2) file
    directory? nil
    post? (write-post config file)
    page? (write-file (assoc config :posts @all-posts) file)
    public? (copy-public-to-out (:out config) file)
    nil))

(defn- process-files
  [config type fn]
  (let [files (->> (file-seq (io/file (str "im-src/" (name type) "/")))
                   (filter #(.isFile %)))]
    (doall (pmap (partial fn config) files))))

(defn process-all-files
  [config]
  (let [posts (process-files config :posts write-post)
        filter-files ["/templates/" "config.edn" "/posts/"]
        files (->> (file-seq (io/file "im-src"))
                   (filter #(not (re-find (re-pattern (str/join "|" filter-files)) (.getPath %))))
                   (filter #(.isFile %)))]
    (reset! all-posts posts)
    (doall (pmap #(process-file config %) files))))

(defonce ^:private watcher
  (atom {}))

(defn- start-watcher
  "Start the file watcher and regenerate on change."
  [config]
  (swap! watcher (fn [x]
                 (hawk/watch!
                  [{:paths ["im-src/"]
                    :handler (fn [_ change]
                               (let [file (:file change)]
                                 (if (template? file)
                                   (process-all-files config)
                                   (process-file config file))))}]))))

(defn stop
  "Stop the watcher."
  []
  (hawk/stop! @watcher) (reset! watcher nil))

(defn start
  "Runs an initial file generation then launches a wather that regenerates
  when a file is changed."
  [config]
  (.mkdirs (io/file (:out config)))
  (process-all-files config)
  (start-watcher config))
