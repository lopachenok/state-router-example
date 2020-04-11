export class DataProvider {
  static _instance = new DataProvider();
  listeners = [];

  constructor() {
    setInterval(() => {
      const data = Math.round(Math.random() * 100);

      this.listeners.forEach(fn => fn(data));
    }, 2000)

  }

  subscribe = (callback) => {
    this.listeners.push(callback);
  };

  unsubscribe = (callback) => {
    this.listeners = this.listeners.filter(fn => fn !== callback);
  };

  static getInstance() {
    return DataProvider._instance;
  }
}
