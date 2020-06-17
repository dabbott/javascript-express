Promise.resolve(42)
  .then(value => value * 2)
  .then(value => Promise.resolve(value + 1000))
  .then(value => {
    console.log(value)
  })

Promise.resolve(42)
  .then(value => value * 2)
  .then(value => Promise.reject(value))
  .then(value => Promise.resolve(value + 1000))
  .catch(value => {
    console.log('Caught!', value)
    return value
  })
  .then(value => value * 2)
  .then(value => {
    console.log('OK', value)
  })
