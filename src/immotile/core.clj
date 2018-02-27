(ns immotile.core
  (:require
   [immotile.config :refer [config]]
   [immotile.converters.core :as converters]
   [immotile.converters.clj]
   [immotile.converters.org]
   [immotile.server :as server])
  (:gen-class))

(defn -main
  [& args]
  (let [c (config)]
    (converters/start c)
    (server/start c)))

(comment

  (converters/process-all-source-files (config))

  (converters/start-watcher (config))

  (server/start (config))

  )
