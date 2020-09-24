const index = `const myNumber = require('./myNumber')

console.log(myNumber)
`

export default {
  files: {
    ['index' + FILE_EXTENSION]: index,
    ['myNumber' + FILE_EXTENSION]: `module.exports = 42\n`,
  },
}
