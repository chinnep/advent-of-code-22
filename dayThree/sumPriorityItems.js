const fs = require('fs')
const path = require('path')

const map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

exports = module.exports = (file, calcGroupsofThree = false) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
    .split('\n')
    .map(el => el.replace('\r', ''))

  let priority = 0

  const part1 = input
    .map(rucksack => {
      const splitPoint = rucksack.length/2
      const compartmentA = rucksack.slice(0, splitPoint)
      const compartmentB = rucksack.slice(splitPoint)

      const priorityItem = [...compartmentA].find(item =>
        [...compartmentB].findIndex(b => b === item) > -1)

      return map.findIndex(item => item === priorityItem) + 1 // add one since we index at zero
    })
    .reduce((sum, priority) => sum + priority, 0)

    let badgeStack = []
    
    const part2 = input
    .map((rucksack, index) => {
      const i = index + 1

      if (i % 3 === 1) badgeStack = [...rucksack]
      else {
        badgeStack = badgeStack.filter(item => [...rucksack].findIndex(x => x === item) > -1)
      }
      
      // end of one group
      if (i % 3 === 0) return map.findIndex(item => item === badgeStack[0]) + 1
  
      return 0
    })
    .reduce((sum, priority) => sum + priority, 0)

  return calcGroupsofThree ? part2 : part1
}
