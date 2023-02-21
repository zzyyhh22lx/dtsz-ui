# 头像
Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。

## 基础用法

### 基础
使用 shape 和 size 属性来设置 Avatar 的形状和大小。

<div class="example">
    <div>
    <AvatarDemo/>
    </div>
</div>

```vue
<template>
    <div class="demo-avatar demo-basic">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
            <div v-for="size in sizeList" :key="size" class="block">
                <dtsz-avatar shape="circle" :size="size" :src="circleUrl" />
            </div>
        </div>
        <div class="sub-title">square</div>
        <div class="demo-basic--circle">
            <div v-for="size in sizeList" :key="size" class="block">
                <dtsz-avatar shape="square" :size="size" :src="squareUrl" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
  
const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    sizeList: ['large', 'middle', 'small'] as const,
})
  
const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>
```

### 支持使用图片作为展示类型
支持使用图片作为 Avatar。
<br/>
<div class="example">
    <div>
        <dtsz-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></dtsz-avatar>
    </div>
</div>

```vue
<template>
<div class="example">
    <div>
        <dtsz-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></dtsz-avatar>
    </div>
</div>
</template>
<script lang="ts" setup>
import { DtszAvatar } from 'dtsz-ui'
</script>
```

### 回退行为
图片加载失败时的回退行为。  
<AvatarDemo2/>

```vue
<template>
<template>
      <dtsz-avatar src="https://empty" @error="handleError">
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
    </dtsz-avatar>
</template>
<script lang="ts" setup>
import { DtszAvatar } from 'dtsz-ui'
const handleError = () => true;
</script>
```

<script setup lang="ts">
import AvatarDemo from './demo/avatardemo1.vue'
import AvatarDemo2 from './demo/avatardemo2.vue'
</script>
## API
### Attributes
| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| size          | 尺寸         | string  | 'large' / 'middle' /'small'                  |  'middle'   | —     |
| shape          | 类型         | string  | 'circle' / 'square'      | 'square'|
| src         | 图片源地址 | string | —                                                  | — |
| alt      | 图片的原生alt属性     | string | —                                                  | — |

### Events
| 名称          | 说明         | 类型    |
| ------------- | ------------ | ------- | 
| error          | 图片加载失败时触发         | Function  | 

### Slots
| 插槽名          | 说明         |
| ------------- | ------------ |
| default          | 自定义头像展示内容         |  