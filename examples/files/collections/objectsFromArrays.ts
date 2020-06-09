const myObject = {
  name: 'Devin',
  age: 29,
}

const entries = Object.entries(myObject)

// Flip keys and values

const myFlippedObject = Object.fromEntries(
  entries.map(([key, value]) => [value, key])
)

console.log(myFlippedObject)

// Include both original and flipped

const myMapping = entries.reduce((result, [key, value]) => {
  result[key] = value
  result[value] = key
  return result
}, {})

console.log(myMapping)

export {}
