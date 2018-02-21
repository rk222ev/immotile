(ns immotile.core
  (:require
   [immotile.config :refer [config]]
   [immotile.converters.core :as converters]
   [immotile.converters.org]
   [immotile.server :as server])
  (:gen-class))

(defn -main
  [& args]
  (let [c (config)]
    (converters/start c)
    (server/start c)))
