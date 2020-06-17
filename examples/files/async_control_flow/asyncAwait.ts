function sleep<T>(delay: number, value: T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), delay)
  })
}

async function run(): Promise<string> {
  const value = await sleep(2000, 'hello')

  console.log(value)

  return value
}

run()
  .then(value => {
    console.log(value)
  })
  .catch(error => {
    console.log(error)
  })
