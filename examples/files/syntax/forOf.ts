const fruit = ['apples', 'oranges', 'peaches', 'pears', 'cherries']

const upperCased: string[] = []

for (let value of fruit) {
  upperCased.push(value.toUpperCase())
}

console.log(upperCased)

export {}
