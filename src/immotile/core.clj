(ns immotile.core
  (:require
   [clojure.java.shell :as shell]
   [clojure.java.io :as io])
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


(defn emacs-shell-command
  [absolute-path]
  ["emacs" "-batch" "-eval" (elisp-sexp absolute-path)])


(defn absolute-file-path [path] (.getAbsolutePath (io/file path)))


(defn org->html
  [path]
  (apply shell/sh (emacs-shell-command (absolute-file-path path))))


;;; Read a lispy HTML template and generate real HTML ;;;
;;; Embed org document inside the HTML template ;;;;
;;; Handle shell errors ;;;
;;; Read all org-files in folder ;;;
;;; Support for org-mode options ;;;
;;; Serve generated HTML with webserver ;;;
;;; Watch source files for updates and regenerate if needed ;;;


;;; Main ;;;

(defn -main
  [& args]
  (println args)
  (println (first args))
  (spit "out.html" (:out (org->html (first args)))))


(comment
  "Prints all files in test/resources"
  (for [x (file-seq (io/file "./test/resources"))]
    (println x)))


(comment
  (spit "hello.html" (:out (org->html "test/resources/test.org")))

  (org->html "test/resources/test.org")

  (elisp-sexp "some/file/path")

  )
