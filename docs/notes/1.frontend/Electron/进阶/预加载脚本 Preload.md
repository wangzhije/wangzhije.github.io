---
title: 预加载脚本 Preload
createTime: 2025/08/25 19:08:50
permalink: /frontend/electron/efc47min/
---
## 介绍
Preload 脚本

+ 是执行于渲染进程中的代码
+ 优先于网页内容加载
+ 能访问 NodeAPI
+ 与浏览器共享同一个渲染进程的全局 window 对象

## 使用
入口文件

```javascript
const { BrowserWindow } = require('electron')
// ...
const win = new BrowserWindow({
  webPreferences: {
    preload: 'path/to/preload.js'
  }
})
// ...
```

预加载文件，通过 contextBridge 

```javascript
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
  desktop: true
})
```

## 安全
不建议直接使用 `ipcRenderer.send(channel,...args)`API，不安全的

```javascript
// ❌ 错误使用
contextBridge.exposeInMainWorld('myAPI', {
  send: ipcRenderer.send
})
```

建议使用 `ipcRenderer.invoke(channel,...args)` API

```javascript
// ✅ 正确使用
contextBridge.exposeInMainWorld('myAPI', {
  loadPreferences: () => ipcRenderer.invoke('load-prefs')
})
```

## 与TypeScript一起使用
> 确保在您编写渲染进程的脚本时， TypeScript 编译器将会知晓electronAPI合适地在您的全局window对象中
>

<font style="color:rgb(28, 30, 33);">类型声明文件</font>

```typescript
export interface IElectronAPI {
  loadPreferences: () => Promise<void>,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
```

```typescript
window.electronAPI.loadPreferences()
```

