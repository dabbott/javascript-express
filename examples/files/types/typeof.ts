const myString = 'hello'

console.log(typeof myString)

if (typeof myString === 'string') {
  // ...
}

if (typeof myVariableThatDoesNotExist === 'undefined') {
  // ...
}

console.log(typeof function() {})

// But this is only useful for primitives and functions
console.log(typeof [], typeof {}, typeof null)
