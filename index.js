const computeDayOne = require('./dayOne/findElvesWithMostCalories')
const computeDayTwo = require('./dayTwo/rockPaperScissors')

const realDataFile = 'real-data.txt'

console.log(`Day One results: `)
console.log(`Pt 1: ${computeDayOne(realDataFile)}, Pt 2: ${computeDayOne(realDataFile, true)}`)

console.log('========================================================================')

console.log(`Day Two results: `)
console.log(`Pt 1: ${computeDayTwo(realDataFile)}, Pt 2: ${computeDayTwo(realDataFile, true)}`)

console.log('========================================================================')
