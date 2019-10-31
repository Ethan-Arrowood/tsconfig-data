<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# allowUnusedLabels

<!-- shortDescription -->
Do not report errors on unused labels.

---

<!-- extendedDescription -->
A perceptively unknown, or rarely used JavaScript feature is a labeled statement. It is used with `break` or `continue` statements in loop operations. The `allowUnusedLabels` flag enables TypeScript to not report errors when a label is unused such as in the following code snippet: 
```typescript
loop: while(x < 10) {
  x++
}
```

---

<!-- references -->
## References
- [TypeScript 1.8 - Unused labels](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#unused-labels)
- [MDN web docs - label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
