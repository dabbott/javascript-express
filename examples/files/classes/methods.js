class Cat {
  children = []

  constructor(name) {
    this.name = name
  }

  addChild(child) {
    this.children.push(child)
  }

  static familyNames(cat) {
    return [cat.name, ...cat.children.map(child => child.name)]
  }
}

const myCat = new Cat('nyan')

myCat.addChild(new Cat('whiskers'))
myCat.addChild(new Cat('meowth'))

console.log(Cat.familyNames(myCat))

export {}
