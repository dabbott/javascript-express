// One-time event
setTimeout(() => {
  console.log('Done!')
}, 5000)

let count = 0

// Repeating event
setInterval(() => {
  console.log(count++)
}, 1000)

export {}
