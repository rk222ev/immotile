(ns immotile.post
  (:require [clojure.string :as str]
            [immotile.io :as io])
  (:import java.time.LocalDate))

(defn page-content
  [title date]
  (str "#+title: " title "\n"
       "#+date: " date "\n"
       "* Header\n"
       "The first paragraph..."))

(defn create
  [{:keys [:src] :as config} title]
  (let [date (LocalDate/now)
        year (.getYear date)
        path (str/join "/" [src "posts" year ""])
        kebab-cased-title (str (str/replace title #" " "-") ".org")
        dest (str path kebab-cased-title)]
    (io/make-parents dest)
    (spit dest (page-content title date))
    dest))
