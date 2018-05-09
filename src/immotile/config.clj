(ns immotile.config
  (:require
   [clojure.edn :as edn]))


(defn config
  []
  (edn/read-string (slurp "config.edn")))



;; {:out "resources/public"
;;  :template "default.clj"
;;  :src "im-src"
;;  :port 8080}
