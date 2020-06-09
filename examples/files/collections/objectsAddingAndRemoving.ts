const myObject: { age?: number } = {}

myObject.age = 29

console.log('age' in myObject, myObject.age)

delete myObject.age

console.log('age' in myObject, myObject.age)

// Different...

myObject.age = undefined

console.log('age' in myObject, myObject.age)

export {}
