(ns immotile.core
  (:require
   [clojure.java.shell :as shell]
   [clojure.java.io :as io])
  (:gen-class))


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


(defn org->html
  [path]
  (apply shell/sh (emacs-shell-command (.getAbsolutePath (io/file path)))))


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(comment
  "Prints all files in test/resources"
  (for [x (file-seq (io/file "./test/resources"))]
    (println x)))


(comment
  (spit "hello.html" (:out (org->html "test/resources/test.org")))

  (org->html "test/resources/test.org")

  (elisp-sexp "some/file/path")

  )
