<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# esModuleInterop

<!-- shortDescription -->
Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility.

---

<!-- extendedDescription -->
The `--esModuleInterop` flag enables more babel like import styles. Technically, it updates CommonJS/AMD/UMD modules emit to syntehsize namespace records based on the presence of an __esModule indicator. This will slightly change how modules are imported. Firstly, namespace imports `import * as foo from 'foo'` is now uncallable (i.e. `foo()` is considered invalid). Secondly, default imports are now allowed (`import fs from 'fs'`) and will work as expected. Keep in mind that if the compiler option `module` is set to `es2015` you'll also need to enable the `allowSyntheticDefaultImports` option aswell.

---

<!-- references -->
## References
- [TypeScript Handbook - TypeScript 2.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-from-commonjs-modules-with---esmoduleinterop)
- [StackOverflow esModuleInterop flag](https://stackoverflow.com/questions/48785451/is-there-a-way-to-use-esmoduleinterop-in-tsconfig-as-opposed-to-it-being-a-fla)
- [Great Import Schism: TypeScript confusion around imports explained](https://itnext.io/great-import-schism-typescript-confusion-around-imports-explained-d512fc6769c2)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
