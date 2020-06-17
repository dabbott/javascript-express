const button = document.createElement('button')

button.textContent = 'Click me!'

button.addEventListener('click', () => {
  console.log('Clicked!')
})

console.log(button)

export {}
