const myObject = {
  fruit: ['apples', 'oranges'],
  vegetables: undefined,
}

const myJsonString = JSON.stringify(myObject)

console.log(myJsonString)

const myJsonObject = JSON.parse(myJsonString)

console.log(myJsonObject)

export {}
