const computeDayOne = require('./day-1/findElvesWithMostCalories')
const computeDayTwo = require('./day-2/rockPaperScissors')
const computeDayThree = require('./day-3/sumPriorityItems')
const computeDayFour = require('./day-4/duplicateCleanup')
const computeDayFive = require('./day-5/arrangeCrates')
const computeDaySix = require('./day-6/findMarker')
// const computeDaySeven = require('./day-7/calcSumofDirectories')
const computeDayNine = require('./day-9/ropeBridge')

const realDataFile = 'real-data.txt'

console.table({
    'Day 1': `Pt 1: ${computeDayOne(realDataFile)}, Pt 2: ${computeDayOne(realDataFile, true)}`,
    'Day 2': `Pt 1: ${computeDayTwo(realDataFile)}, Pt 2: ${computeDayTwo(realDataFile, true)}`,
    'Day 3': `Pt 1: ${computeDayThree(realDataFile)}, Pt 2: ${computeDayThree(realDataFile, true)}`,
    'Day 4': `Pt 1: ${computeDayFour(realDataFile)}, Pt 2: ${computeDayFour(realDataFile, true)}`,
    'Day 5': `Pt 1: ${computeDayFive({ file: realDataFile, usingRealData: true })}, Pt 2: ${computeDayFive({ file: realDataFile, usingRealData: true, versionIs9001:true })}`,
    'Day 6': `Pt 1: ${computeDaySix(realDataFile)}, Pt 2: ${computeDaySix(realDataFile, true)}`,
    'Day 9': `Pt 1: ${computeDayNine(realDataFile)}`

    // 'Day 7': `Pt 1: ${computeDaySeven(realDataFile)}, Pt 2: ${computeDaySeven(realDataFile)}`
})
