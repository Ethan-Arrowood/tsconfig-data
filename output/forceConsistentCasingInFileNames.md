<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# forceConsistentCasingInFileNames

<!-- shortDescription -->
Disallow inconsistently-cased references to the same file.

---

<!-- extendedDescription -->
Thie option will detect case-sensitive import issues at compile time. According to a blog post import statements are case-insensitive on Mac and Windows, but are case-sensitive on Linux. This inconsistency can cause issues when using speficic libraries.

---

<!-- references -->
## References
- [Case Sensitive Import Statements in Typescript - Brian De Sousa](https://briandesousa.net/2019/02/08/case-sensitive-import-statements-in-typescript/)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
