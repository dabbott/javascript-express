const fruit1 = ['apples', 'oranges', 'peaches']
const fruit2 = ['apples', 'cherries', 'pears']

// Convert arrays to set
const fruitSet = new Set([...fruit1, ...fruit2])

// Convert back to array, without duplicates
const fruitArray = Array.from(fruitSet)

console.log(fruitArray)
