(ns immotile.core
  (:require
   [immotile.config :refer [config]]
   [immotile.converters.core]
   [immotile.server :as server]
   [immotile.watcher :as watcher])
  (:gen-class))

(defn -main
  [& args]
  (let [c (config)]
    (watcher/start c)
    (server/start c)))
