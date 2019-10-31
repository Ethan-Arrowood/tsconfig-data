<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# incremental

<!-- shortDescription -->
Enable incremental compilation by reading/writing information from prior compilations to a file on disk. This file is controlled by the --tsBuildInfoFile flag.

---

<!-- extendedDescription -->
Introduced in TypeScript 3.4, the `--incremental` property saves information about the project graph from the previous compilation and uses that information to detect the least costly way to type-check and emit changes in the project. It will read/write information from a `.tsbuildinfo` file in whatever the output directory is. The `.tsbuildinfo` file can be specified using the `--tsBuildInfoFile` flag.

---

<!-- references -->
- [TypeScript Handbook - TypeScript 3.4](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
