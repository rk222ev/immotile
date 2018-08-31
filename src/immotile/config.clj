(ns immotile.config
  (:require
   [clojure.edn :as edn]))

(defn c []
  (edn/read-string (slurp "config.edn")))

(defn config
  []
  (c))

(defn base-path []
  (str (:base-path (c)) ""))


;; {:out "out"
;;  :project-ns "example"
;;  :src "src"
;;  :template "default.clj"}
