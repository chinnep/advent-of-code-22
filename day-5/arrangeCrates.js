const fs = require('fs')
const path = require('path')

const a = 1
// REAL DATA
const stacks = [
  ['P','F','M','Q','W','G','R','T'],
  ['H','F','R'],
  ['P','Z','R','V','G','H','S','D'],
  ['Q','H','P','B','F','W','G'],
  ['P','S','M','J','H'],
  ['M','Z','T','H','S','R','P','L'],
  ['P','T','H','N','M','L'],
  ['F','D','Q','R'],
  ['D','S','C','N','L','P','H']
]

// EXAMPLE DATA
// const stacks = [
//   ['Z','N'],
//   ['M','C','D'],
//   ['P']
// ]

exports = module.exports = (file, hasAnyOverlap = false) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
    .split('\n')
    .map(el => el.replace('\r', ''))
    .map(step => {
      // a, b, and c are the words between numbers
      const [a, numOfCratesToMove, b, start, c, end] = [...step.split(' ')]

      for (let i = 0; i < numOfCratesToMove; i++) {
        stacks[end-1].push(stacks[start-1].pop())
      }
    })

    let part1 = ''
    for (let i = 0; i < stacks.length; i++) {
      part1 += stacks[i].pop()
    }
  return part1
}
