<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# inlineSources

<!-- shortDescription -->
Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap or --sourceMap to be set.

---

<!-- extendedDescription -->
The `--inlineSources` flag will append the TypeScript source code to the end of the generated `*.js` file for use with source mapping. This option requires either the `--inlineSourceMap` or `--sourceMap` options to be set. When this option is not enabled, the source code must be included with the bundle for source mapping to work properly.

---

<!-- references -->
- [Tice Hurst - Debugging - Using Source Maps](https://ticehurst.com/jsdocs/articles/debugging/sourcemaps.html)
- [StackOverflow - Difference between inlineSourceMap & inlineSources typescript compiler options](https://stackoverflow.com/questions/43291677/difference-between-inlinesourcemap-inlinesources-typescript-compiler-options)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
