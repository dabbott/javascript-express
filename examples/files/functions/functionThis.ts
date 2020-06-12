function myFunction1() {
  return this
}

console.log(myFunction1())

console.log(myFunction1.call(42))

console.log(myFunction1.call({ name: 'Devin' }))

const myFunction2 = () => {
  return this
}

console.log(myFunction2.call(42))
