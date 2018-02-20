(ns immotile.server
  (:require
   [org.httpkit.server :as server]
   [immotile.config :refer [config]]))


(defn- serve-static [req]
  (let [mime-types {".clj" "text/plain"
                    ".mp4" "video/mp4"
                    ".ogv" "video/ogg"}
        headers (if-let [mimetype (mime-types (re-find #"\..+$" (:uri req)))]
                  {:headers {"Content-Type" mimetype}})
        body (slurp (str (:out (config))
                         (if (= "/" (:uri req))
                           "/index.html"
                           (:uri req))))]
    {:body body :headers headers}))


(defn start
  []
  (server/run-server serve-static {:port 8080}))
