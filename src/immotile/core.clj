(ns immotile.core
  (:require
   [clojure.java.shell :as shell]
   [clojure.java.io :as io]
   [clojure.pprint :as pprint])
  (:gen-class))


(def config {})


(defn ->quoted-str
  [s]
  (str "\"" s "\""))


(def org-export-command
  (pprint/cl-format false "~a"
                    `("progn"
                      ("org-html-export-as-html nil nil nil t nil")
                      ("with-current-buffer" ~(->quoted-str "*Org HTML Export*")
                        ("princ" ("org-no-properties" ("buffer-string")))))))



(defn org->html
  [path]
  (let [absolute-path (.getAbsolutePath (io/file path))]
    (shell/sh
     "emacs"
     "-batch" "-eval"
     (pprint/cl-format false "~a"
                       `("progn"
                         ("find-file" ~(->quoted-str absolute-path))
                         ~org-export-command)))))


(comment
  "Prints all files in test/resources"
  (for [x (file-seq (io/file "./test/resources"))]
    (println x)))


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(comment
  (org->html "test/resources/test.org")


  )
