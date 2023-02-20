# 按钮

## 基础用法

### 基础

<br>

<div class="example">
    <div>
        <DtsButton></DtsButton>
        <DtszButton type="success">success</DtszButton>
        <DtszButton type="primary">primary</DtszButton>
        <DtszButton type="info">info</DtszButton>
        <DtszButton type="danger">danger</DtszButton>
        <DtszButton type="warning">warning</DtszButton>
    </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dtsz-button></dtsz-button>
    <dtsz-button type="success">success</dtsz-button>
    <dtsz-button type="primary">primary</dtsz-button>
    <dtsz-button type="info">info</dtsz-button>
    <dtsz-button type="danger">danger</dtsz-button>
    <dtsz-button type="warning">warning</dtsz-button>
  </div>
</template>
<script lang="ts" setup>
import { DtszButton } from 'dtsz-ui'
</script>
```

:::

### 圆角和禁止选中

<br>
<div class="expamle">
  <dtsz-button type="danger" round disabled></dtsz-button>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dtsz-button type="danger" round disabled></dtsz-button>
  </div>
</template>
<script lang="ts" setup>
import { DtszButton } from 'dtsz-ui'
</script>
```

:::

### 不同大小

<br>
<dtsz-button size="mini"></dtsz-button>

::: details 显示代码

```vue
<template>
  <div>
    <dtsz-button size="mini"></dtsz-button>
  </div>
</template>
<script lang="ts" setup>
import { DtszButton } from 'dtsz-ui'
</script>
```

:::

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| size          | 尺寸         | string  | large / middle /small / mini                 |  middle   | —     |
| type          | 类型         | string  | primary / success / warning / danger / info  | ------    |
| round         | 是否圆角按钮 | boolean | —                                                  | false |
| disabled      | 是否禁用     | boolean | —                                                  | false |
