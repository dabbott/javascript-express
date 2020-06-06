Object.prototype['foo'] = 123

const myObject = {
  name: 'Devin',
  age: 29,
}

let string = ''

for (let key in myObject) {
  if (!myObject.hasOwnProperty(key)) continue

  string += `${key}=${myObject[key]} `
}

console.log(string)

export {}
