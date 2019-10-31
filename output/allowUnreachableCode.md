<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# allowUnreachableCode

<!-- shortDescription -->
Do not report errors on unreachable code.

---

<!-- extendedDescription -->
With this option enabled, the following code snippet will not yield any compilation errors 
```typescript
const fn = () => {
  if (true) {
    return 'reachable'
  } else {
    return 'also reachable'
  }
  return 'totally unreachable'
}
```

---

<!-- references -->
## References
- [TypeScript 1.8 - Unreachable code](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#unreachable-code)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
