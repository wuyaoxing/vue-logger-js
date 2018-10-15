# vue-logger-js
统一日志输出，并提供日志输出回调函数，可使用sentry等捕获错误。

## Installation
```
npm install vue-logger-js --save
#or
yarn add vue-logger-js
```

## Usage
```js
import Vue from 'vue'
import VueLoggerjs from './plugin/vue-logger-js'

Vue.use(VueLoggerjs, {
  customLevels: ['report'],
  reportLevels: ['error'],
  printCallback: (level, args) => {
    // 此处可用于对`error`类日志收集
    console.log('printCallback:', level, ...args)
  }
})

// xxx.vue
this.$logger.warn('This is warn tip.')
```
tip：`console`方法可通过`this.$logger`访问。

## Options
|Option|Type|Default|Info|
|:---|:---|:---|:---|
|customLevels|`array`|`null`|自定义 `levels`|
|reportLevels|`array`|`['error']`|执行 `printCallback` 的日志类型|
|printCallback|`function`|`null`|日志打印回调|
|disable|`boolean`|`null`|是否有输出|
