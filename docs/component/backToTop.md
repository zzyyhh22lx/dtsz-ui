# 回到顶部

## 使用方法

在滚动页面时，当滚动一定距离的时候会出现回到顶部按钮
使用 rightLen 属性来设置 距离右侧的距离,bottomLen 属性设置距离底部的距离。
<br>

<div>
    <backtotopdemo1 rightLen="50px" bottomLen="50px"></backtotopdemo1>
</div>

::: details 显示代码

```vue
<template>
    <div>
        <dtsz-backToTop rightLen="50px" bottomLen="50px"></dtsz-backToTop>
    </div>
</template>

<script lang="ts" setup>
import { DtszBackToTop } from 'dtsz-ui'
</script>

<style>
body{
    height: 200px;
}
</style>
```

:::

<script setup lang="ts">
  import backtotopdemo1 from './demo/backtotopdemo.vue'
</script>

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| rightLen         | 距离页面右侧的距离        | string  | 0-页面的宽度                |  40px   | —     |
| bottomLen       | 距离页面底部的距离         | string  | 0-页面的高度  | 40px   |
