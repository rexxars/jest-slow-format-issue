const prettyFormat = require('pretty-format')

function getBigBuffer(size) {
  var buffer = new Buffer(size)

  return {
    size: size,
    buffer: buffer,
    unrelated: {
      prop: true
    }
  }
}

describe('buffer issue', () => {
  it('should compare something', () => {
    console.time('Expect')
    expect(getBigBuffer(500000)).toHaveProperty('unrelated.prop')
    console.timeEnd('Expect')
  })

  it.skip('just plain pretty-format', () => {
    console.time('Format')
    prettyFormat(getBigBuffer(500000))
    console.timeEnd('Format')
  })
})

afterAll(() => new Promise(resolve => {
  console.log('Press ctrl + c within 10 seconds to generate profile')
  setTimeout(resolve, 10000)
}))
