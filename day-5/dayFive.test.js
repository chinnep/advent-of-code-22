const arrangeCrates = require('./arrangeCrates')

const exampleData = 'example-data.txt'

describe('find crates on the top of the stacks', () => {
    it ('should have rearranged crates one crate at a time', async() => {
        const actual = arrangeCrates({ file: exampleData })

        expect(actual).toEqual('CMZ')
    })

    it ('should have rearranged crates bulk crates at a time', async() => {
        const actual = arrangeCrates({ file: exampleData, versionIs9001: true })

        expect(actual).toEqual('MCD')
    })
})