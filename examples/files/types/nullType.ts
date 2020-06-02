let myValue: { name: string } | null

const someCondition = false

if (someCondition) {
  myValue = { name: 'Devin' }
} else {
  myValue = null
}

console.log(myValue)

export {}
