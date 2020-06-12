function map<A, B>(array: Array<A>, callback: (A) => B): Array<B> {
  const result = []

  for (let value of array) {
    result.push(callback(value))
  }

  return result
}

console.log(map([1, 2, 3], value => value * 100))
