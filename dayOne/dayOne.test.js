const findElvesWithMostCalories = require('./findElvesWithMostCalories')

const exampleData = 'example-data.txt'

describe('find max calories', () => {
    it('should find max calories', async() => {
        const actual = findElvesWithMostCalories(exampleData)

        expect(actual).toEqual(24000)
    })
})