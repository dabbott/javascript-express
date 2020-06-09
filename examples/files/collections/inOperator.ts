const myObject = {
  name: 'Devin',
  age: 29,
}

console.log('age' in myObject)

console.log(myObject.hasOwnProperty('age'))

// Inherited:

console.log('constructor' in myObject)

console.log(myObject.hasOwnProperty('constructor'))

export {}
