const index = `const myNumber = require('./myNumber')

console.log(myNumber)
`

export default {
  files: [['index.js', index], ['myNumber.js', `module.exports = 42\n`]],
}
