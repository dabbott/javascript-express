const index = `import myNumber from './myNumber'

console.log(myNumber)
`

export default {
  initialTab: 'index.ts',
  entry: 'index.ts',
  files: {
    ['index' + FILE_EXTENSION]: index,
    ['myNumber' + FILE_EXTENSION]: `export default 42\n`,
  },
}
