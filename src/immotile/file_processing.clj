(ns immotile.file-processing
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [hiccup.core :refer [html]]
            [immotile.converters.core :as c]))

(defonce ^:private all-posts
  (atom {:posts []}))

(defn create-file
  [config page-data]
  (let [type (:type page-data)
        sub-path (str (when type (str (name type) "/"))
                      (:filename page-data) ".html")
        dest (str (:out config) "/" sub-path)
        template-fn (load-file "im-src/templates/default.clj")]
     (io/make-parents (io/file dest))
     (spit dest (->> (template-fn page-data)
                     (html)
                     (str "<!doctype html>")))
     (merge (dissoc page-data :body) {:link sub-path})))

(defn- destination
  [file]
  (-> (.getPath file)
      (str/split #"/")
      (rest)
      (->> (str/join "/"))
      (str/replace "public/" "")))

(defn- copy-public-to-out
  "Copies `file` to public folder in `out-path`."
  [out-path file]
  (let [dest (str out-path "/" (destination file))]
    (io/make-parents dest)
    (io/copy file (io/file dest))))

(defn- is-of-path [regexp file] (boolean (re-find regexp (.getPath file))))
(defn- directory? [file] (.isDirectory file))
(defn- public? [file] (is-of-path #"/public" file))
(defn- post? [file] (is-of-path #"/posts/" file))
(defn- page? [file] (is-of-path #"/pages/" file))

(defn single-file
  [config file]
  (cond
    (directory? file) nil
    (post? file) (create-file config (assoc (c/convert config file) :type :post))
    (page? file) (create-file (assoc config :posts @all-posts) (c/convert (assoc config :posts @all-posts) file))
    (public? file) (copy-public-to-out (:out config) file)
    :else nil))

(defn- process-posts
  [config]
  (let [files (->> (file-seq (io/file "im-src/posts/"))
                   (filter #(.isFile %)))]
    (doall (pmap (fn [file] (create-file config (assoc (c/convert config file) :type :post))) files))))

(defn all-files
  [config]
  (let [posts (process-posts config)
        filter-files ["/templates/" "config.edn" "/posts/"]
        files (->> (file-seq (io/file "im-src"))
                   (filter #(not (re-find (re-pattern (str/join "|" filter-files)) (.getPath %))))
                   (filter #(.isFile %)))]
    (reset! all-posts posts)
    (doall (pmap #(single-file config %) files))))
