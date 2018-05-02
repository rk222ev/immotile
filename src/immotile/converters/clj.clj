(ns immotile.converters.clj
  (:require
   [clojure.java.io :as io]
   [clojure.java.shell :as shell]
   [clojure.string :as str]))

(defn read-fn-from-file [path] (load-file path))

(defn- filename-without-extension
  "Returns the name of a `file`."
  [^java.io.File file]
  (-> file
      .getName
      (str/split #"\.")
      drop-last
      (->> (str/join "."))))

(defn convert [config file]
  (let [f (read-fn-from-file (.getPath file))]
    {:body (f config)
     :filename (filename-without-extension file)}))
