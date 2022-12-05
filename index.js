const computeDayOne = require('./day-1/findElvesWithMostCalories')
const computeDayTwo = require('./day-2/rockPaperScissors')
const computeDayThree = require('./day-3/sumPriorityItems')
const computeDayFour = require('./day-4/duplicateCleanup')

const realDataFile = 'real-data.txt'

console.log(`Day One results: `)
console.log(`Pt 1: ${computeDayOne(realDataFile)}, Pt 2: ${computeDayOne(realDataFile, true)}`)

console.log('========================================================================\n')

console.log(`Day Two results: `)
console.log(`Pt 1: ${computeDayTwo(realDataFile)}, Pt 2: ${computeDayTwo(realDataFile, true)}`)

console.log('========================================================================\n')

console.log(`Day Three results: `)
console.log(`Pt 1: ${computeDayThree(realDataFile)}, Pt 2: ${computeDayThree(realDataFile, true)}`)

console.log('========================================================================\n')

console.log(`Day Four results: `)
console.log(`Pt 1: ${computeDayFour(realDataFile)}, Pt 2: ${computeDayFour(realDataFile, true)}`)

console.log('========================================================================\n')
