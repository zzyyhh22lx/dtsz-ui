# Loading 加载

## 使用方法

### 区域加载

<div class="example" style='position:relative'>
  <div v-loading='true' dtsz-loading-text="Loading...">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis saepe, exercitationem illo at ea consectetur nam dolorum consequuntur totam, nobis consequatur et voluptate enim vel fugit aspernatur reiciendis asperiores!
    </p>
  </div>
</div>

<script setup lang="ts">
  import { ref, onMounted } from "vue";
  
  const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;

  onMounted(() => {
    setTimeout(() => {
      loading1.value = false;
    }, 3000);
  })
</script>

::: details 显示代码

```vue
<template>
  <div v-loading="true" dtsz-loading-text="Loading...">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
      veritatis saepe, exercitationem illo at ea consectetur nam dolorum
      consequuntur totam, nobis consequatur et voluptate enim vel fugit
      aspernatur reiciendis asperiores!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const loading = ref<boolean>(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>
```

:::

### 自定义加载中组件内容

<div class="example" style='position:relative'>
  <div
    v-loading="loading1"
    dtsz-loading-text="Loading..."
    :dtsz-loading-spinner="svg"
    dtsz-loading-svg-view-box="-10, -10, 50, 50"
    dtsz-loading-background="rgba(122, 122, 122, 0.8)">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis saepe, exercitationem illo at ea consectetur nam dolorum consequuntur totam, nobis consequatur et voluptate enim vel fugit aspernatur reiciendis asperiores!
    </p>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div
    v-loading="loading1"
    dtsz-loading-text="Loading..."
    :dtsz-loading-spinner="svg"
    dtsz-loading-svg-view-box="-10, -10, 50, 50"
    dtsz-loading-background="rgba(122, 122, 122, 0.8)"
  >
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
      veritatis saepe, exercitationem illo at ea consectetur nam dolorum
      consequuntur totam, nobis consequatur et voluptate enim vel fugit
      aspernatur reiciendis asperiores!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const loading = ref<boolean>(true);
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;
</script>
```

:::

### 让加载组件铺满整个屏幕

::: details 显示代码

```vue
<template>
  <div v-loading.fullscreen.lock="loading"</div>
</template>
```

:::

## 配置

| 名称       | 说明                                 | 类型    |
| ---------- | ------------------------------------ | ------- |
| fullscreen | 加载数据时是否显示全屏动画，为修饰符 | boolean |
| lock       | 锁定屏幕的滚动，为修饰符             | boolean |

## 指令

| 名称                    | 说明                         | 类型    |
| ----------------------- | ---------------------------- | ------- |
| v-loading               | 是否显示加载动画             | boolean |
| dtsz-loading-text       | 显示在加载图标下方的加载文案 | string  |
| dtsz-loading-spinner    | 自定义加载图标               | string  |
| dtsz-loading-background | 背景遮罩的颜色               | string  |
