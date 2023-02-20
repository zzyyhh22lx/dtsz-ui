# 对话框

## 基础用法

### 基础

使用 width 属性来设置 Dialog 的大小,dialog-visible 属性设置显示隐藏。
<br>

<div class="example">
    <div>
        <dialogdemo1></dialogdemo1>
    </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <DtszDialog width="80%" :dialog-visible="visible"> </DtszDialog>
  </div>
</template>
<script lang="ts" setup>
import { DtszDialog } from 'dtsz-ui'
import { ref } from 'vue'
const visible = ref(false)
function openDialog() {
  visible.value = true
}
</script>
```

:::

### 支持使用插槽作为内容

支持使用插槽加入标题和底部。

<br>
<div class="expamle">
<dialogdemo2></dialogdemo2> 
</div>

::: details 显示代码

```vue
<template>
  <div>
    <DtszDialog :dialog-visible="visible">
      <template #title>
        <h3>我是标题</h3>
      </template>
      <template #footer>
        <dtsz-button type="primary" @click="close()">确定</dtsz-button>
        <dtsz-button type="primary" @click="close()">取消</dtsz-button>
      </template>
    </DtszDialog>
  </div>
</template>
<script lang="ts" setup>
import { DtszDialog } from 'dtsz-ui'
const visible = ref(false)
function openDialog() {
  visible.value = true
}
</script>
```

:::

<script setup lang="ts">
  import dialogdemo1 from './demo/dialogdemo1.vue'
  import dialogdemo2 from './demo/dialogdemo2.vue'
</script>

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| width         | 对话框宽度        | string  | [0%, 100%]                |  50%   | —     |
| dialog-visible          | 显示隐藏         | Boolean  |   | false    |


## 插槽

| 插槽名         | 说明         |  默认值  |
|-------------- | -----------  | --------- |
|title       |自定义内容  | Tips
|footer       |自定义内容  | 取消/确认
