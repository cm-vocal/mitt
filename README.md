# mitt

`mitt` is a lightweight event handling system designed to manage events and callbacks. It provides a set of concise APIs for registering event listeners, triggering events, removing listeners, and clearing all events.

## Features

- **Registering Listeners**: Register multiple triggers or single triggers for specific events.
- **Triggering Events**: Trigger registered events and pass parameters to listeners.
- **Removing Listeners**: Remove specific event listeners as needed.
- **Clearing All Events**: Remove all registered events and their listeners.

## Installation

No separate installation is required. Simply import it directly into your project.

## Usage Guide

### Importing the Module

```javascript
import mitt from '@vecal/mitt';
```

### Interface Definition

#### `on(eventName: Key, callback: Fn, time?: number): void`

Registers an event listener, specifying the number of times it can trigger.

**Parameters**

- `eventName` (`Key`): The event name.
- `callback` (`Fn`): The callback function to register.
- `time` (`number`): Optional parameter, specifies the maximum number of times the callback function can trigger. Default is infinite.

#### `once(eventName: Key, callback: Fn): void`

Registers a listener that triggers only once.

**Parameters**

- `eventName` (`Key`): The event name.
- `callback` (`Fn`): The callback function to register.

#### `emit(eventName: Key, ...args: any[]): void`

Triggers an event and passes parameters to the listeners.

**Parameters**

- `eventName` (`Key`): The event name.
- `...args` (`any[]`): Additional arguments passed to the callback functions.

#### `off(eventName: Key): void`

Removes all listeners for a specific event.

**Parameters**

- `eventName` (`Key`): The event name.

#### `remove(eventName: Key, callback: Fn): void`

Removes a specific listener for a specific event.

**Parameters**

- `eventName` (`Key`): The event name.
- `callback` (`Fn`): The callback function to remove.

#### `clear(): void`

Removes all registered events and their listeners.

### Example

```javascript
const mitt = new Mitt();

const callback = (data) => {
  console.log('Received update:', data);
};
// Register a listener
mitt.on('update', callback, 2); // Triggers only twice

// Register a one-time listener
mitt.once('finish', () => {
  console.log('Task finished');
});

// Trigger the event
mitt.emit('update', { message: 'New data available' });

// Remove the listener
mitt.remove('update', callback);

// This will not remove the one-time listener
mitt.remove('finish', () => {
  console.log('Task finished');
});

// Clear all events
mitt.clear();
```

## API Documentation

### Class: `Mitt`

#### Constructor

```javascript
new Mitt();
```

#### Methods

##### `on(eventName: Key, callback: Fn, time = Infinity): void`

Registers an event listener, specifying the number of times it can trigger.

**Parameters**

- `eventName` (`Key`): The event name.
- `callback` (`Fn`): The callback function to register.
- `time` (`number`): Optional parameter, specifies the maximum number of times the callback function can trigger. Default is infinite.

##### `once(eventName: Key, callback: Fn): void`

Registers a listener that triggers only once.

**Parameters**

- `eventName` (`Key`): The event name.
- `callback` (`Fn`): The callback function to register.

##### `emit(eventName: Key, ...args: any[]): void`

Triggers an event and passes parameters to the listeners.

**Parameters**

- `eventName` (`Key`): The event name.
- `...args` (`any[]`): Additional arguments passed to the callback functions.

##### `off(eventName: Key): void`

Removes all listeners for a specific event.

**Parameters**

- `eventName` (`Key`): The event name.

##### `remove(eventName: Key, callback: Fn): void`

Removes a specific listener for a specific event.

**Parameters**

- `eventName` (`Key`): The event name.
- `callback` (`Fn`): The callback function to remove.

##### `clear(): void`

Removes all registered events and their listeners.

## License

This project is licensed under the MIT License. For details, please refer to the [LICENSE](./LICENSE) file.