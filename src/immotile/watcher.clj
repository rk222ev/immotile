(ns immotile.watcher
  (:require
   [clojure.java.io :as io]
   [clojure.string :as str]
   [hawk.core :as hawk]
   [immotile.converters.core :as c]
   [hiccup.core :refer [html]]))

(defn- create-folders [path] (.mkdirs (io/file path)))
(defn- get-file-path [f] (str/join "/" (drop 1 (str/split (.getPath f) #"/"))))
(defn- read-template-fn [path] (load-file path))
(defn- remove-newlines [s] (str/replace s #"\n" ""))
(defn- directory? [file] (.isDirectory file))
(defn- is-of-path [regexp file] (boolean (re-find regexp (.getPath file))))
(defn- post? [file] (is-of-path #"/posts/" file))
(defn- page? [file] (is-of-path #"/pages/" file))
(defn- public? [file] (is-of-path #"/public" file))
(defn- template? [file] (is-of-path #"/templates/" file))

(defn- copy
  [out-path file file-path]
  (let [destination (str out-path "/" file-path)]
    (io/make-parents destination)
    (io/copy
     file
     (io/file destination))))

(defn- copy-public-to-out
  [out-path file]
  (copy out-path file (str/replace (get-file-path file) #"public/" "")))

(defn- copy-to-out [out-path file] (copy out-path file (get-file-path file)))


(defn- filename-without-extension
  [^java.io.File file]
  (-> file
      .getName
      (str/split #"\.")
      drop-last
      (->> (str/join "."))))

(defn- generate-page
  [template-fn data]
  (->> (template-fn data)
       (html)
       (remove-newlines)
       (str "<!doctype html>")))

(defn- write-file
  [config file sub-path]
  (let [page-data (c/convert config file)
        filename (filename-without-extension file)
        dest (str (:out config) "/" sub-path filename ".html")]
    (io/make-parents (io/file dest))
    (spit dest
          (generate-page
           (read-template-fn "im-src/templates/default.clj")
           page-data))
    (dissoc page-data :body)))

(defn- write-page [config file] (write-file config file ""))

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

(declare process-source-files) ;; Fix

(defonce ^:private aposts
  (atom {:posts []}))

(defn- regenerate-file
  [config {file :file kind :kind}]
  (condp #(%1 %2) file
    directory? nil
    post? (write-post config file)
    page? (write-page (assoc config :posts @aposts) file)
    template? (process-source-files config)
    public? (copy-public-to-out (:out config) file)
    nil))

(defn- process-files
  [config type fn]
  (let [files (->> (file-seq (io/file (str "im-src/" (name type) "/")))
                   (filter #(.isFile %)))]
    (doall (pmap (partial fn config) files))))

(defn- process-pages
  [config posts]
  (process-files (assoc config :posts posts) :pages write-page))

(defn- process-posts [config] (process-files config :posts write-post))

(defn process-source-files
  [config]
  (let [posts (process-posts config)
        pages (process-pages config posts)
        filter-files ["/templates/" "config.edn" "/pages/" "/posts"]
        files (->> (file-seq (io/file "im-src"))
                   (filter #(not (re-find (re-pattern (str/join "|" filter-files)) (.getPath %)))))]
    (reset! aposts posts)
    (doall (pmap (fn [f] (when (.isFile f) (regenerate-file config {:file f}))) files))))

(defonce ^:private state
  (atom {}))

(defn- process-source-file
  [config file]
  (condp #(%1 %2) file
      directory? nil
      post? (write-post config file)
      page? (write-page (assoc config :posts @aposts) file)
      template? (process-source-files config)
      public? (copy-public-to-out (:out config) file)
      nil))

(defn start-watcher
  "Start the file watcher and regenerate on change."
  [config]
  (swap! state (fn
                 [x]
                 (hawk/watch!
                  [{:paths ["im-src/"]
                    :handler (fn [_ file] (process-source-file config (:file file)))}]))))

(defn stop
  "Stop the watcher."
  []
  (hawk/stop! @state) (reset! state nil))

(defn start
  "Runs an initial file generation then launches a wather that regenerates
  when a file is changed."
  [config]
  (create-folders (:out config))
  (process-source-files config)
  (start-watcher config))

(comment
  (process-posts {:out "out/"})

  (process-source-files {:out "out/"})

  (process-pages {:out "out/"} @aposts)
  )
