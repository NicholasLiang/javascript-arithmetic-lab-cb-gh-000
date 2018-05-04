var add = (a,b) => a + b
var subtract = (a,b) => a - b
var multiply = (a,b) => a * b
var divide = (a,b) => a / b
var inc = (n) => n + 1
var dec = (n) => n - 1
var makeInt = (str) => parseInt(str, 10)
var preserveDecimal = (str) => parseFloat(str)


// describe('preserveDecimal(n)', function() {
//   it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
//     expect(preserveDecimal('2.222')).toBe(2.222)
//   })

//   it('returns NaN as appropriate', function() {
//     expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
//   })
// })