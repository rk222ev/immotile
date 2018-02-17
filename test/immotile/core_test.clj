(ns immotile.core-test
  (:require [clojure.test :refer :all]
            [immotile.core :refer :all]))

(def expected-elisp-exp
  "(progn (find-file \"some/file/path\") (progn (org-html-export-as-html nil nil nil t nil) (with-current-buffer \"*Org HTML Export*\" (princ (org-no-properties (buffer-string))))))")

(deftest elisp-exp
  (testing "")
  (is (= expected-elisp-exp (elisp-sexp "some/file/path"))))


(def expected-html "<!doctype html><html><head><meta charset=\"UTF-8\" /><meta content=\"ie=edge\" http-equiv=\"x-ua-compatible\" /><meta content=\"\" name=\"description\" /><meta content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" name=\"viewport\" /><title>Site title!</title></head><body><div><p>Hello there</p><div class=\"content\"></div><div id=\"table-of-contents\"><h2>Table of Contents</h2><div id=\"text-table-of-contents\"><ul><li><a href=\"#sec-1\">1. Hello</a><ul><li><a href=\"#sec-1-1\">1.1. Something</a></li></ul></li></ul></div></div><div id=\"outline-container-sec-1\" class=\"outline-2\"><h2 id=\"sec-1\"><span class=\"section-number-2\">1</span> Hello</h2><div class=\"outline-text-2\" id=\"text-1\"></div><div id=\"outline-container-sec-1-1\" class=\"outline-3\"><h3 id=\"sec-1-1\"><span class=\"section-number-3\">1.1</span> Something</h3><div class=\"outline-text-3\" id=\"text-1-1\"><p>A bit of text</p></div></div></div></div></body></html>")

(deftest html-generation
  (testing "builds expected html")
  (is (= expected-html
         (generate-page
          (read-template-fn "resources/templates/default.clj")
          (create-page-data "test/resources/test.org")))))
