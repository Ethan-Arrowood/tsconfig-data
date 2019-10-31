<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# checkJs

<!-- shortDescription -->
Report errors in .js files.
---

<!-- extendedDescription -->
This option must be used in conjunction with `--allowJs`. While `--allowJs` does a very cursory check of `.js` files, and passes them through to the compiler output, this option, `--chechJs` actually type checks the JavaScript code. It does so through the use of inferrence and JSDoc annotations. In your code itself, make use of the `// @ts-nocheck` and `// @ts-check` comments to create a blacklist/whitelist of files to check. Additionally, use the `// @ts-ignore` to ignore specific lines of code directly (place the comment on the preceding line). This compiler option is another great tool for converting JavaScript projects to TypeScript.
---

<!-- references -->
- [Type Checking JavaScript Files](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html)
- [Type-Checking JavaScript Files with --checkJs in TypeScript](https://mariusschulz.com/blog/type-checking-javascript-files-with-checkjs-in-typescript)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
