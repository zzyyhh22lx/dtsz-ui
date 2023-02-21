# vue3组件库

**第五届青训营项目（队名：动态数组）**

**组件库名称**：`dtsz-ui`

**github地址**：[zzyyhh22lx/dtsz-ui: vue3组件库-青训营项目 (github.com)](https://github.com/zzyyhh22lx/dtsz-ui)

**技术栈：**`vue3、ts、scss、pnpm、vite`



```shell
git clone git@github.com:zzyyhh22lx/dtsz-ui.git
npm i pnpm -g
pnpm install

cd play
pnpm run dev
```





## 1、搭建monorepo环境

[现代前端工程为什么越来越离不开 Monorepo? - 掘金 (juejin.cn)](https://juejin.cn/post/6944877410827370504)



使用 `pnpm` 当做包管理工具，用`pnpm workspace`来实现`monorepo`。

```shell
# 安装
npm i pnpm -g # 全局安装pnpm
pnpm init
pnpm i vue typescript -D
```

创建 `.npmrc` 配置文件（作用：依赖扁平化）

```npmrc
shamefully-hoist = true
```

创建 `tsconfig.json` 文件

可以直接生成 `npx tsc --init`

```json
{
    "compilerOptions": {
      "module": "ESNext", // 打包模块类型ESNext
      "declaration": false, // 默认不要声明⽂件
      "noImplicitAny": false, // ⽀持类型不标注可以默认any
      "removeComments": true, // 删除注释
      "moduleResolution": "node", // 按照node模块来解析
      "esModuleInterop": true, // ⽀持es6,commonjs模块
      "jsx": "preserve", // jsx 不转
      "noLib": false, // 不处理类库
      "target": "es6", // 遵循es6版本
      "sourceMap": true,
      "lib": [ // 编译时⽤的库
        "ESNext",
        "DOM"
      ],
      "allowSyntheticDefaultImports": true, // 允许没有导出的模块中导⼊
      "experimentalDecorators": true, // 装饰器语法
      "forceConsistentCasingInFileNames": true, // 强制区分⼤⼩写
      "resolveJsonModule": true, // 解析json模块
      "strict": true, // 是否启动严格模式
      "skipLibCheck": true, // 跳过类库检测
    },
    "exclude": [ // 排除掉哪些类库
      "node_modules",
      "**/__tests__",
      "dist/**"
    ]
}
```

创建`pnpm-workspace.yaml`配置文件

以将多个项目合并到一个仓库中

```yaml`
packages:
  - 'packages/**' # 存放所有组件
  - 'docs' # 文档
  - 'play' # 测试
```



## 2、配置环境

在根目录下

```shell
cd packages
mkdir components utils theme-chalk # 分别存放组件、工具方法、样式
# 初始化
cd components && pnpm init
cd ../utils && pnpm init
cd ../theme-chalk && pnpm init
```

在 `components` 目录下修改  `package.json` 修改为 `dtsz-ui` 

其他俩个目录下的 `package.json` 修改 `name` ，加上 `@dtsz-ui/ ` 代表**该包是属于 `@dtsz` 这个组织下的**（子包）



在根目录下执行

```shell
pnpm i dtsz-ui -w 
pnpm i @dtsz-ui/theme-chalk -w 
pnpm i @dtsz-ui/utils -w  
```

此时 `pnpm` 会自动创建个软链接指向指定包，方便本地调试各个包直接的关联引用。（-w：workspace）

[工作空间（Workspace） | pnpm](https://pnpm.io/zh/workspaces)



在 `components` 目录下

```shell
pnpm i @dtsz-ui/utils # 安装utils依赖便于后续打包
pnpm i @dtsz-ui/theme-chalk
```

这样在该目录下就可以使用utils定义的工具函数了

```js
import xxx from '@dtsz-ui/utils'
```



**eslint配置**

```shell
npx eslint --init # 选择： no install now
pnpm i eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest -D -w
pnpm i @vue/eslint-config-typescript -D -w
```

`eslintrc.js`

```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended', // vue3解析 https://eslint.vuejs.org/
        'plugin:@typescript-eslint/recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/prefer-import-from-vue': 'off'
    },
    globals: {
        defineOptions: 'readonly'
    }
}
```



**git提交配置**

```shell
git init 
pnpm install mrm husky lint-staged -w -D 
npx mrm lint-staged
pnpm install @commitlint/cli @commitlint/config-conventional -D -w
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

