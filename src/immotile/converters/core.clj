(ns immotile.converters.core
  (:require
   [clojure.java.io :as io]
   [clojure.string :as str]
   [immotile.config :as c]
   [hawk.core :as hawk]
   [hiccup.core :refer [html]]))

(defn- create-folders [path] (.mkdirs (io/file path)))
(defn- get-file-path [f] (str/join "/" (drop 1 (str/split (.getPath f) #"/"))))
(defn- read-template-fn [path] (load-file path))
(defn- remove-newlines [s] (str/replace s #"\n" ""))
(defn- directory? [file] (.isDirectory file))
(defn- is-of-path [regexp] (fn [file] (boolean (re-find regexp (.getPath file)))))
(defn- post? [file] (is-of-path #"/posts/" file))
(defn- page? [file] (is-of-path #"/pages/" file))
(defn- template? [file] (is-of-path #"/templates/" file))
(defn- config-file? [file] (is-of-path #"config.edn" file))

(defn- copy-to-out
  [out-path file]
  (let [destination (str out-path "/" (get-file-path file))]
    (io/make-parents destination)
    (io/copy
     file
     (io/file destination))))


(defn- generate-page
  [template-fn data]
  (->> (template-fn data)
       (html)
       (remove-newlines)
       (str "<!doctype html>")))


(defmulti convert
  (fn [config ^java.io.File file]
    (keyword (last (str/split (.getAbsolutePath file) #"\.")))))

(defmethod convert :edn [config file])
(defmethod convert :default [config file] (copy-to-out (:out config) file))

(defn- filename-without-extension
  [^java.io.File file]
  (-> file
      .getName
      (str/split #"\.")
      drop-last
      (->> (str/join "."))))

(defn- write-file
  [config file sub-path]
  (let [page-data (convert config file)
        filename (filename-without-extension file)
        dest (str (:out config) "/" sub-path filename ".html")]
    (io/make-parents (io/file dest))
    (spit dest
          (generate-page
           (read-template-fn "im-src/templates/default.clj")
           page-data))))

(defn- write-page [config file] (write-file config file ""))
(defn- write-post [config file] (write-file config file "posts/"))

(defn- regenerate-file
  [config {file :file kind :kind}]
  (condp #(%1 %2) file
    directory? nil
    config-file? nil
    post? (write-post config file)
    page? (write-page config file)
    template? (process-source-files config)
    (copy-to-out (:out config) file)))

(defn process-source-files
  [config]
  (let [files
        (->> (file-seq (io/file "im-src"))
             (filter #(not (re-find #"/templates/" (.getPath %)))))]
    (doall (pmap (fn [f] (when (.isFile f) (regenerate-file config {:file f}))) files))))

(defonce ^:private state (atom {}))

(defn start-watcher
  [config]
  (let [w (hawk/watch! [{:paths ["im-src/"]
                         :handler (fn [_ x] (regenerate-file config x))}])]
    (swap! state (fn [x] w))))

(defn stop-watcher [] (hawk/stop! @state) (reset! state nil))

(defn start
  [config]
  (create-folders (:out config))
  (process-source-files config)
  (start-watcher config))
