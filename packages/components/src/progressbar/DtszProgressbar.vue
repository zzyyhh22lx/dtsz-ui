<template>
  <div :class="[bem.b(), bem.m(size)]">
    <svg
      :width="200*psize"
      :height="200*psize"
      xmlns="http://www.w3.org/2000/svg"
      :class="[bem.m('circle')]"
    > 
      <circle
        :r="50" 
        :cx="100*psize"
        :cy="100*psize"
        fill="transparent"
        :stroke="outset_bgc"
        :stroke-width="100*psize"
        :stroke-dasharray="Math.PI * 100"
        :stroke-dashoffset="dashoffset"
      />
      <circle
        :r="80*psize > 120 ? 120 : 80"
        :cx="100*psize"
        :cy="100*psize"
        :fill="inset_bgc"
      />
    </svg>
    <span v-if="$slots.default"><slot></slot></span>
    <span v-else>{{ angle }}%</span>
  </div>
</template>
<script setup lang="ts">
  // 组合式，不要用选项式
  import { progressbarProps } from './types/types'
  import { createNamespace } from "@dtsz-ui/utils/create"
  import { computed } from 'vue'
  const bem = createNamespace("progressbar") // bem.b() 为 dtsz-progressbar
  
  const props = defineProps(progressbarProps)
  
  const angle = computed(() => Math.floor((props.angle / 360) * 100))
  const dashoffset = computed(() => Math.PI * 100 / 360 * (props.angle - 360))

  function transformSize(size: string): number {
    const sizeMap = {
      normal: 1, large: 2
    }
    return sizeMap[size] || 1
  }

  const psize = transformSize(props.size)
</script>
<script lang="ts">
  export default {
      name: "DtszProgressbar"
  };
</script>
<style lang="scss">
// 导入全局 root 中的变量
@use '@dtsz-ui/theme-chalk/src/var.scss' as *;
</style>
<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;
@include b(progressbar) {
    //重排，建议不要放大缩小 // zoom: 1;
    width: 200px;height: 200px;
    @include m(normal) {
      width: 200px;height: 200px;font-size: 25px;
    }
    @include m(large) {
        width: 400px;height: 400px;font-size: 30px;
    }
    position: relative;
    display: flex;
    justify-content: center; /*justify-content属性定义了项目在主轴上的对齐方式。*/
    align-items: center; /*设置子元素的垂直对齐方式*/
    @include m(circle) {
        transform: rotate(270deg);
    }
    span {
        position: absolute;
        text-align: center;
        color: white;
    }
}
</style>