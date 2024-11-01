
class PubSub {
  constructor() {
    this.subscribes = {};
  }

  subscribes(event, callback) {
    if (!this.subscribes[event]) {
      this.subscribes[event] = [];
    }
    this.subscribes[event].push(callback);
    return () => this.unsubscribe(event, callback);
  }

  publish(event, data) {
    if (!this.subscribes[event])
      return; // 没有订阅者
    this.subscribes[event].forEach(callback => callback(data));
  }

  unsubscribe(event, callback) {
    if (!this.subscribes[event]) return;
    this.subscribes[event] = this.subscribes[event].filter(
      sub => sub !== callback
    );
  }
}
