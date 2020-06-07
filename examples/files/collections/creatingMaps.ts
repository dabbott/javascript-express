const myMap: Map<string, number> = new Map()

console.log(myMap.has('hello'), myMap.get('hello'))

myMap.set('hello', 42)

console.log(myMap.has('hello'), myMap.get('hello'))

myMap.delete('hello')

console.log(myMap.has('hello'), myMap.get('hello'))

export {}
