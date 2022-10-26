# Vue 相关知识点

知识点整理，之后会根据源码进行详细学习和记录。

## Vue2 API

### DOM 相关 API

- el
  - vue 挂载的 DOM 元素
- template
  - 模板字符串，替换挂在元素
- render
  - (createElement: () => VNode) => VNode
  - 接收一个 createElment 函数，创建 VNode
  - 函数组件（函数，返回一个模板）
  - 类组件（通过继承）
    - 单文件组件
- renderError

### 资源 相关 API: directive, filter, computed

- directive 指令
  - v-bind 绑定数据, 语法糖 `:`
    - v-model 等同于 v-bind:value
  - v-on 绑定事件, 语法糖 `@`
  - 修饰符，以此执行
  - v-if 和 v-show
    - v-if：根据值来渲染/删除 dom
      - render 时根据 v-if 值判断是否渲染
      - v-if 值改变，双向绑定原理
        - 调用 update
        - 调用 patch --> creatEle
          - 使用原生 DOM API，渲染真实 DOM
    - v-show：会渲染 dom，根据值改变 display 切换显示隐藏
  - v-for
    - v-for 比 v-if 优先级高
  - v-key 管理可复用元素
    - 有 key，重新渲染，
    - 无 key，不重新渲染（如，input 不会替换，保存上次输入的内容）
  - 自定义指令
    - 钩子函数/生命周期
      - bind
      - inserted：被绑定元素插入父节点时调用
      - update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
      - componentUpdate：指令所在组件的 VNode 及其子 VNode 全部更新后调用
      - unbind
    - 钩子函数参数
      - 固定参数
      - 动态指令参数
    - 函数简写，bind 和 update
    - 对象字面量：指令需要多个参数，对象

### 数据 相关 API

- data：Vue 实例的数据对象
  - 对应 template 的 Mustache 文本插值，指令等
- methods
  - 事件处理器
- computed
  - 计算属性，派生数据
    - 对 data 中的值的运算和逻辑处理，解耦
  - 也是数据对象，所以不能和 data 声明同一个值
  - 计算数据，会被缓存，除非触发双向绑定
  - 对比
    - method
      - 每次事件触发都必须执行，所以不是响应式的
      - computed 的响应式可以避免无谓的渲染
    - watch
      - computed，支持缓存，不可以执行异步操作
        - 以为 computed 最后执行 return
        - 异步操作的结果可能在 return 之后执行完成
      - watch，可以执行异步操作，不支持缓存
        - 数据变化则触发 watch，可通过
- watch
  - 数据监听
  - 当需要在数据变化时，执行异步或开销较大的操作时
- props
  - 父组件向子组件传递的参数，单向
    - 反向：定义另一个变量，传递给父组件，父组件赋值

### 组合 相关 API

- parent
- mixin，混入对象，选项合并
  - 自定义选项合并 `Vue.config.optionMergeStrategies`
- extends
- provide/inject

### 组件

- 单文件组件
  - 通过 webpack 的 vue-loader 解析
  - 文件结构
    - html/template
    - CSS/style
      - style scoped
        - 为当前组件的所有 DOM 元素定义一个自定义属性，data-v-
        - 通过属性选择器，作用于匹配的 DOM 元素
        - 父组件，深度选择器
          - **>>>** 只适用于 CSS
          - Less/Scss 中使用 /deep/ 和 最新的 ::v-deep
    - JS/JSX

### 生命周期

### 响应式原理

### 插件机制

- 开发
  - 暴露 install 方法 `MyPlugin.install = function (Vue, options)`
- 使用
  - `Vue.use(MyPlugin)` 调用 `MyPlugin.install` 方

## Vue-router

### 路由模式

- hash 模式 `/#/`
  - 这部分 URL 从未被发送到服务器
  - 不利于 SEO
- history 模式
  - 正常路径
  - 需要配置对应的 `.html` 页面，否则会 404

### 路由跳转

- 声明式导航 `<router-link :to="...">` 相当于 `<a href>`
- 编程式导航 `router.push(...)` 方法
  - push（跳转新页面，产生历史记录）
  - replace（替换当前页面，不产生历史记录）
  - go（在根据历史记录跳转）
- 重定向和别名
  - 重定向：访问新的路由地址
  - 别名：访问 alias 路由地址，页面加载 path 映射的组件

### 路由传参

- 路径参数 `{ path: '/users/:id', component: User }`
  - 路径表现 `/users/111` `/users/222`
  - 获取参数， 映射到 `this.$route.params.id`
- 可选参数(查询字符串) `{ path: '/users?id=111', component: User }`
  - 路径表现 `/users?id=111` `/users?id=222`
  - 获取参数， 映射到 `this.$route.query.id`
- 属性参数
  - props

### 动态绑定路由信息

### 路由导航（拦截器）

- 全局级
  - 全局前置守卫 `router.beforeEach((to, from) => { next()})`
    - 每次都按顺序调用，等待异步执行
  - 全局解析守卫 `router.resolveEach((to, from) => { next()})`
  - 全局后置守卫 `router.afterEach((to, from) => { next()})`
- 单个路由
  - `beforeEnter: (to, from) => {})`
- 组件级
  - `beforeRouteEnter: (to, from) => {})`
    - 在渲染该组件的对应路由被验证前调用
  - `beforeRouteUpdate: (to, from) => {})`
    - 在当前路由改变，但是该组件被复用时调用
  - `beforeRouteLeave: (to, from) => {})`
    - 在导航离开渲染该组件的对应路由时调用

### 路由元信息 meta（路由层面的数据存储）

- 配置路由信息
  - 如校验
    - 注册路由 `meta: { requiresAuth: true }`
    - `router.beforeEach` 路由导航守卫，获取 meta，并处理 `if (to.meta.requiresAuth){}`

### 路由过渡动效

- 全局动效
  - `<router-view v-slot="{ Component }"><transition name="fade"><component :is="Component" /></transition></router-view>`
- 单个路由
  - 配置 meta `{ component: PanelLeft, meta: { transition: 'slide-left' }}`

### 路由懒加载

- 异步路由
- 动态加载路由 `import('./views/UserDetails')`
  - 不要动态加载异步路由，异步路由本身就是动态导入的

## Vuex

- Store
  - modules，将 store 分割成模块
    - state
    - getter
      - 类似于 computed 属性
      - state 的派生状态，state 的中间处理
    - mutation
      - 更新 state 的途径，必须是同步方法
    - action
      - 提交的是 mutation，而不是直接变更状态
      - 可以包含任意异步操作
- Flux 架构
