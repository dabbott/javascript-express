const myObject = {
  name: 'Devin',
  age: 29,
  contents: function contents() {
    return this
  },
}

console.log(myObject.contents())

const alias = myObject.contents

console.log(alias())

export {}
