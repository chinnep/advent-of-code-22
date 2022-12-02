const rockPaperScissors = require('./rockPaperScissors')

const exampleData = 'example-data.txt'

describe('find score if following strategy', () => {
    it('should have a score of 15', async() => {
        const actual = rockPaperScissors(exampleData)

        expect(actual).toEqual(15)
    })

    it('should have a score of 12', async() => {
        const actual = rockPaperScissors(exampleData, true)

        expect(actual).toEqual(12)
    })
})