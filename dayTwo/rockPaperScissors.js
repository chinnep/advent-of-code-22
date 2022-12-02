const fs = require('fs')
const path = require('path')

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'

exports = module.exports = (file, calcEnding = false) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
    .split('\n')
    .map(el => el.replace('\r', ''))

  const getChoice = (choice) => {
    if(choice === 'A' || choice === 'X') return ROCK
    if(choice === 'B' || choice === 'Y') return PAPER
    if(choice === 'C' || choice === 'Z') return SCISSORS
  }

  const key = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3
  }

  const choiceBonus = {
    ROCK: 1, // Rock
    PAPER: 2, // Paper
    SCISSORS: 3  // Scissors
  }

  let score = 0

  const part1 = input
    .map(result => result.split(' '))
    .map(([elfChoice, yourChoice]) => {
      // Draw
      if (key[yourChoice] === key[elfChoice]) return 3 + key[yourChoice]

      else if (key[yourChoice] - key[elfChoice] === 1
        || key[yourChoice] - key[elfChoice] === -2) return 6 + key[yourChoice]

      else return 0 + key[yourChoice]
    })
    .reduce((score, round) => score + round, 0)

  const part2 = input
    .map(result => result.split(' '))
    .map(([elfChoice, ending]) => {
      // Draw
      if (ending === 'Y') return key[elfChoice] + 3

      // Wins
      if (ending === 'Z' && elfChoice === 'A') return 8 // They chose rock
      if (ending === 'Z' && elfChoice === 'B') return 9 // They chose paper
      if (ending === 'Z' && elfChoice === 'C') return 7 // They chose scissors

      // Loss
      if(ending === 'X' && elfChoice === 'A') return 3 // They chose Rock
      if(ending === 'X' && elfChoice === 'B') return 1 // They chose Paper
      if(ending === 'X' && elfChoice === 'C') return 2 // They chose Scissors
    })
    .reduce((score, round) => score + round, 0)

  return calcEnding ? part2 : part1

  // old method that didn't work for the final answer: 12572

  // for(line of input) {
  //   const round = line.split(' ')
  //   const yourChoice = getChoice(round[0])
  //   const opponentChoice = getChoice(round[1])

  //   // add in bonus from choice
  //   score+= choiceBonus[yourChoice]

  //   // Add in score from draw
  //   if (yourChoice === opponentChoice) score+=3

  //   // Add in score from wins
  //   else if(yourChoice === ROCK && opponentChoice === SCISSORS) score+=6
  //   else if(yourChoice === PAPER && opponentChoice === ROCK) score +=6
  //   else if(yourChoice === SCISSORS && opponentChoice === PAPER) score+=6
  // }
  // return score
}