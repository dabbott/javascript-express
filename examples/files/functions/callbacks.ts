function doSomething(callback: (value: number) => void) {
  // ...

  callback(42)
}

doSomething((value: number) => {
  console.log('Done', value)
})
