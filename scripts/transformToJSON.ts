import path from 'path'
import fs from 'fs'
import readline from 'readline'

const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, 'template.md'))
})
