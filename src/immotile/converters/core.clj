(ns immotile.converters.core
  (:require
   [clojure.java.io :as io]
   [clojure.string :as str]
   [hawk.core :as hawk]))

(def state (atom {}))

(defn- get-file-path [f] (str/join "/" (drop 1 (str/split (.getPath f) #"/"))))

(defn- copy-to-out
  [out-path file]
  (let [destination (str out-path "/" (get-file-path file))]
    (io/make-parents destination)
    (io/copy
     file
     (io/file destination))))


(defmulti ->convert
  (fn [config ^java.io.File file]
    (keyword (last (str/split (.getAbsolutePath file) #"\.")))))

(defmethod ->convert :edn  [config file])
(defmethod ->convert :default [config file] (copy-to-out (:out config) file))

(defn regenerate-file [config {file :file kind :kind}] (->convert config file))

(defn- create-folders [path] (.mkdirs (io/file path)))

(defn- process-all-source-files
  [config]
  (doall
   (for [f (drop 1 (file-seq (io/file "im-src")))]
     (when (.isFile f) (regenerate-file config {:file f})))))


(defn start-watcher
  []
  (let [w (hawk/watch! [{:paths ["im-src/pages/"] :handler regenerate-file}])]
    (swap! state (fn [x] w))))


(defn stop-watcher [] (hawk/stop! @state) (reset! state nil))


(defn start
  [config]
  (create-folders (:out config))
  (process-all-source-files config)
  (start-watcher))
