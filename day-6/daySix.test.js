const findMarker = require('./findMarker')

const exampleData = 'example-data.txt'

describe('find first marker to read faulty signal', () => {
    it ('should find first marker', async() => {
        const actual = findMarker(exampleData)

        expect(actual).toEqual(11)
    })
})