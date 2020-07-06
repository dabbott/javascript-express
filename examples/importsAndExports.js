const index = `import myNumber from './myNumber'

console.log(myNumber)
`

export default {
  files: [['index.js', index], ['myNumber.js', `export default 42\n`]],
}
