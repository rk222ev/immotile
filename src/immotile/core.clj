(ns immotile.core
  (:require
   [clojure.java.shell :as shell]
   [clojure.java.io :as io]
   [clojure.string :as str]
   [hiccup.core :refer [html]]
   [hawk.core :as hawk]
   [immotile.config :refer [config]]
   [immotile.server :as server])
  (:gen-class))


;;; Org ;;;
(def org-export-command
  `(~'progn
    (~'org-html-export-as-html nil nil nil ~'t nil)
    (~'with-current-buffer "*Org HTML Export*"
     (~'princ (~'org-no-properties (~'buffer-string))))))

(defn elisp-sexp
  [absolute-path]
  (str
   `(~'progn
     (~'find-file ~absolute-path)
     ~org-export-command)))


(defn emacs-shell-command [absolute-path] ["emacs" "-batch" "-eval" (elisp-sexp absolute-path)])


(defn absolute-file-path [path] (.getAbsolutePath (io/file path)))


(defn org->html
  [path]
  (apply shell/sh (emacs-shell-command (absolute-file-path path))))


;;; Read a lispy HTML template and generate real HTML using the ORG file as body;;;
;;; Embed org document inside the HTML template ;;;;
(defn remove-newlines [s] (str/replace s #"\n" ""))


(defn read-template-fn [path] (load-file path))


(defn create-page-data
  [org-file]
  {:body (:out (org->html org-file))
   :title "Site title!"})


(defn generate-page
  [template-fn data]
  (->> (template-fn data)
       (html)
       (remove-newlines)
       (str "<!doctype html>")))


;;; Handle shell errors ;;;
;;; Read all org-files in folder ;;;
;;; Support for org-mode options ;;;
;;; Watch source files for updates and regenerate if needed ;;;
(def state (atom {}))


(defn filename-without-extension
  [^java.io.File file]
  (str/join "." (drop-last (str/split (.getName file) #"\."))))


(defn get-file-path [f] (str/join "/" (drop 1 (str/split (.getPath f) #"/"))))


(defn copy-to-out
  [file]
  (let [destination (str (:out (config)) "/" (get-file-path file))]
    (io/make-parents destination)
    (io/copy
     file
     (io/file destination))))


(defn generate-org
  [file]
  (let [
        filename (filename-without-extension file)
        destination (str (:out (config)) "/" filename ".html")]
    (io/make-parents (io/file destination))
    (spit destination
          (generate-page
           (read-template-fn "resources/templates/default.clj")
           (create-page-data (.getAbsolutePath file))))))


(defn regenerate-file
  [_ {file :file kind :kind}]
  (let [file-extension (last (str/split (.getAbsolutePath file) #"\."))]
    (condp = file-extension
      "org" (generate-org file)
      (copy-to-out file))))


(defn process-all-source-files
  []
  (doall
   (for [f (drop 1 (file-seq (io/file "im-src")))]
     (when (.isFile f) (regenerate-file nil {:file f})))))


(defn start-watcher
  []
  (let [w (hawk/watch! [{:paths ["im-src/pages/"] :handler regenerate-file}])]
    (swap! state (fn [x] w))))


(defn stop-watcher [] (hawk/stop! @state) (reset! state nil))


;;; Main ;;;

(defn create-folders [] (.mkdirs (io/file (:out (config)))))

(defn -main
  [& args]
  (create-folders)
  (process-all-source-files)
  (start-watcher)
  (server/start))
