(ns immotile.converters.clj
  (:require
   [clojure.java.io :as io]
   [clojure.java.shell :as shell]
   [clojure.string :as str]))

(defn read-fn-from-file [path] (load-file path))

(defn convert [config file]
  (let [f (read-fn-from-file (.getPath file))
        state {}]
    {:body (f state)}))
