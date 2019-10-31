import data from '../tsconfig-data.json'
import path from 'path'
import fs from 'fs'

const outDir = path.resolve('./output')

async function main () {
  const templateReadFile = await fs.promises.readFile(path.join(__dirname, 'template.md'), 'utf8')
  const templateLineByLine = templateReadFile.split('\n')

  try {
    await fs.promises.mkdir(outDir)
  } catch (err) {
    console.log('Output directory already exists -- overwriting')
  }

  const regex = new RegExp(/\<\!\-\- (\w+) \-\-\>/)

  for await (let entry of Object.entries(data)) {
    const [optionName, optionData] = entry

    const out = await fs.promises.open(path.join(outDir, `${optionName}.md`), 'w')

    for await (const line of templateLineByLine) {
      await fs.promises.appendFile(out, line + `\n`)

      // match comment lines for templating
      const match = line.match(regex)
      if (match && match.length > 0) {
        switch(match[1]) {
          case 'title':
            await fs.promises.appendFile(out, `# ${optionName}\n`)
            break
          case 'shortDescription':
            await fs.promises.appendFile(out, `${optionData.description}\n`)
            break
          case 'extendedDescription':
            await fs.promises.appendFile(out, `${optionData.extendedDescription}\n`)
            break
          case 'references':
            await fs.promises.appendFile(out, `${optionData.refLinks.map(ref => `- [${ref.title}](${ref.link})`).join('\n')}`)
            break
          default:
            break
        }
      }
    }

//     const outData = `
// # ${optionName}

// ${optionData.description}

// ---

// ${optionData.extendedDescription}

// ---

// ${optionData.refLinks.map(ref => `- [${ref.title}](${ref.link})`).join('\n')}

// This page was automatically generated.`

    // await fs.promises.writeFile(path.join(outDir, `${optionName}.md`), outData)
  }
}

main()

