<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# composite

<!-- shortDescription -->
Ensure TypeScript can determine where to find the outputs of the referenced project to compile project.

---

<!-- extendedDescription -->
Enabling this flag changes a few things:
- The `rootDir` setting, if not explicitly set, defaults to the directory containing the `tsconfig` file
- All implementation files must be matched by an `include` pattern or listed in the `files` array. If this constraint is violated, `tsc` will inform you which files weren't specified
- `declaration` must be enabled
Use this flag when developing with the Project References pattern detailed in the documentation in the references section.

---

<!-- references -->
- [TypeScript Handbook - Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
