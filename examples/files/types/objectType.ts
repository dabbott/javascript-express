type MyObjectType = {
  name: string
  age: number
}

const myObject: MyObjectType = {
  name: 'Devin',
  age: 29,
}

console.log(myObject)

// Property access
console.log(myObject['name'])

console.log(myObject.name)

// Property assignment
myObject['eyeColor'] = 'blue'

console.log(myObject['eyeColor'])

// More on objects later!

export {}
