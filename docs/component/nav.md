# 导航菜单

## 基础用法
在vue项目中首先下载dtsz-ui包，在需要导入的地方引入并且使用即可

## 使用示例
```vue
<template>
    <div>
        <dtsz-nav></dtsz-nav>
    </div>
</template>
```

### 默认属性修改示例
以下代码修改了样式为black黑色风格的样式
```vue
<template>
    <div>
        <dtsz-nav type="blackColor"></dtsz-nav>
    </div>
</template>
```

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| type         | 组件的风格        | string  | 'blackColor', 'whiteColor'                |  blackColor   | —     |

## 插槽

| 插槽名         | 说明         |  默认值  |
|-------------- | -----------  | --------- |
|default       |自定义内容  | 