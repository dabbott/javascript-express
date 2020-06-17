const resolvedPromise = Promise.resolve(42)

resolvedPromise.then(value => {
  console.log(value)
})

const rejectedPromise = Promise.reject('Some problem')

rejectedPromise.catch(value => {
  console.log(value)
})

const functionPromise = new Promise((resolve, reject) => {
  resolve('Hello')
})

functionPromise
  .then(value => {
    console.log('Resolved', value)
  })
  .catch(value => {
    console.log('Rejected', value)
  })
