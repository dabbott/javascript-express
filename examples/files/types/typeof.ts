const myString = 'hello'

console.log(typeof myString)

if (typeof myString === 'string') {
  // ...
}

if (typeof myVariableThatDoesNotExist === 'undefined') {
  // ...
}

console.log(typeof function() {})

// But this is only useful for (non-null) primitives and functions
console.log(typeof [], typeof {}, typeof null)
