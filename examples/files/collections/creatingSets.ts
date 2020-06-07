const mySet: Set<string> = new Set(['a', 'b'])

console.log(mySet.has('a'), mySet.has('b'), mySet.has('c'))

mySet.add('c')

console.log(mySet.has('c'))

mySet.delete('c')

console.log(mySet.has('c'))

export {}
