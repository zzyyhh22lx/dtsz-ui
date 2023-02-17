import { createApp, DirectiveBinding } from "vue";
import DtszLoading from "./Loading.vue";

const relative = "g-relative";
const hidden = "g-hidden";

// TODO: 明确el类型定义

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const append = (el: any) => {
  const style: CSSStyleDeclaration = getComputedStyle(el);
  el.classList.add(hidden);
  if (["absolute", "relative", "fixed"].indexOf(style.position) === -1) {
    el.classList.add(relative);
  }
  el.appendChild(el.instance.$el);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const remove = (el: any) => {
  el.removeChild(el.instance.$el);
  el.classList.remove(relative);
  el.classList.remove(hidden);
};

export const loadingDirective = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mounted(el: any, binding: DirectiveBinding) {
    const app = createApp(DtszLoading);
    const instance = app.mount(document.createElement("div"));
    el.instance = instance;

    if (binding.value) {
      append(el);
    }
    if (binding.arg !== "undefined") {
      el.instance.setText(binding.arg);
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updated(el: any, binding: DirectiveBinding) {
    if (binding.arg !== "undefined") {
      el.instance.setText(binding.arg);
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el);
    }
  },
};
