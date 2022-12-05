const duplicateCleanup = require('./duplicateCleanup')

const exampleData = 'example-data.txt'

describe('find score if following strategy', () => {
    it ('should have 2 pairs of elves where one elf is entirely doing work that is already assigned', async() => {
        const actual = duplicateCleanup(exampleData)

        expect(actual).toEqual(2)
    })

    it ('should have 2 pairs of elves where one elf has overlap with another elf', async() => {
        const actual = duplicateCleanup(exampleData, true)

        expect(actual).toEqual(4)
    })
})