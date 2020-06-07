const fruit = ['apples', 'oranges', 'apples', 'oranges', 'oranges']

// Convert array to set
const fruitSet = new Set(fruit)

// Convert back to array, without duplicates
const fruitArray = [...fruitSet]

console.log(fruitArray)

export {}
