const ropeBridge = require('./ropeBridge')

const exampleData = 'example-data.txt'

describe('find path of tail end of rope', () => {
    it ('should calculate 13', async() => {
        const actual = ropeBridge(exampleData)

        expect(actual).toEqual(13)
    })
})