**新建`commitlint.config.js`**

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [ // type枚举
      2, 'always',
      [
        'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        'feat', // 新功能
        'fix', // 修补bug
        'docs', // 文档修改
        'style', // 代码格式修改, 注意不是 css 修改
        'refactor', // 重构
        'perf', // 优化相关，比如提升性能、体验
        'test', // 测试用例修改
        'revert', // 代码回滚
        'ci', // 持续集成修改
        'config', // 配置修改
        'chore', // 其他改动
      ],
    ],
    'type-empty': [2, 'never'], // never: type不能为空; always: type必须为空
    'type-case': [0, 'always', 'lower-case'], // type必须小写，upper-case大写，camel-case小驼峰，kebab-case短横线，pascal-case大驼峰，等等
    'scope-empty': [0],
    'scope-case': [0],
    'subject-empty': [2, 'never'], // subject不能为空
    'subject-case': [0],
    'subject-full-stop': [0, 'never', '.'], // subject以.为结束标记
    'header-max-length': [2, 'always', 72], // header最长72
    'body-leading-blank': [0], // body换行
    'footer-leading-blank': [0, 'always'], // footer以空行开头
  },
}

```

**例如：**

```shell
git add .
git commit -m "feat: 添加配置" # 如果是直接 git commit -m "添加配置" 会报错
git push

git commit -m "feat: 添加配置" --no-verify # 这样可以跳过检验
```



## 3、本地调试

这里可以用脚手架直接生成vue模板（这里简单自己配置一下，减少内存占用）



在根目录下

```shell
mkdir play && cd play # 新建play目录
pnpm init
pnpm install vite @vitejs/plugin-vue -D -w # 支持对vue的转义 -w 这里安装的插件都放在根目录下
```

**配置vite.config.ts**

新建vite.config.ts

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins:[vue()]
})
```

**新建index.html**

@vitejs/plugin-vue 会默认加载examples下的index.html

```xml
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="app"></div>
    <!-- vite 是基于 `esmodule` 的 所以 `type="module"` -->
    <script src="main.ts" type="module"></script>
</body>
</html>
```

**新建app.vue模板**

```xml
<template>
    <div>
        测试组件
    </div>
</template>
```

**新建main.ts**

```javascript
import {createApp} from 'vue'
import App from './app.vue'
const app = createApp(App)
app.mount('#app')
```

此时会发现编译器会提示个错误：找不到模块“./app.vue”或其相应的类型声明

因为直接引入.vue文件 TS会找不到对应的类型声明；所以需要新建typings（命名没有明确规定，TS会自动寻找.d.ts文件）文件夹来专门放这些声明文件。

**新建 typings/vue-shim.d.ts**

TypeScriptTS默认只认ES 模块。如果你要导入.vue文件就要declare module把他们声明出来。

```typescript
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component:DefineComponent<{},{},any>
}
```

**配置脚本启动项目**

最后在package.json文件中配置scripts脚本（play目录下）

```erlang
...
"scripts": {
    "dev": "vite"
  },
...
```

**运行**

```shell
pnpm run dev
```



## 4、编写组件

样例：button组件

目录

```lua
-- components
  -- index.ts
  -- src
  	-- index.ts
    -- button
		-- DtszButton.vue
```

 `DtszButton.vue` 

```vue
<template>
	<button>这是一个button</button>
</template>
```

**导出：**

`src/index.ts`

```ts
import DtszButton from './DtszButton.vue'

export default DtszButton
```

`index.ts`

```ts
import DtszButton from './src/button'

export { DtszButton }
```



## 5、使用组件

