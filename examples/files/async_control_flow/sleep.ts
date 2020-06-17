function sleep<T>(delay: number, value: T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), delay)
  })
}

sleep(3000, 'Devin').then(value => {
  console.log(`Hello ${value}`)
})

export {}
