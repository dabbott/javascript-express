const index = `import { myNumber, myString } from './myValues'

console.log(myNumber, myString)
`

const myValues = `export const myNumber = 42

export const myString = 'Hello, world!'
`

export default {
  files: [['index.js', index], ['myValues.js', myValues]],
}
