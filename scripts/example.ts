import path from 'path'
import fs from 'fs'
import transformToJSON from './transformToJSON'

async function main() {
  console.log("This is a basic example demonstrating the transform functions.")
  console.log("Step 1: Read JSON data from dummyData.json and write to a Markdown file dummy.md")
  
  const readFile = await fs.promises.readFile(path.join(__dirname, 'dummy.md'), 'utf8')
  const existingData = require("./dummyData.json")

  const lineByLine = readFile.split(/(\n)/)

  const output = transformToJSON(lineByLine)

  for (const prop in output) {
    if ( prop !== 'title') {
      existingData[output.title][prop] = output[prop]
    }
  }

  // console.log(output)
  console.log(existingData)

  const writeFile = await fs.promises.writeFile(path.join(__dirname, "dummyData.json"), JSON.stringify(existingData, null, 2), 'utf8')
}

main()