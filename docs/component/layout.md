# 布局

## 基础用法
在vue项目中首先下载dtsz-ui包，在需要导入的地方引入并且使用即可

## 使用示例
```vue
<template>
    <div>
        <dtsz-row :gutter="10">
            <dtsz-col span="3"><div class="col-div"></div></dtsz-col>
            <dtsz-col span="2"><div class="col-div"></div></dtsz-col>
            <dtsz-col span="10"><div class="col-div"></div></dtsz-col>
            <dtsz-col span="4"><div class="col-div"></div></dtsz-col>
        </dtsz-row>
    </div>
</template>
```

### 默认属性修改示例
以下代码修改了span的值，代表在这一个24栏的布局中每一个col占据的百分比大小
```vue
<template>
    <div>
        <dtsz-row :gutter="10">
            <dtsz-col span="5"><div class="col-div"></div></dtsz-col>
            <dtsz-col span="2"><div class="col-div"></div></dtsz-col>
            <dtsz-col span="1"><div class="col-div"></div></dtsz-col>
        </dtsz-row>
    </div>
</template>
```

## Attributes（row）

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| gutter         | 分栏的间隔        | Number, String  | 0-100                |  0   | —     |
| justify   | flex下的水平排列方式         | string  | "start", "end", "center", "space-around", "space-between" | center   |
| align    |  flex下的垂直排列方式         | string  | "top", "middle", "bottom"  | middle   |

## Attributes（col）

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | --------------------------------------------------| ----- |
| span         | col占据的栏位        | string  | [0-24]                |  0   | —     |

## 插槽

| 插槽名         | 说明         |  默认值  |
|-------------- | -----------  | --------- |
|default       |自定义内容  | 