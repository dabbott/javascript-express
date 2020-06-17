function sleep<T>(delay: number, value: T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), delay)
  })
}

const promiseA = sleep(3000, 'a')
const promiseB = sleep(1000, 'b')
const promiseC = sleep(2000, 'c')

Promise.all([promiseA, promiseB, promiseC]).then(values => {
  console.log(values)
})

Promise.race([promiseA, promiseB, promiseC]).then(value => {
  console.log(value)
})

export {}
