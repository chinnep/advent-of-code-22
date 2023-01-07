const fs = require('fs')
const path = require('path')

exports = module.exports = (file, findFirstMessageMarker = false) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')

  let marker = []
  const lengthOfMarker = findFirstMessageMarker ? 14 : 4

  for ( const [index, char] of [...input].entries()) {
    const oldCharIndex = marker.findIndex(val => val === char)

    if (oldCharIndex > -1) marker = marker.slice(oldCharIndex + 1)
    marker.push(char)
    
    if (marker.length === lengthOfMarker) return index + 1
  }
}
