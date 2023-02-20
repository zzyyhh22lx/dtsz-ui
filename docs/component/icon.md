# 图标

## 使用方法

<div class="example">
    <div>
        <d-icon name="edit"></d-icon>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <d-icon name="edit"></d-icon>
  </div>
</template>
<script lang="ts" setup>
import { DIcon } from 'dtsz-ui'
</script>
```

:::

## 添加样式

<br/>
<div class="example">
    <div>
        <d-icon name="edit" dot badge="1" type="middle" />
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <d-icon name="edit" dot badge="1" type="middle" ></d-icon>
  </div>
</template>
<script lang="ts" setup>
import { DIcon } from 'dtsz-ui'
</script>
```

:::

## 图标列表

<div class="icon_content">
    <div class="icon_list">
        <d-icon name="edit"></d-icon>
        <div class="icon_name">edit</div>
    </div>
    <div class="icon_list">
        <d-icon name="discount"></d-icon>
        <div class="icon_name">discount</div>
    </div>
        <div class="icon_list">
        <d-icon name="direction-left"></d-icon>
        <div class="icon_name">direction-left</div>
    </div>
        <div class="icon_list">
        <d-icon name="eye-close"></d-icon>
        <div class="icon_name">eye-close</div>
    </div>
        <div class="icon_list">
        <d-icon name="email"></d-icon>
        <div class="icon_name">email</div>
    </div>
        <div class="icon_list">
        <d-icon name="error"></d-icon>
        <div class="icon_name">error</div>
    </div>
        <div class="icon_list">
        <d-icon name="favorite"></d-icon>
        <div class="icon_name">favorite</div>
    </div>
        <div class="icon_list">
        <d-icon name="favorite"></d-icon>
        <div class="icon_name">favorite</div>
    </div>
        <div class="icon_list">
        <d-icon name="file-common"></d-icon>
        <div class="icon_name">file-common</div>
    </div>
    <div class="icon_list">
        <d-icon name="file-delete"></d-icon>
        <div class="icon_name">file-delete</div>
    </div>
     <div class="icon_list">
        <d-icon name="customer-service"></d-icon>
        <div class="icon_name">customer-service</div>
    </div>
     <div class="icon_list">
        <d-icon name="close"></d-icon>
        <div class="icon_name">close</div>
    </div>
    <div class="icon_list">
        <d-icon name="add"></d-icon>
        <div class="icon_name">add</div>
    </div>
    <div class="icon_list">
        <d-icon name="arrow-double-right"></d-icon>
        <div class="icon_name">arrow-double-right</div>
    </div>
    <div class="icon_list">
        <d-icon name="back"></d-icon>
        <div class="icon_name">back</div>
    </div>
    <div class="icon_list">
        <d-icon name="arrow-double-right"></d-icon>
        <div class="icon_name">arrow-double-right</div>
    </div>
    <div class="icon_list">
        <d-icon name="file-add"></d-icon>
        <div class="icon_name">file-add</div>
    </div>
    <div class="icon_list">
        <d-icon name="zhanghao"></d-icon>
        <div class="icon_name">zhanghao</div>
    </div>
    <div class="icon_list">
        <d-icon name="bad"></d-icon>
        <div class="icon_name">bad</div>
    </div>
    <div class="icon_list">
        <d-icon name="bottom"></d-icon>
        <div class="icon_name">bottom</div>
    </div>
</div>

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| name          | 图标类型        | string  | -                | ----  | —     |
| type          | 大小类型         | string  | large/middle/small/mini  | mini     |
| dot         | 右上角是否出现圆角 | boolean | —      | false |
| badge     | 左上角出现圆角的字符     | string | —         | --- |
| color     | 图标颜色     | string | —

<style>
.icon_content{
    overflow:hidden;
    border-top:1px solid #f5f5f5;
    border-left:1px solid #f5f5f5;
}
.icon_content .icon_list {
    float:left;
    width:20%;
    height:110px;
    border-right:1px solid #f5f5f5;
    border-bottom:1px solid #f5f5f5;
    padding:20px;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-wrap:wrap;
    box-sizing:border-box;
    cursor: pointer;
}
.icon_name {
    color:gray;
    font-size:14px;
    width:100%;
    text-align:center
}
</style>
