// 实现BEM前端命名方法论

// block 代码块
// element 元素
// modifier 装饰

// dtsz-button
// dtsz-button__element--disable

/**
 *
 * @param prefixName 前缀名
 * @param blockName 代码块名
 * @param elementName 元素名
 * @param modifierName 装饰符名
 * @returns  提供一个函数，用来拼接三个字符串，并用不同的符号进行分隔开来
 */
function _bem(prefixName: string, blockName: string, elementName: string, modifierName: string) {
    if (blockName) {
      prefixName += `-${blockName}`;
    }
    if (elementName) {
      prefixName += `__${elementName}`;
    }
    if (modifierName) {
      prefixName += `--${modifierName}`;
    }
    return prefixName;
}
  
  /**
   *
   * @param prefixName 前缀
   * @returns
   */
function createBEM(prefixName: string) {
    const b = (blockName = "") => _bem(prefixName, blockName, "", "");
  
    const e = (elementName = "") => elementName ? _bem(prefixName, "", elementName, "") : "";
  
    const m = (modifierName = "") => modifierName ? _bem(prefixName, "", "", modifierName) : "";
  
    const be = (blockName = "", elementName = "") =>
      blockName && elementName
        ? _bem(prefixName, blockName, elementName, "")
        : "";
    const bm = (blockName = "", modifierName = "") =>
      blockName && modifierName
        ? _bem(prefixName, blockName, "", modifierName)
        : "";
    const em = (elementName = "", modifierName = "") =>
      elementName && modifierName
        ? _bem(prefixName, "", elementName, modifierName)
        : "";
    const bem = (blockName = "", elementName = "", modifierName = "") =>
      blockName && elementName && modifierName
        ? _bem(prefixName, blockName, elementName, modifierName)
        : "";
    const is = (name = "", state: boolean) => (state ? `is-${name}` : "");
    return {
      b,
      e,
      m,
      be,
      bm,
      em,
      bem,
      is,
    };
}
   /**
   *
   * @param prefixName 前缀
   * @param (var bem = createNamespace("button"))
   * @param (bem.b()) --> dtsz-button
   * @param (bem.e("hy")) --> dtsz-button__hy
   * @param (bem.m("primary")) --> dtsz-button--primary
   * @param (bem.is("checked", true)) --> is-checked
   * @param (bem.bem("success", "element", "disabled")) --> dtsz-button-success__element--disabled
   * @returns
   */ 
export function createNamespace(name: string) {
    const prefixName = `dtsz-${name}`;
    return createBEM(prefixName);
}
