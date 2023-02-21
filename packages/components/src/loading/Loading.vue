<template>
  <div :class="bem.b('mask')">
    <div :class="bem.b('spinner')">
      <svg class="circular" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
      </svg>
      <p :class="bem.b('text')">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { createNamespace } from "@dtsz-ui/utils/create";

const bem = createNamespace("loading");

const text = ref<string | undefined>("");
const setText = (val: string | undefined) => {
  text.value = val;
};

defineExpose({ text, setText });
</script>

<script lang="ts">
export default {
  name: "DtszLoading",
};
</script>

<style lang="scss">
@use "@dtsz-ui/theme-chalk/src/var.scss" as *;
</style>
<style lang="scss" scoped>
@use "@dtsz-ui/theme-chalk/src/mixins.scss" as *;
.dtsz-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: var(--dtsz-mask-color);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity var(--dtsz-transition-duration);
  .dtsz-loading-spinner {
    top: calc(50% - var(--dtsz-loading-spinner-size) / 2);
    margin-top: calc((0px - var(--dtsz-loading-spinner-size)) / 2);
    width: 100%;
    text-align: center;
    position: absolute;
    .circular {
      display: inline;
      height: var(--dtsz-loading-spinner-size);
      width: var(--dtsz-loading-spinner-size);
      animation: loading-rotate 2s linear infinite;
      @keyframes loading-rotate {
        to {
          transform: rotate(1turn);
        }
      }
      .path {
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90, 150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: var(--dtsz-color-primary-light-3);
        stroke-linecap: round;
      }
      @keyframes loading-dash {
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
      }
    }
    .dtsz-loading-text {
      text-align: center;
      color: var(--dtsz-color-primary-light-3);
      margin: 3px 0;
      font-size: 14px;
    }
  }
}
</style>
