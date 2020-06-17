function myTimeout(immediate: boolean, callback: () => void) {
  if (immediate) {
    callback()
  } else {
    setTimeout(callback, 0)
  }
}

let string = ''

try {
  myTimeout(true, () => {
    string += 'a'
  })
} catch (error) {
  // Errors thrown in callback caught here
  console.log(error)
}

console.log(string)

try {
  myTimeout(false, () => {
    string += 'b'
  })
} catch (error) {
  // Errors NOT caught here
  console.log(error)
}

console.log(string)
