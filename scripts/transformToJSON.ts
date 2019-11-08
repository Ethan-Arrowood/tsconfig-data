import path from 'path'
import fs from 'fs'

type ProcessedObj = { 
  title: string,
  shortDescription: string,
  extendedDescription: string,
  references: {
    title: string,
    link: string
  }[],
  [k: string]: unknown
}

function proccessFileContents(file: string[]) {
  const pattern = new RegExp(/<!-- (start|end):(title|shortDescription|extendedDescription|references|footer) -->/)
  const obj: ProcessedObj = {
     title: '',
     shortDescription: '',
     extendedDescription: '',
     references: []
  }
  let currentSection
  for (const line of file) {
    const match = line.match(pattern)
    if (match && match[1] === 'start') {
      currentSection = match[2]
    } else if (match && match[1] === 'end') {
      currentSection = undefined
    } else if (currentSection === 'shortDescription' || currentSection === 'extendedDescription') {
      obj[currentSection] += line
    } else if (currentSection === 'title') {
      const titleMatch = line.match(/# (\w+)/)
      obj.title += titleMatch ? titleMatch[1] : ''
    } else if (currentSection === 'references') {
      const referenceMatch = line.match(/- \[(\w+)\]\((.+)\)/)
      if (referenceMatch && referenceMatch.length === 3) {
        obj.references.push({
          title: referenceMatch ? referenceMatch[1] : '',
          link: referenceMatch ? referenceMatch[2] : ''
        })
      }
    }
  }
  return obj
}

async function main() {
  const readFile = await fs.promises.readFile(path.join(__dirname, 'dummy.md'), 'utf8')
  const lineByLine = readFile.split(/(\n)/)
  
  const output = proccessFileContents(lineByLine)
  console.log(output)
}

main()