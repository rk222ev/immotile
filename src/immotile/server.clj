(ns immotile.server
  (:require
   [org.httpkit.server :as server]))

(defonce ^:private state (atom {}))

(defn- serve-static [config req]
  (let [mime-types {".clj" "text/plain"
                    ".mp4" "video/mp4"
                    ".ogv" "video/ogg"}
        uri (:uri req)
        headers (if-let [mimetype (mime-types (re-find #"\..+$" uri))]
                  {:headers {"Content-Type" mimetype}})
        body (slurp (str (:out config)
                         (if (= "/" uri)
                           "/index.html"
                           uri)))]
    {:body body :headers headers}))


(defn start
  [config]
  (let [port (:port config)
        s (server/run-server
            (fn [req] (serve-static config req))
            {:port port})]
    (println (str "Started webserver on port " port))
    (reset! state s)))


(defn stop [] (@state))
