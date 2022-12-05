const fs = require('fs')
const path = require('path')

exports = module.exports = (file, calcTopThree = false) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
    .split('\n')
    // Matt's solution
    // .split('\n\n') // split by elf
    // .map(elf => elf.split(`\n`).reduce((a, b) => a + parseInt(b), 0)) // add up each elf
    // .sort((a, b) => b - a) // sort in descending order
    // .slice() //
    
  let runningTotal = 0
  let elfCalories = []

  for(line of input) {
    const caloriesCollected = parseInt(line)
    if (caloriesCollected) {
      runningTotal+=parseInt(line)
    }
    else {
      elfCalories.push(runningTotal)
      runningTotal = 0
    }
  }
  elfCalories.push(runningTotal)

  elfCalories.sort((a, b) => b - a)

  return calcTopThree ? elfCalories[0] + elfCalories[1] + elfCalories[2] : elfCalories[0]
}