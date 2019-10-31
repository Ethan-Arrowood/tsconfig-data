<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# importHelpers

<!-- shortDescription -->
Import emit helpers (e.g. __extends, __rest, etc..) from [tslib](https://www.npmjs.com/package/tslib)
---

<!-- extendedDescription -->
TypeScript automatically generates something called _helper_ functions for paradigms such as inheritance, spread/res operator, decorators, and async/await. The helper functions are injected into every file that uses one of the previously mentioned concepts. In large repositories with many files, this injection can lead to noticeably bigger bundle sizes. The `--importHelpers` property includes these helper functions in a library called `tslib` and references those functions from the lib using `require` statements. This can dramatically decrease bundle size for large applications.
---

<!-- references -->
- [External Helpers Library in TypeScript](https://mariusschulz.com/blog/external-helpers-library-in-typescript)
- [tslib GitHub repository](https://github.com/microsoft/tslib)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
