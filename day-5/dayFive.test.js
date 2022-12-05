const arrangeCrates = require('./arrangeCrates')

const exampleData = 'example-data.txt'

describe('find crates on the top of the stacks', () => {
    it ('should have rearranged crates', async() => {
        const actual = arrangeCrates(exampleData)

        expect(actual).toEqual('CMZ')
    })
})