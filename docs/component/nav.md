# 导航菜单

## 使用方法

使用 type 属性来设置 不同类型
<br>

<div>
    <dtsznav1></dtsznav1>
</div>

::: details 显示代码

```vue
<template>
    <div>
        <dtsz-nav type="blackColor"></dtsz-nav>
    </div>
</template>

<script lang="ts" setup>
import { DtszNav } from 'dtsz-ui'
</script>
```

:::

### 默认属性修改示例
以下代码修改了样式为white白色风格的样式

<div>
    <dtsznav2></dtsznav2>
</div>

::: details 显示代码

```vue
<template>
    <div>
        <dtsz-nav type="whiteColor"></dtsz-nav>
    </div>
</template>
```

:::

<script setup lang="ts">
import dtsznav1 from './demo/navdemo1.vue'
import dtsznav2 from './demo/navdemo2.vue'
</script>

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| type         | 组件的风格        | string  | 'blackColor', 'whiteColor'                |  blackColor   | —     |
