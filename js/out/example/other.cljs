(ns example.other)

(defn speak [e] (println "speaking... again" e))

(defn scroll-to-top
  []
  (set! (.. js/document -documentElement -scrollTop) 0)
  (set! (.. js/document -body -scrollTop) 0))
