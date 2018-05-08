(ns immotile.core
  (:require [cljs.build.api :as cljs]
            [clojure.core.async :as a :refer [<!! thread]]
            [immotile.config :refer [config]]
            [immotile.file-processing :as process]
            [immotile.system :as system]))

(def opts {:optimizations :advanced
           :output-to "resources/public/js/example.js"})

(defn -main
  [& args]
  (let [c (config)]
    (case (keyword (first args))
      :build-prod (mapv <!! [(thread (process/all-files c))
                             (thread (cljs/build "im-src/cljs/" opts))])
      :dev (do
             (thread (process/all-files c))
             (system/new-system c)
             (system/start))
      (println "Valid args are build-prod or dev"))))
