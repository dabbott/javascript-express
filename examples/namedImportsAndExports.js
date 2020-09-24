const index = `import { myNumber, myString } from './myValues'

console.log(myNumber, myString)
`

const myValues = `export const myNumber = 42

export const myString = 'Hello, world!'
`

export default {
  files: {
    ['index' + FILE_EXTENSION]: index,
    ['myValues' + FILE_EXTENSION]: myValues,
  },
}
