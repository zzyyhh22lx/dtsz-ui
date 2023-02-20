# Image
图片容器，在保留所有原生 img 的特性下，支持懒加载，自定义占位、加载失败等。

## 基础用法

### 基础

可通过fit确定图片如何适应到容器框，同原生 object-fit。

<ImageDemo1/>

```vue
<template>
    <div class="demo-image">
      <div v-for="fit in fits" :key="fit" class="block">
        <span class="demonstration">{{ fit }}</span>
        <dtsz-image :width="100" :height="100" :src="url" :fit="fit" />
      </div>
    </div>
</template>
  
<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>
```

### 占位内容
可通过slot = placeholder可自定义占位内容。
``` vue
<div class="example">
    <div>
        <dtsz-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
            <template #placeholder>
                <div>Loading</div>
            </template>
        </dtsz-image>
        <dtsz-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
            <template #error>
                <div>Error</div>
            </template>
        </dtsz-image>
    </div>
</div>
```

### 懒加载
可通过lazy开启懒加载功能， 当图片滚动到可视范围内才会加载。 可通过 scroll-container 来设置滚动容器， 若未定义，则为最近一个 overflow 值为 auto 或 scroll 的父元素。
<ImageDemo2/>


<script setup lang="ts">
import ImageDemo1 from './demo/imagedemo1.vue'
import ImageDemo2 from './demo/imagedemo2.vue'
</script>

```
<template>
    <div class="demo-image__lazy">
      <dtsz-image v-for="url in urls" :key="url" :src="url" lazy />
    </div>
</template>
  
<script lang="ts" setup>
const urls = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
  ]
</script>
```

## 图像 API
### Attributes

| 参数          | 说明         | 类型    | 默认  |
| ------------- | ------------ | ------- |  ----- |
| src          | 图片源地址，同原生属性一致         | string        | —     |
| width          | 外容器宽度         | number  | — |
| height          | 外容器长度         | number | — |
| fit          | 确定图片如何适应容器框，同原生 object-fit         | 'fill' / 'contain' / 'cover' / 'none' / 'scale-down'      | 'cover'|
| lazy         | 是否使用懒加载 | boolean | false |
| radius      | 图片使用圆角     | number | — |
| scrollContainer | 开启懒加载功能后，监听 scroll 事件的容器 | string / HTMLElement | 最近一个 overflow 值为 auto 或 scroll 的父元素 |

### Events
| 名称          | 说明         | 类型    |
| ------------- | ------------ | ------- | 
| error          | 图片加载失败时触发         | Function  | 
| load          | 图片加载成功时触发         | Function  | 

### Slots
| 插槽名          | 说明         |
| ------------- | ------------ |
| placeholder          | 当图像尚未加载时，自定义的占位符内容         |  
| error          | 自定义图像加载失败的内容         |  