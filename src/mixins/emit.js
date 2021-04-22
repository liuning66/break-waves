/**
 * EventBus
 *
 * @autor ln
 * @date 2021/4/21
 */

export class EventBus {
  callbackMap = new Map();

  $on(eventName, callback) {
    const callbacks = this.callbackMap.get(eventName) || [];
    callbacks.push(callback);
    this.callbackMap.set(eventName, callbacks);
  }

  $emit(eventName, param) {
    if (this.callbackMap.has(eventName)) {
      this.callbackMap.get(eventName).forEach(cb => cb(param));
    }
  }

  $off(eventName, callback) {
    if (!eventName) {
      this.callbackMap.clear();
    }
    if (this.callbackMap.has(eventName)) {
      const callbacks = this.callbackMap.get(eventName);
      const index = callbacks.indexOf(callback);
      callbacks.splice(index, 1);
      this.callbackMap.set(eventName, callbacks);
    }
  }

}
