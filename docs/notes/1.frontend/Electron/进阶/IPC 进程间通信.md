---
title: IPC 进程间通信
createTime: 2025/08/25 19:09:27
permalink: /frontend/electron/hffnwjj0/
---

## 渲染进程 —〉主进程（单向）

> 从 Web 内容调用主进程 API

### 主进程

```javascript
app.whenReady().then(() => {
  // 主进程 监听
  ipcMain.on("set-title", handleSetTitle);
  createWindow();
});
```

### 预加载脚本

```javascript
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // 预加载 注册
  setTitle: (title) => ipcRenderer.send("set-title", title),
});
```

### 渲染进程

```javascript
// 渲染进程 调用
window.electronAPI.setTitle(title);
```

## 渲染进城 —〉主进程（双向）

> 从渲染器进程代码调用主进程模块并等待返回结果

### 主进程

```javascript
async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({});
  if (!canceled) {
    return filePaths[0];
  }
}
app.whenReady().then(() => {
  // 主进程 监听
  ipcMain.handle("dialog:openFile", handleFileOpen);
  createWindow();
});
```

### 预加载脚本

```javascript
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // 预加载 注册
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
});
```

### 渲染进程

```javascript
// 渲染进程 调用
btn.addEventListener("click", async () => {
  const filePath = await window.electronAPI.openFile();
  filePathElement.innerText = filePath;
});
```

## 主进程 —〉渲染进程

> <font style="color:rgb(28, 30, 33);">使用 </font>`<font style="color:rgb(28, 30, 33);">webContents.send</font>`<font style="color:rgb(28, 30, 33);"> API 将 IPC 消息从主进程发送到目标渲染器</font>

### <font style="color:rgb(28, 30, 33);">主进程</font>

```javascript
function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const menu = Menu.buildFromTemplate([
    {
      label: app.name,
      submenu: [
        {
          click: () => mainWindow.webContents.send("update-counter", 1),
          label: "Increment",
        },
        {
          click: () => mainWindow.webContents.send("update-counter", -1),
          label: "Decrement",
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);

  mainWindow.loadFile("index.html");
}
```

### <font style="color:rgb(28, 30, 33);">预加载脚本</font>

```javascript
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  onUpdateCounter: (callback) =>
    ipcRenderer.on("update-counter", (_event, value) => callback(value)),
});
```

### <font style="color:rgb(28, 30, 33);">渲染进程</font>

```javascript
// 渲染进程 调用
window.electronAPI.onUpdateCounter((value) => {
  const oldValue = Number(counter.innerText);
  const newValue = oldValue + value;
  counter.innerText = newValue.toString();
});
```

## 渲染进程 —〉渲染进程

没有直接方法

- 将主进程作为渲染器之间的消息代理。 这需要将消息从一个渲染器发送到主进程，然后主进程将消息转发到另一个渲染器。
- 使用 MessagePort 消息端口，这将允许在初始设置后渲染器之间直接进行通信。

主进程

```javascript
// 在主进程中，我们接收端口对象。
ipcMain.on("port", (event) => {
  // 当我们在主进程中接收到 MessagePort 对象, 它就成为了
  // MessagePortMain.
  const port = event.ports[0];

  // MessagePortMain 使用了 Node.js 风格的事件 API
  // 而不是web 风格的事件 API. 因此使用 .on('message', ...) 而不是 .onmessage = ...
  port.on("message", (event) => {
    // 收到的数据是： { answer: 42 }
    const data = event.data;
  });

  // MessagePortMain 阻塞消息直到 .start() 方法被调用
  port.start();
});
```

渲染进程

```javascript
// 消息端口是成对创建的。 连接的一对消息端口
// 被称为通道。
const channel = new MessageChannel();

// port1 和 port2 之间唯一的不同是你如何使用它们。 消息
// 发送到port1 将被port2 接收，反之亦然。
const port1 = channel.port1;
const port2 = channel.port2;

// 允许在另一端还没有注册监听器的情况下就通过通道向其发送消息
// 消息将排队等待，直到一个监听器注册为止。
port2.postMessage({ answer: 42 });

// 这次我们通过 ipc 向主进程发送 port1 对象。 类似的，
// 我们也可以发送 MessagePorts 到其他 frames, 或发送到 Web Workers, 等.
ipcRenderer.postMessage("port", null, [port1]);
```
