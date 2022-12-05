const fs = require('fs')
const path = require('path')

exports = module.exports = (file, hasAnyOverlap = false) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
    .split('\n')
    .map(el => el.replace('\r', ''))

  const part1 = input
    .map(pair => {
      const [elfA, elfB] = pair.split(',')
      const [minA, maxA] = elfA.split('-').map(val => Number(val))
      const [minB, maxB] = elfB.split('-').map(val => Number(val))

      if ((minA <= minB && maxA >= maxB) || (minB <= minA && maxB >= maxA)) return 1

      return 0
    })
    .reduce((sum, isDuplicateWork) => sum + isDuplicateWork, 0)

    const part2 = input
    .map(pair => {
      const [elfA, elfB] = pair.split(',')
      const [minA, maxA] = elfA.split('-').map(val => Number(val))
      const [minB, maxB] = elfB.split('-').map(val => Number(val))

      // One section is completely encompassed by another
      if ((minA <= minB && maxA >= maxB) || (minB <= minA && maxB >= maxA)) return 1

      // Overlap on left side
      if ((minA <= minB && maxA >= minB) || (minB <= minA && maxB >= minA)) return 1

      // Overlap on right side
      if ((minA >= minB && minA <= maxB) || (minB >= minA && minB <= maxA)) return 1
  
      return 0
    })
    .reduce((sum, isDuplicateWork) => sum + isDuplicateWork, 0)

  return hasAnyOverlap? part2 : part1
}
