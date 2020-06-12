function myTupleFunction(name: string, count: number): [string, number] {
  return [name, count]
}

console.log(myTupleFunction('Devin', 29))

function myObjectFunction(
  name: string,
  count: number
): { name: string; count: number } {
  return { name, count }
}

console.log(myObjectFunction('Devin', 29))

export {}
