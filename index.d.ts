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
  off(eventName: Key, callback?: Fn): void;
  emit(eventName: Key, ...args: any[]): void;
  remove(eventName: Key, callback: Fn): void;
  clear(): void;
}

export default class EventCenter implements EventCenterType {
  protected _events: Map<Key, EventDataList>;
  constructor();
  on(key: Key, callback: Fn, time?: number): void;
  once(key: Key, callback: Fn): void;
  emit(key: Key, ...arg: any[]): void;
  off(key: Key, callback?: Fn): void;
  remove(key: Key, callback: Fn): void;
  clear(): void;
}