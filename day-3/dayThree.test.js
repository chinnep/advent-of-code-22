const sumPriorityItems = require('./sumPriorityItems')

const exampleData = 'example-data.txt'

describe('find priority scores', () => {
    it('should have a priority of 157', async() => {
        const actual = sumPriorityItems(exampleData)

        expect(actual).toEqual(157)
    })

    it('should have a priority score of 70 for groups of the three elves per badge', async() => {
        const actual = sumPriorityItems(exampleData, true)

        expect(actual).toEqual(70)
    })
})