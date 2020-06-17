type EventHandler = (...args: any[]) => void

class EventEmitter {
  listeners: { [key: string]: EventHandler[] } = {}

  addListener(eventName: string, listener: EventHandler) {
    const listeners = this.listeners[eventName] || []
    listeners.push(listener)
    this.listeners[eventName] = listeners
  }

  removeListener(eventName, listener: EventHandler) {
    const listeners = this.listeners[eventName] || []
    listeners.filter(element => element === listener)
    this.listeners[eventName] = listeners
  }

  emit(eventName: string, ...args: any[]) {
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
