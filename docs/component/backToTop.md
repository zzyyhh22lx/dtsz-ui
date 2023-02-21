# 回到顶部

## 基础用法
在vue项目中首先下载dtsz-ui包，在需要导入的地方引入并且使用即可

## 使用示例
```vue
<template>
    <div>
        <dtsz-backToTop></dtsz-backToTop>
    </div>
</template>
```

### 默认属性修改示例
以下代码修改了回到顶部按钮距离底部与侧边的距离分别为10px
```vue
<template>
    <div>
        <dtsz-backToTop rightLen="10px" bottomLen="10px"></dtsz-backToTop>
    </div>
</template>
```

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| rightLen         | 距离页面右侧的距离        | string  | 0-页面的宽度                |  40px   | —     |
| bottomLen       | 距离页面底部的距离         | string  | 0-页面的高度  | 40px   |

## 插槽

| 插槽名         | 说明         |  默认值  |
|-------------- | -----------  | --------- |
|default       |自定义内容  | 