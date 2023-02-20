# Shi Yue's Note

## 学习记录

- Vue 自定义指令

  文档：https://cn.vuejs.org/guide/reusability/custom-directives.html#introduction

- CSSStyleSheet.insertRule()

  MDN：https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
  CSSKeyframesRule：https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframesRule

## 问题 & 解决方案汇总

- 在执行任意`pnpm i`命令时，出现报错`pnpm : 无法加载文件 D:\nodejs\pnpm.ps1`

  ```
  pnpm : 无法加载文件 D:\nodejs\pnpm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
  所在位置 行:1 字符: 1
  + pnpm i eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescr ...
  + ~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
  ```

  - 解决方案

    以管理员身份打开 Windows PowerShell。

    执行如下命令：

    ```
    set-ExecutionPolicy RemoteSigned
    ```

  - 新出的问题

    VSCode Terminal 中的 powershell 显示不正常。

    正常情况（executionPolicy 为 Restricted 时）powershell 显示为：

    ```
    PS [项目目录]>
    ```

    现在（executionPolicy 为 RemoteSigned 时）powershell 显示为：

    ```
    ?]633;E;executionPolicy为Restricted时?]633;D;1?]633;A?]633;P;Cwd=C:\x5cUsers\x5cAdministrator\x5cDesktop\x5cdtsz-uiPS C:\Users\Administrator\Desktop\dtsz-ui> ?]633;B
    ```

  - 针对新出的问题的解决方案

    **尚未理解出现问题的原因。**

    参考：https://github.com/microsoft/vscode/issues/174188

    1. 找到`C:\Program Files\Microsoft VS Code\resources\app\out\vs\workbench\contrib\terminal\browser\media\shellIntegration.ps1`；
    2. 注释掉`Prompt()`函数；
    3. 注释掉原 93 行代码；
    4. 重启 VS Code。
