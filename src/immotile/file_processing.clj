(ns immotile.file-processing
  (:require [clojure.core.async :as async :refer [<!! thread]]
            [clojure.string :as str]
            [hiccup.core :refer [html]]
            [immotile.converters.core :as c]
            [immotile.io :as io]))

(defn create-file
  [config page-data]
  (let [type (:type page-data)
        sub-path (str (when type (str (name type) "/"))
                      (:filename page-data) ".html")
        dest (str (:out config) "/" sub-path)
        template-fn (load-file (str (:src config) "/templates/" (:template config)))]
    (io/make-parents dest)
    (spit dest (->> (template-fn page-data)
                    (html)
                    (str "<!doctype html>")))
    (merge (dissoc page-data :body) {:link sub-path})))

(defn create-post
  [config file]
  (create-file config (assoc (c/convert config file) :type :post)))

(defn create-page
  [config posts file]
  (create-file config (c/convert (assoc config :posts posts) file)))

(defn- copy-public-to-out
  "Copies `file` to `out-path`."
  [out-path file]
  (let [dest (str out-path "/" (io/filename file))]
    (io/make-parents dest)
    (io/copy file dest)))

(defn- is-of-path [regexp file] (boolean (re-find regexp (io/path file))))
(defn- directory? [file] (io/directory? file))
(defn- public? [file] (is-of-path #"/public" file))
(defn- post? [file] (is-of-path #"/posts/" file))
(defn- page? [file] (is-of-path #"/pages/" file))

(defonce posts (atom nil))

(defn- single-file
  [config file]
  (condp #(%1 %2) file
    post? (create-post config file)
    page? (create-page config @posts file)
    public? (copy-public-to-out (:out config) file)
    nil))

(defn- process-posts
  [config]
  (sequence
   (comp (filter io/file?)
         (map #(thread (create-post config %)))
         (map <!!))
   (file-seq (io/file (str (:src config) "/posts")))))

(defn all-files
  [config]
  (let [paths-to-ignore (re-pattern (str/join "|" ["/templates/" "config.edn" "/posts/"]))
        files (sequence (comp (filter io/file?)
                              (remove #(re-find paths-to-ignore (io/path %))))
                        (file-seq (io/file (:src config))))]
    (reset! posts (reverse (sort-by :date (process-posts config))))
    (mapv <!!
          (sequence
           (comp (map #(thread (single-file config %))))
           files))))

(defn- template? [file] (is-of-path #"/templates/" file))

(defn file
  [config file]
  (if (or (template? file) (directory? file))
    (do (println "Regenerating all files...")
        (time (all-files config)))
    (do (println "Regenerating file " (io/path file))
        (time (single-file config file)))))
