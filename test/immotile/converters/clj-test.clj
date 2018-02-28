(ns immotile.converters.clj-test
  (:require
   [clojure.test :refer :all]
   [clojure.java.io :as io]
   [hiccup.core :refer [html]]
   [immotile.converters.core :as c]
   [immotile.converters.clj :as clj]))

(def expected-path "test/resources/expected/clj.html")
(def expected-html (slurp (html expected-path)))
(def generated (c/convert {} (io/file "test/resources/test.clj")))


(comment
  ;; generate expected html
  (spit expected-path (html (:body generated))))


(deftest generates-html-from-org-files
  (testing "builds expected html")
  (is (= expected-html (html (:body generated)))))
