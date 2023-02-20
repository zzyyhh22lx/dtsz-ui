# Loading 加载

## 使用方法

<script setup lang="ts">
  import LoadingDemo1 from './demo/loadingDemo1.vue'
  import LoadingDemo2 from './demo/loadingDemo2.vue'
  import LoadingDemo3 from './demo/loadingDemo3.vue'
</script>

### 区域加载

<ClientOnly>
  <div class="example" style="position: relative">
    <LoadingDemo1/>
  </div>
</ClientOnly>

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
```

:::

### 自定义加载中组件内容

<ClientOnly>
  <div class="example" style="position: relative">
    <LoadingDemo2/>
  </div>
</ClientOnly>

::: details 显示代码

```vue
<template>
  <div
    v-loading="true"
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

<ClientOnly>
  <div class="example" style="position: relative">
    <LoadingDemo3/>
  </div>
</ClientOnly>

::: details 显示代码

```vue
<template>
  <DtszButton
    v-loading.fullscreen.lock="loading"
    dtsz-loading-text="Loading..."
    type="primary"
    size="mini"
    @click="showLoading"
  ></DtszButton>
</template>

<script setup lang="ts">
import { ref } from "vue";
const loading = ref<boolean>(false);
const showLoading = () => {
  loading.value = loading.value ? false : true;
  if (loading.value) {
    setTimeout(() => {
      loading.value = false;
    }, 3000);
  }
};
</script>
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
