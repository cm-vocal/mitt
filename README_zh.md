# mitt

`mitt` 是一个轻量级的事件处理系统，用于管理事件和回调。它提供了一组简洁的API来注册事件监听器、触发事件、移除监听器以及清理所有事件。

## 特性

- **注册监听器**：为特定事件注册多次触发或仅触发一次的回调函数。
- **触发事件**：触发注册的事件，并向监听器传递参数。
- **移除监听器**：根据需要移除特定事件的监听器。
- **清理所有事件**：移除所有已注册的事件及其监听器。

## 安装

无需安装，直接在您的项目中导入即可使用。

## 使用指南

### 导入模块

```javascript
import mitt from '@vecal/mitt';
```

### 接口定义

#### `on(eventName: Key, callback: Fn, time?: number): void`

注册一个事件监听器，可指定触发次数。

**参数**

- `eventName` (`Key`): 事件名称。
- `callback` (`Fn`): 要注册的回调函数。
- `time` (`number`): 可选参数，指定回调函数最多被触发的次数，默认为无限次。

#### `once(eventName: Key, callback: Fn): void`

注册一个仅触发一次的事件监听器。

**参数**

- `eventName` (`Key`): 事件名称。
- `callback` (`Fn`): 要注册的回调函数。

#### `emit(eventName: Key, ...args: any[]): void`

触发一个事件，并向监听器传递参数。

**参数**

- `eventName` (`Key`): 事件名称。
- `...args` (`any[]`): 附加参数，传递给回调函数。

#### `off(eventName: Key): void`

移除特定事件的所有监听器。

**参数**

- `eventName` (`Key`): 事件名称。

#### `remove(eventName: Key, callback: Fn): void`

移除特定事件的某个监听器。

**参数**

- `eventName` (`Key`): 事件名称。
- `callback` (`Fn`): 要移除的回调函数。

#### `clear(): void`

移除所有已注册的事件及其监听器。

### 示例

```javascript
const mitt = new Mitt();

const callback = (data) => {
  console.log('Received update:', data);
}
// 注册一个监听器
mitt.on('update',callback , 2); // 只触发两次

// 注册一个仅触发一次的监听器
mitt.once('finish', () => {
  console.log('Task finished');
});

// 触发事件
mitt.emit('update', { message: 'New data available' });

// 移除监听器
mitt.remove('update',callback);

// 这将无法移除
mitt.remove('finish', () => {
  console.log('Task finished');
});

// 清除所有事件
mitt.clear();
```

## API 文档

### 类: `mitt`

#### 构造函数

```javascript
new Mitt();
```

#### 方法

##### `on(eventName: Key, callback: Fn, time = Infinity): void`

注册一个事件监听器，可指定触发次数。

**参数**

- `eventName` (`Key`): 事件名称。
- `callback` (`Fn`): 要注册的回调函数。
- `time` (`number`): 可选参数，指定回调函数最多被触发的次数，默认为无限次。

##### `once(eventName: Key, callback: Fn): void`

注册一个仅触发一次的事件监听器。

**参数**

- `eventName` (`Key`): 事件名称。
- `callback` (`Fn`): 要注册的回调函数。

##### `emit(eventName: Key, ...args: any[]): void`

触发一个事件，并向监听器传递参数。

**参数**

- `eventName` (`Key`): 事件名称。
- `...args` (`any[]`): 附加参数，传递给回调函数。

##### `off(eventName: Key): void`

移除特定事件的所有监听器。

**参数**

- `eventName` (`Key`): 事件名称。

##### `remove(eventName: Key, callback: Fn): void`

移除特定事件的某个监听器。

**参数**

- `eventName` (`Key`): 事件名称。
- `callback` (`Fn`): 要移除的回调函数。

##### `clear(): void`

移除所有已注册的事件及其监听器。

## 许可证

本项目遵循 MIT 许可证。详情请参阅[LICENSE](./LICENSE)文件。
