try {
  throw new Error('my error')
} catch (error) {
  console.log(error, error.message)
}

try {
  JSON.parse('not json')
} catch (error) {
  console.log(error, error.message)
}
