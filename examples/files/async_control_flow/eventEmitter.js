class EventEmitter {
  listeners = {}

  addListener(eventName, listener) {
    const listeners = this.listeners[eventName] || []
    listeners.push(listener)
    this.listeners[eventName] = listeners
  }

  removeListener(eventName, listener) {
    const listeners = this.listeners[eventName] || []
    listeners.filter(element => element === listener)
    this.listeners[eventName] = listeners
  }

  emit(eventName, ...args) {
    const listeners = this.listeners[eventName] || []
    listeners.forEach(f => f(...args))
  }
}

const emitter = new EventEmitter()

emitter.addListener('pizza', kind => {
  console.log(kind)
})

setTimeout(() => {
  emitter.emit('pizza', 'pepperoni')
}, 1000)

export {}
