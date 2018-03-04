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

(comment

  (watcher/process-source-files (config))

  (watcher/start-watcher (config))

  (server/start (config))

  )
