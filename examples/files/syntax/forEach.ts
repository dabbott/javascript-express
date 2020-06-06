const fruit = ['apples', 'oranges', 'peaches', 'pears', 'cherries']

const upperCased: string[] = []

fruit.forEach((value, index) => {
  upperCased.push(index + ' ' + value.toUpperCase())
})

console.log(upperCased)

export {}
