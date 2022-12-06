const fs = require('fs')
const path = require('path')

exports = module.exports = (file) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')

  let marker = []
  let part1 = 0

  for ( const [index, char] of [...input].entries()) {
    const oldCharIndex = marker.findIndex(val => val === char)

    if (oldCharIndex > -1) marker = marker.slice(oldCharIndex + 1)
    marker.push(char)
    
    if (marker.length === 4) return part1 = index + 1
  }
  return part1
}
