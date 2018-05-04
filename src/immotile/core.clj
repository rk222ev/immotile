(ns immotile.core
  (:require
   [immotile.config :refer [config]]
   [immotile.converters.core]
   [immotile.system :as system]
   [immotile.file-processing :as process])
  (:gen-class))

(defn -main
  [& args]
  (let [c (config)]
    (process/all-files c)
    (system/new-system c))
  (system/start))
