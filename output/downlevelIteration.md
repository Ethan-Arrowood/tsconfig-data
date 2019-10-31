<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# downlevelIteration

<!-- shortDescription -->
Provide full support for iterables in for..of, spread and destructuring when targeting ES5 or ES3.

---

<!-- extendedDescription -->
The `downlevelIteration` flag enables full support for generators and the Iterator protocol for ES3 and ES5 projects. Without this option, generators and the Iterator protocol were only supported if the project `target` was ES6/ES2015 or later. This requires a native `Symbol.iterator` or `Symbol.iterator` shim at runtime for any non-array values. The second reference link _Downlevel Iteration for ES3/ES5 in TypeScript_ provides a wonderful breakdown of this property and exactly how it transforms your TypeScript code.

---

<!-- references -->
## References
- [TypeScript Handbook - TypeScript 2.3 - New --downlevelIteration](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#new---downleveliteration)
- [Downlevel Iteration for ES3/ES5 in TypeScript](https://mariusschulz.com/blog/downlevel-iteration-for-es3-es5-in-typescript)
- [MDN - Iteration Protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
