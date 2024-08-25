export type Key = string;

type Fn = (...args: any[]) => any;

export type EventData = {
  callback: Fn;

  time: number;
};

type EventDataList = EventData[];
export interface EventCenterType {
  on(eventName: Key, callback: Fn, time?: number): void;
  once(eventName: Key, callback: Fn): void;
  off(eventName: Key, callback: Fn): void;
  emit(eventName: Key, ...args: any[]): void;
  remove(eventName: Key, callback: Fn): void;
  clear(): void;
}
export default class EventCenter implements EventCenterType {
  protected _events: Map<Key, EventDataList> = new Map<Key, EventDataList>();
  constructor() {}
  on(key: Key, callback: Fn, time = Infinity) {
    const queue = this._events.get(key) || [];

    queue.push({ callback, time });

    this._events.set(key, queue);
  }
  once(key: Key, callback: Fn) {
    this.on(key, callback, 1);
  }
  emit(key: Key, ...arg: any[]) {
    if (!this._events.has(key)) return;

    const queue = this._events.get(key) || [];

    const newCb = queue.filter((item) => {
      const { callback, time } = item;

      if (typeof callback === "function") {
        callback(...arg);

        item.time--;
      }
      return time > 0;
    });

    this._events.set(key, newCb);
  }
  off(key: Key) {
    this._events.delete(key);
  }
  remove(key: Key, callback: Fn) {
    const arr = this._events.get(key) || [];

    const newCb = arr.filter((i) => i.callback !== callback);

    this._events.set(key, newCb);

    if (!newCb.length) {
      this.off(key);
    }
  }
  clear() {
    this._events.clear();
  }
}
