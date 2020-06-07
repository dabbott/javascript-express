const mySet: Set<string> = new Set()

console.log(mySet.has('hello'))

mySet.add('hello')

console.log(mySet.has('hello'))

mySet.delete('hello')

console.log(mySet.has('hello'))

export {}
