// import data from '../tsconfig-data.json'
import data from './dummyData.json'
import path from 'path'
import fs from 'fs'

type DataObj = {
  shortDescription: string,
  extendedDescription: string,
  references: {
    title: string,
    link: string
  }[],
  [k: string]: unknown
}

function process(entry: [string, DataObj], templateLineByLine: string[]) {
  const [optionName, optionData] = entry
  const pattern = new RegExp(/<!-- (start|end):(title|shortDescription|extendedDescription|references|footer) -->/)
  let output = ''

  for (const line of templateLineByLine) {
    output += line + '\n'

    const match = line.match(pattern)
    if (match && match.length > 0 && match[1] === 'start') {
      switch(match[2]) {
        case 'title':
          output += `# ${optionName}\n`
          break
        case 'shortDescription':
          output += `${optionData.shortDescription}\n`
          break
        case 'extendedDescription':
          output += `${optionData.extendedDescription}\n`
          break
        case 'references':
          output += `## References\n${optionData.references.map(ref => `- [${ref.title}](${ref.link})`).join('\n')}`
          break
        default:
          break
      }
    }
  }

  return output
}

async function main2() {
  const templateReadFile = await fs.promises.readFile(path.join(__dirname, 'template.md'), 'utf8')
  const templateLineByLine = templateReadFile.split('\n')
  for await (let entry of Object.entries(data)) { 
    const entryOut = process(entry, templateLineByLine)
    await fs.promises.writeFile(path.join(__dirname, `${entry[0]}.md`), entryOut, 'utf8')
  }
}

main2()

