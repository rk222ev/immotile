(ns immotile.converters.core
  (:require
   [clojure.string :as str]
   [immotile.converters.org :as org]
   [immotile.converters.clj :as clj]))

(defmulti convert
  (fn [config ^java.io.File file]
    (keyword (last (str/split (.getAbsolutePath file) #"\.")))))

(defmethod convert :org [config file] (org/convert config file))
(defmethod convert :clj [config file] (clj/convert config file))