在 `play` 目录下

```shell
pnpm i dtsz-ui # 安装依赖（优先从pnpm-lock.yaml寻找）
```

`app.vue`

```vue
<template>
    <div>
        <dtsz-button></dtsz-button>
    </div>
</template>
<script lang="ts" setup>
import { DtszButton } from 'dtsz-ui'
</script>
```

新建 `vue-shim.d.ts` 声明文件

直接引入.vue文件 TS会找不到对应的类型声明；

新建typings（命名没有明确规定，TS会自动寻找.d.ts文件）文件夹来专门放这些声明文件。

TypeScriptTS默认只认ES 模块。如果你要导入.vue文件就要declare module把他们声明出来。

```ts
declare module '*.vue' {
    import type { DefineComponent } from "vue";
}
```



## 6、编写文档

**使用 `vitepress`**

```shell
mkdir docs
cd docs
pnpm init
pnpm i vitepress -w
```



**`docs`目录下**

新建 `index.md`

```md
# helloworld
```

配置`package.json`

```json
...
"scripts": {
    "dev": "vitepress dev ."
}
...
```



根目录下配置`package.json`

```json
...
"scripts": {
    "docs:dev": "pnpm -C docs dev"
}
...
```



启动`docs`目录

```shell
pnpm run docs:dev
```



在docs目录下：

```shell
pnpm i dtsz-ui
```

此时 package.json 会出现

```json
  "dependencies": {
    "dtsz-ui": "workspace:^1.0.0"
  }
```

后面文档就可以使用vue方式显示组件了





## 7、自动化测试

vitest

```js
pnpm add vitest happy-dom c8 -D -w
pnpm add @vue/test-utils -D -w
```





## 8、打包组件

**配置 `vite.config.ts`**

```shell
pnpm i vite-plugin-dts -D -w ## 导出适合用于ts
```

在packages/components/vite.config.ts 中

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts' // 可配置ts
export default defineConfig(
    {
        build: {
            target: 'modules',
            //打包文件目录
            outDir: "es",
            //压缩
            minify: false,
            //css分离
            //cssCodeSplit: true,
            rollupOptions: {
                //忽略打包vue文件
                external: ['vue'],
                input: ['index.ts'],
                output: [
                    {
                        format: 'es',
                        //不用打包成.es.js,这里我们想把它打包成.js
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'es',
                        preserveModulesRoot: 'src'
                    },
                    {
                        format: 'cjs',
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'lib',
                        preserveModulesRoot: 'src'
                    }
                ]
            },
            lib: {
                entry: './index.ts',
                formats: ['es', 'cjs']
            }
        },
        plugins: [
            vue(),
            dts({
                //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
                tsConfigFilePath: '../../tsconfig.json'
            }),
            //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
            dts({
                outputDir:'lib',
                tsConfigFilePath: '../../tsconfig.json'
            })
        ]
    }
)

```





**配置 `package.json`**

发公共包：将各个包的协议改为**MIT开源协议**

```json
...
"license": "MIT",
...

// 配置script
... 
"scripts": {
    ...
    "build": "vite build"
}
...
```

**打包**

```shell
pnpm run build
```



## 9、发布组件

**先去npm官网注册账号**

https://www.npmjs.com/

```shell
npm config set registry=https://registry.npmjs.org # 需要官方源，不可以用淘宝源
pnpm login # 输入账号密码和邮箱，密码颜色是不可见的
pnpm publish --access public --no-git-checks # git no checks
```





**参考文章：**

[Vue3 + TS 搭建组件库 - 掘金 (juejin.cn)](https://juejin.cn/post/7145113345765408798#heading-7)

[Vite+TS带你搭建一个属于自己的Vue3组件库 - 公众号-web前端进阶 - 博客园 (cnblogs.com)](https://www.cnblogs.com/zdsdididi/p/16460802.html)

[从0搭建Vue3组件库:引入单元测试框架Vitest - 掘金 (juejin.cn)](https://juejin.cn/post/7131773709571850276)