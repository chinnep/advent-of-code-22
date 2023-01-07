const findMarker = require('./findMarker')

const exampleData = 'example-data.txt'

describe('find first marker to read faulty signal', () => {
    it ('should find first marker', async() => {
        const actual = findMarker(exampleData)

        expect(actual).toEqual(11)
    })

    it ('should find first start of message marker', async() => {
        const actual = findMarker(exampleData, true)

        expect(actual).toEqual(26)
    })
})