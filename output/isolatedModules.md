<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# isolatedModules

<!-- shortDescription -->
Perform additional checks to ensure that separate compilation (such as with transpileModule or @babel/plugin-transform-typescript) would be safe.

---

<!-- extendedDescription -->
This option will make sure that TypeScript can catch some constructs that are missed when using a separate compiler (such as Babel). When using Babel 7+ some of these missing constructs include: namespaces, bracket style type-assertion, enum merging, and legacy-style import/export syntax. This option ensures that these things are not missed.

---

<!-- references -->
- [TypeScript Blog - TypeScript and Babel 7](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/)
- [Babel Docs - @babel/plugin-transform-typescript](https://babeljs.io/docs/en/babel-plugin-transform-typescript)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
