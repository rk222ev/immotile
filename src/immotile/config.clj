(ns immotile.config
  (:require
   [clojure.edn :as edn]))


(defn config
  []
  (edn/read-string (slurp "im-src/config.edn")))
