import { createApp, DirectiveBinding } from "vue";
import DtszLoading from "./Loading.vue";

const relative = "g-relative";
const hidden = "g-hidden";

// 锁定滚动
const lockScroll = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const screen = document.body;
  screen.style.position = "fixed";
  screen.style.top = "-" + scrollTop + "px";
  screen.style.width = "calc(100% - 7px)";
};

// 取消锁定滚动
const cancelLockedScroll = () => {
  const screen = document.body;
  const scrollTop = Math.abs(parseFloat(screen.style.top));
  screen.style.position = "";
  screen.style.top = "";
  screen.style.width = "100%";
  if (document.body) {
    document.body.scrollTop = scrollTop;
  }
  if (document.documentElement) {
    document.documentElement.scrollTop = scrollTop;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const append = (el: any, binding: DirectiveBinding) => {
  const style: CSSStyleDeclaration = getComputedStyle(el);
  el.classList.add(hidden);
  if (["absolute", "relative", "fixed"].indexOf(style.position) === -1) {
    el.classList.add(relative);
  }
  // 是否设置 fullscreen
  if (binding.modifiers.fullscreen) {
    document.body.appendChild(el.instance.$el);
  } else {
    el.appendChild(el.instance.$el);
  }
  // 是否设置 lock
  if (binding.modifiers.lock) {
    lockScroll();
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const removeLoading = (el: any, parent: HTMLElement) => {
  parent.removeChild(el.instance.$el);
  parent.classList.remove(relative);
  parent.classList.remove(hidden);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const remove = (el: any, binding: DirectiveBinding) => {
  binding.modifiers.fullscreen
    ? removeLoading(el, document.body)
    : removeLoading(el, el);
  if (binding.modifiers.lock) {
    cancelLockedScroll();
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const directives = (el: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let path: any;
  if (el.getAttribute("dtsz-loading-text")) {
    el.instance.setText(el.getAttribute("dtsz-loading-text"));
  }

  if (el.getAttribute("dtsz-loading-spinner")) {
    if (!el.lastChild.firstChild.firstChild) {
      return;
    }
    const circle = el.lastChild.firstChild.firstChild.firstChild;
    if (circle && circle.nodeName !== "#text") {
      circle.insertAdjacentHTML(
        "beforebegin",
        el.getAttribute("dtsz-loading-spinner")
      );
      path = circle.parentNode.childNodes[1];
      circle.remove();

      // 通过 insertAdjacentHTML 插入元素导致部分 css 样式丢失
      // 采用单独设置方法，目前暂未找到更好的办法
      const animationName = `@keyframes loading-dash {
      0% {
        stroke-dasharray: 1, 126;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 95, 126;
        stroke-dashoffset: -31px;
      }
      to {
        stroke-dasharray: 6, 120;
        stroke-dashoffset: -120px;
      }
    }`;
      const sheet = document.styleSheets[0];
      sheet.insertRule(animationName, 0);
      if (path) {
        path.style.animation = "loading-dash 1.5s ease-in-out infinite";
        path.style.strokeDasharray = "90, 150";
        path.style.strokeDashoffset = "0";
        path.style.strokeWidth = "2";
        path.style.stroke = "#409eff";
        path.style.strokeLinecap = "round";
      }
    }
  }
  if (el.getAttribute("dtsz-loading-svg-view-box")) {
    const circular = el.lastChild.firstChild.firstChild;
    if (circular) {
      circular.setAttribute(
        "viewBox",
        el.getAttribute("dtsz-loading-svg-view-box")
      );
    }
  }
  if (el.getAttribute("dtsz-loading-background")) {
    const mask = el.lastChild;
    if (mask) {
      mask.style.backgroundColor = el.getAttribute("dtsz-loading-background");
    }
  }
};

export const loadingDirective = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mounted(el: any, binding: DirectiveBinding) {
    const app = createApp(DtszLoading);
    const instance = app.mount(document.createElement("div"));
    el.instance = instance;

    if (binding.value) {
      // 此时指令传入的值为 true，即 v-loading=true
      append(el, binding);
    }
    directives(el);
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  updated(el: any, binding: DirectiveBinding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el, binding) : remove(el, binding);
    }
    directives(el);
  },
};
