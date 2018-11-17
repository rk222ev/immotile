(ns immotile.io
  (:require [clojure.java.io :as io]))

(defn make-parents
  [dest]
 (io/make-parents (io/file dest)))

(defn filename
  [^java.io.File file]
  (.getName ^java.io.File file))

(defn path
  [^java.io.File file]
  (.getPath file) )

(defn copy
  [file dest]
  (io/copy file (io/file dest)))

(defn directory?
  [^java.io.File file]
  (.isDirectory file))

(defn file
  [path]
  (io/file path))

(defn file?
  [^java.io.File file]
  (.isFile file))
