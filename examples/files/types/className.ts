function className(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1)
}

console.log(className(true))

console.log(className(42))

console.log(className([]))

console.log(className({}))

console.log(className(/abc/))

export {}
