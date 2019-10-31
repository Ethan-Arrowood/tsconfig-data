<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# inlineSourceMap

<!-- shortDescription -->
Emit a single file with source maps instead of having a separate file.

---

<!-- extendedDescription -->
The `--inlineSourceMap` option will include the debugging source mapping directly in the generated `*.js` file. If the `--inlineSources` option is **not** defined, then the source files must still be included. When this option is enabled alongside `--inlineSources`, then both the mappings and the source code are all included in the generated file. This flag does the opposite of the `--sourceMap` flag which will generate stand alone `*.map` files. See the `--inlineSources` and `--sourceMap` flags for more information on source mapping in TypeScript.

---

<!-- references -->
## References
- [Reddit - Inline source code in source maps](https://www.reddit.com/r/typescript/comments/95r3k8/inline_source_code_in_source_maps/)
- [StackOverflow - Difference between inlineSourceMap & inlineSources typescript compiler options](https://stackoverflow.com/questions/43291677/difference-between-inlinesourcemap-inlinesources-typescript-compiler-options)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
