module.exports = function reverse (n) {
   let str = Math.abs(n)
   return str.toString().split('').reverse().join('')
}