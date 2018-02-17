(ns immotile.core
  (:require
   [clojure.java.shell :as shell]
   [clojure.java.io :as io]
   [clojure.string :as str]
   [compojure.core :refer [defroutes]]
   [compojure.route :as route]
   [hiccup.core :refer [html]]
   [org.httpkit.server :as server])
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


(comment
  (spit "out.html"
        (generate-page
         (read-template-fn "resources/templates/default.clj")
         (create-page-data "test/resources/test.org")))

)

;;; Handle shell errors ;;;
;;; Read all org-files in folder ;;;
;;; Support for org-mode options ;;;
;;; Serve generated HTML with webserver ;;;
(defn serve-static [req]
  (let [mime-types {".clj" "text/plain"
                    ".mp4" "video/mp4"
                    ".ogv" "video/ogg"}
        strip-leading-slash (fn [s] (str/replace-first s "/" ""))
        headers (if-let [mimetype (mime-types (re-find #"\..+$" (:uri req)))]
                  {:headers {"Content-Type" mimetype}})
        body (slurp (strip-leading-slash (:uri req)))]
    {:body body :headers headers}))


(comment
  (serve-static {:uri "/out.html" :headers {}}))


(defn run []
  (server/run-server serve-static {:port 8080}))

;;; Watch source files for updates and regenerate if needed ;;;


;;; Main ;;;

(defn -main
  [& args]
  (println args)
  (println (first args))
  (spit "out.html" (:out (org->html (first args)))))
