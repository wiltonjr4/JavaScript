export default class Category {
  constructor() {
    this.category = [];
    this._subscribers = [];
  }

  subscribe(func) {
    this._subscribers.push(func);
  }

  unsubscribe(func) {
    this._subscribers = this._subscribers.filter((f) => f !== func);
  }

  notify() {
    this._subscribers.forEach((func) => {
      func(this.category);
    });
  }

  addCategory(newCategory) {
    this.category.push(newCategory);
    this.notify();
  }
}
