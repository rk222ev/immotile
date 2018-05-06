(ns immotile.core
  (:require
   [immotile.config :refer [config]]
   [immotile.converters.core]
   [immotile.system :as system]
   [immotile.file-processing :as process])
  (:gen-class))

(def opts {:optimizations :advanced
           :output-to "resources/public/js/example.js"})
(defn -main
  [& args]
  (let [c (config)]
    (case (keyword (first args))
      :build-prod (do (process/all-files c)
                      (cljs.build.api/build "im-src/cljs/" opts))
      :dev (do (process/all-files c)
               (system/new-system c)
               (system/start))
      (println "Valid args are build-prod or dev"))))
