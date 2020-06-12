function myFunction(arg1: string, ...rest: string[]) {
  console.log(arg1, rest)

  console.log(arguments)

  console.log(rest instanceof Array, arguments instanceof Array)
}

myFunction('hello', 'a', 'b', 'c')

export {}
