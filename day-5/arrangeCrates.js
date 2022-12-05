const fs = require('fs')
const path = require('path')

const getStacks = (usingRealData = false) => usingRealData
  ? {
    1: ['P','F','M','Q','W','G','R','T'],
    2: ['H','F','R'],
    3: ['P','Z','R','V','G','H','S','D'],
    4: ['Q','H','P','B','F','W','G'],
    5: ['P','S','M','J','H'],
    6: ['M','Z','T','H','S','R','P','L'],
    7: ['P','T','H','N','M','L'],
    8: ['F','D','Q','R'],
    9: ['D','S','C','N','L','P','H']
  }
  : {
    1: ['Z','N'],
    2: ['M','C','D'],
    3: ['P']
  }

exports = module.exports = ({ file, usingRealData = false, versionIs9001 = false }) => {
  let stacks = getStacks(usingRealData)

  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
    .split('\n')
    .map(el => el.replace('\r', ''))

    input
    .map(step => {
      // a, b, and c are the words between numbers
      const [a, numOfCratesToMove, b, start, c, end] = [...step.split(' ')]

      for (let i = 0; i < numOfCratesToMove; i++) {
        stacks[end].push(stacks[start].pop())
      }
    })

    let part1 = ''
    Object.values(stacks).forEach(stack => part1 += stack.pop())

    // reset the stacks
    stacks = getStacks(usingRealData)

    input
    .map(step => {
      // a, b, and c are the words between numbers
      const [a, numOfCratesToMove, b, start, c, end] = [...step.split(' ')]
      // Remove crates from starting stack
      const cratesBeingMoved = stacks[start].splice(-numOfCratesToMove)

      // Add crates to end stack
      stacks[end] = stacks[end].concat(cratesBeingMoved)
    })

    let part2 = ''
    Object.values(stacks).forEach(stack => part2 += stack.pop())

  return versionIs9001 ? part2 : part1
}
