const myObject = {
  name: 'Devin',
  age: 29,
  contents: function contents() {
    return this
  },
}

console.log(myObject.contents())

export {}
