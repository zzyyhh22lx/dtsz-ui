# 环形进度条

## 基础用法

<br/>
<ClientOnly>
    <div class="example">
        <ProgressDemo />
    </div>
</ClientOnly>

::: details 显示代码

```vue
<template>
  <div>
    <div style="display:flex">
      <DProgressbar
        :angle="angle"
      ></DProgressbar>
    </div>
    调配角度：
    <input
      v-model.number="angle"
      label="调配角度"
      type="range"
      name="设置圆角"
      min="0"
      max="360"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const angle = ref(0)
</script>
```

:::

## 样式修改

<br/>
<ClientOnly>
    <div class="example">
        <ProgressDemo2 />
    </div>
</ClientOnly>

::: details 显示代码

```vue
<template>
  <div>
    <div style="display:flex">
      <DProgressbar
        :angle="angle"
        size="large"
        inset_bgc="black"
        outset_bgc="red"
      >
      DTSZ
      </DProgressbar>
    </div>
    <br>
    调配角度：
    <input
      v-model.number="angle"
      label="调配角度"
      type="range"
      name="设置圆角"
      min="0"
      max="360"
    />
    <br>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
const angle = ref(0)
</script>
```

:::
<script setup lang="ts">
  import ProgressDemo from './demo/progressdemo1.vue'
  import ProgressDemo2 from './demo/progressdemo2.vue'
</script>

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| angle         | 进度条的进度        | number  | [0, 360]                |  0   | —     |
| inset_bgc          | 内圆颜色         | string  | 表颜色的字符串  | #ADCC97    |
| outset_bgc        | 外圈颜色 | string |表颜色的字符串                        | #C1A4C2 |
| size     | 大小    | string | nomal/large                        | nomal |

## 插槽

| 插槽名         | 说明         |  默认值  |
|-------------- | -----------  | --------- |
|default       |自定义内容  | angle%
