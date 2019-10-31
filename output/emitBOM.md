<!-- Important! Do not modify comment blocks. They are necessary for the transformer to work properly -->

<!-- title -->
# emitBOM

<!-- shortDescription -->
Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.
---

<!-- extendedDescription -->
Adds the "\uFEFF" to the start of all output files. This mark is called a Byte Order Mark (BOM) and is an adstract character used to declare and recognize Unicode encoding of a text file. Node.js specifically detecs the "\uFEFF" at the start of the string and replaces it with the actual BOM from the specified encoding.
---

<!-- references -->
- [Byte Order Mark](https://simple.wikipedia.org/wiki/Byte_order_mark)
- [sys.ts code reference](https://github.com/microsoft/TypeScript/blob/70b7bd5a1b8c3bc1ba7c644b37412368607706e6/src/compiler/sys.ts#L639-L641)
---

<!-- footer -->
The data on this page is available as a JSON object. Edits can be made in either JSON or here in Markdown.
