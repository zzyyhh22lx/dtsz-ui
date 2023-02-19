# dtsz-button 进度条

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
        size="normal"
      ></DProgressbar>
      <DProgressbar
        :angle="angle"
        size="large"
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

<script setup lang="ts">
  import ProgressDemo from './demo/progressdemo1.vue'
</script>
