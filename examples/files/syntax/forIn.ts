const myObject = {
  name: 'Devin',
  age: 29,
}

let string = ''

for (let key in myObject) {
  string += `${key}=${myObject[key]} `
}

console.log(string)

export {}
