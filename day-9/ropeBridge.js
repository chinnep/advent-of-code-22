const fs = require('fs')
const path = require('path')

exports = module.exports = (file) => {
  // Set initial state
  var grid = Array(1000).fill(null).map(() => Array(1000).fill(0))
  let head = [500, 500]
  let tail = [500, 500]
  grid[500][500] = 1

  // helpers
  const isAdjacent = Math.abs(head[0] - tail[0] === 1) && head[1] - tail[1] === 0 || // same column
    Math.abs(head[1] - tail[1] === 1) && head[0] - tail[0] === 0 || // same row
    Math.abs(head[0] - tail[0] === 1) && Math.abs(head[1] - tail[1] === 1) // diagonally adjacent


  const moves = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
  .split('\n')
  .forEach(move => {
    const [direction, steps] = move.split(' ').map((val, index) => index === 1 ? parseInt(val) : val)

    for (let i = 0; i < steps; i++) {
      // Move head
      if (direction === 'U') --head[0]
      else if (direction === 'D') ++head[0]
      else if (direction === 'L') --head[1]
      else if (direction === 'R') ++head[1]

      if (isAdjacent) continue

      // Move tail based on head position
      if (tail[0] - head[0] > 1 && head[1] === tail[1]) --tail[0] // Head is above tail
      else if (head[0] - tail[0] > 1 && head[1] === tail[1]) ++tail[0] // Head is below tail
      else if (tail[1] - head[1] > 1 && head[0] === tail[0]) --tail[1] // Head is left of tail
      else if (head[1] - tail[1] > 1 && head[0] === tail[0]) ++tail[1] // Head is right of tail

      // Diagonal Cases

      //           . H
      // . . H     . .
      // T . .  or T .
      else if (head[1] - tail[1] === 2 && tail[0] > head[0] ||
        tail[0] - head[0] === 2 && tail[1] < head[1]) {
          --tail[0]
          ++tail[1]
      }

      //           H .
      // H . .     . .
      // . . T  or . T
      else if (tail[1] - head[1] === 2 && tail[0] > head[0] ||
        tail[0] - head[0] === 2 && tail[1] > head[1]) {
          --tail[0]
          --tail[1]
      }

      //           T .
      // T . .     . .
      // . . H  or . H
      else if (head[1] - tail[1] === 2 && tail[0] < head[0] ||
        head[0] - tail[0] === 2 && tail[1] < head[1]) {
          ++tail[0]
          ++tail[1]
      }

      //           . T
      // . . T     . .
      // H . .  or H .
      else if (tail[1] - head[1] === 2 && tail[0] < head[0] ||
        head[0] - tail[0] === 2 && tail[1] > head[1]) {
          ++tail[0]
          --tail[1]
      }

      // console.table({
      //   direction,
      //   steps,
      //   currentStep: i + 1,
      //   head,
      //   tail
      // })

      grid[tail[0]][tail[1]] = 1
    }
  })

  return grid.reduce((a,b) => a + b.reduce((c,d) => c + d, 0), 0)
}
