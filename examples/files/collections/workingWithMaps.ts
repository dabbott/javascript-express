const fruit: [string, number][] = [['apples', 4], ['oranges', 7]]

// Convert array to map
const fruitMap = new Map(fruit)

console.log(fruitMap.get('apples'))

// Convert back to array
const fruitArray = [...fruitMap]

console.log(fruitArray)

export {}
