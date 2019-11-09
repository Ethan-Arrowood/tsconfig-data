import path from 'path'
import fs from 'fs'
import transformToJSON from './transformToJSON'
import transformToMarkdown from './transformToMD'

async function main() {
  console.log("This is a basic example demonstrating the transform functions.")
  console.log("Step 1: Read the Markdown file dummy.md and modify one of the JSON fields. We are going to update the short description.")
  // read markdown file
  const markdownReadFile = await fs.promises.readFile(path.join(__dirname, 'dummy.md'), 'utf8')
  const markdownLineByLine = markdownReadFile.split(/(\n)/)
  // transform to JSON
  const output = transformToJSON(markdownLineByLine)
  // Change short description
  output['shortDescription'] = "The quick brown fox jumps over the lazy dog. Jinxed wizards pluck ivy from the big quilt."
  // get existing JSON data
  const jsonReadFile = await fs.promises.readFile(path.join(__dirname, 'dummyData.json'), 'utf8')
  const jsonData = JSON.parse(jsonReadFile)
  // merge from markdown
  for (const prop in output) {
    if ( prop !== 'title') {
      jsonData[output.title][prop] = output[prop]
    }
  }

  console.log("Step 2: After merging the data with the existing JSON data, write the output to dummy.json and to dummy.md")
  // read template markdown file
  const templateReadFile = await fs.promises.readFile(path.join(__dirname, 'template.md'), 'utf8')
  const templateLineByLine = templateReadFile.split('\n')
  // transform the json data to markdown
  const markdownOut = transformToMarkdown(jsonData, templateLineByLine)
  // write everything to the respective files
  const writeJSONFile = await fs.promises.writeFile(path.join(__dirname, "dummyData.json"), JSON.stringify(jsonData, null, 2), 'utf8')
  const writeMarkdown = await fs.promises.writeFile(path.join(__dirname, "dummy.md"), markdownOut, 'utf8')
}

main()