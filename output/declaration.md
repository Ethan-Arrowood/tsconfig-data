<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# declaration

<!-- shortDescription -->
Generates corresponding .d.ts file.

---

<!-- extendedDescription -->
This flag will generate TypeScript type definition files when enabled. Type definition files are used to share types accross projects. For example, if the project you're working on will be published to a package registry and then used by other projects, use this flag to generate a definition file and make sure to publish it along side the compiled output code. When another developer installs your project, their TypeScript compiler will make use of the included definition file for type inferrence.
The documentation linked in the references section goes into further details on publishing declaration files in npm packages

---

<!-- references -->
- [TypeScript Handbook - Declaration Files - Publishing](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)
- []()
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
