class Animal {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    console.log(`I'm ${this.name}, an animal`)
  }
}

class Cat extends Animal {
  constructor(name, whiskers) {
    super(name)

    this.whiskers = whiskers
  }

  sayHello() {
    super.sayHello()

    console.log(`I'm also a cat`)
  }
}

const myCat = new Cat('nyan', 8)

myCat.sayHello()

export {}
