(ns immotile.post-test
  (:require [clojure.test :refer :all]
            [immotile.post :as sut])
  (:import java.time.LocalDate))

(def expected-new-page
  "#+title: 2018-01-01\n#+date: A Post Title\n* Header\nThe first paragraph...")

(deftest page-generation
  (testing "Default page generation"
    (is (= (sut/page-content (LocalDate/parse "2018-01-01") "A Post Title")
           expected-new-page))))
