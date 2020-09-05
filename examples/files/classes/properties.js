class Cat {
  children = []

  constructor(name) {
    this.name = name
  }

  get collarTag() {
    return `Hi! I'm ${this.name}`
  }

  static species = 'Felis catus'
}

const myCat = new Cat('nyan')

console.log(myCat.collarTag)

console.log(myCat.children)

console.log(Cat.species)

export {}
