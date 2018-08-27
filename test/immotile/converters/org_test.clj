(ns immotile.converters.org-test
  (:require
   [clojure.test :refer :all]
   [clojure.java.io :as io]
   [hiccup.core :refer [html]]
   [immotile.converters.core :as c]
   [immotile.converters.org :as org]))

(def expected-path "test/resources/expected/org.html")
(def expected-html (slurp (html expected-path)))
(def generated (c/convert {} (io/file "test/resources/test.org")))


(comment
  ;; generate expected html
  (spit expected-path (:body generated)))


(deftest generates-html-from-org-files
  (testing "builds expected html")
  (is (= expected-html (html (:body generated))))

  (testing "reads date")
  (is (= "2018-02-28" (:date generated))))
