# 通知

## 基础用法

### 基础

使用 width 属性来设置 Notify 的大小,notifyVisible 属性设置显示隐藏,成功、错误、警告提示。
<br>

<div class="example">
    <div>
        <notifydemo1></notifydemo1>
    </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
  <dtsz-button type="primary" @click="openNotify()">通知</dtsz-button>
  <DtszNotify
    @NotifyVisibleValue="NotifyVisibleValue"
    :notifyVisible="NotifyVisible"
    width="400px"
    type="warning"
  >
  </DtszNotify>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const NotifyVisible = ref(false)
function openNotify() {
  NotifyVisible.value = true
}
function NotifyVisibleValue(value) {
  NotifyVisible.value = value
}
</script>
```

:::

### 修改通知显示位置

支持使用 position 属性定义通知滑入哪个角。它可以是 top-right, top-left, bottom-right 或 bottom-left.默认为 top-right.

<br>
<div class="expamle">
<notifydemo2></notifydemo2> 
</div>

::: details 显示代码

```vue
<template>
  <dtsz-button type="primary" @click="openNotify()">通知</dtsz-button>
  <DtszNotify
    @NotifyVisibleValue="NotifyVisibleValue"
    :notifyVisible="NotifyVisible"
    position="top-left"
  >
  </DtszNotify>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const NotifyVisible = ref(false)
function openNotify() {
  NotifyVisible.value = true
}
function NotifyVisibleValue(value) {
  NotifyVisible.value = value
}
</script>

<style></style>
```

:::

<script setup lang="ts">
  import notifydemo1 from './demo/notifydemo1.vue'
  import notifydemo2 from './demo/notifydemo2.vue'
</script>

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| width         | 通知框宽度        | string  |                 |  330px   | —     |
| notifyVisible          | 显示隐藏         | Boolean  |   | false    |—     |
| type          | 提示类型         | string  | warning/success/error | success    | —     |
| position          | 修改位置         | string  | top-right/top-left/bottom-right/bottom-left  | top-right    |



