const myObject1 = {
  name: 'Devin',
  age: 29,
}

const myObject2 = {
  eyeColor: 'blue',
  age: 30,
}

const myObject3 = {
  hairColor: 'brown',
}

// Merge 2 into 1

Object.assign(myObject1, myObject2)

console.log(myObject1)

// Merge 2 and 3 into a new object

const merged = { ...myObject2, ...myObject3 }

console.log(merged)

export {}
