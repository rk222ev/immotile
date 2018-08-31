(ns ^:figwheel-no-load =PROJECT-NS=.core
  "Init namespace. Will only be loaded by figwheel on first page load.
  Should handle all stateful operations."
  (:require [=PROJECT-NS=.other :as o]))

#_(enable-console-print!)

(defn init-listeners
  []
  (when-let [el (js/document.getElementById "kalle")]
    (.. el
        (addEventListener "click" #(o/speak %))))

  (.. js/document
      (getElementById "wrap")
      (insertAdjacentHTML "beforeend" "<div id=\"return-to-top\"></div>"))
  (.. js/document (getElementById "return-to-top")
      (addEventListener "click" #(o/scroll-to-top))))


(js/document.addEventListener "DOMContentLoaded" init-listeners)
