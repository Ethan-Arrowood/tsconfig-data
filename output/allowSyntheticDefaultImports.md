<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# allowSyntheticDefaultImports

<!-- shortDescription -->
Allow default imports from modules with no default export. This does not affect code emit, just typechecking.

---

<!-- extendedDescription -->
This rule enables the use of ES2015 style default imports even when the code being imported does not have an ES2015 default export. Default import and export correspond to `import Thing from 'code'` and `export default thing` respectively (see the reference link below for more details). Default exports have not always been apart of JavaScript. This option will allow you to use the default import syntax even when the corresponding code does not have a default export.
A great example of this is the popular `React` library. `React` ships a built version of itself that does not make use of ES2015's default export. With TypeScript, to import `React` **without** the `allowSyntheticDefaultImports` enabled, you must use `import * as React from 'react'`. By enabling the option, this import can be simplified to `import React from 'react'`. This compiler option is also enabled by default when using the `esModuleInterop` compiler option.

---

<!-- references -->
- [Getting started with TypeScript and React](https://javascriptplayground.com/react-typescript/)
- [Do I need to enable allowSyntheticDefaultImports if esModuleInterop is true?](https://stackoverflow.com/questions/52576203/do-i-ever-need-explicit-allowsyntheticdefaultimports-if-esmoduleinterop-is-true)
- [Default import/export example](https://github.com/Microsoft/TypeScript/issues/7185#issuecomment-421632656)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
