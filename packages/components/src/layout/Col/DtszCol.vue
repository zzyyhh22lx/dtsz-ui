<template>
    <div 
    :class="[bem.b()]"
    class="colClassName" 
    :style="{width: 4 * props.span + '%', margin: '5px 0px 0px ' + 100 / 24 + '%'}"
    >
      <slot></slot>
    </div>
  </template>

<script setup lang="ts">
import { colProps } from './types/type-col'
import { createNamespace } from "@dtsz-ui/utils/create"
import { computed } from 'vue'

const bem = createNamespace("layout-col")

const props = defineProps(colProps)


let colClassName = computed(() => {
	// 默认样式和前缀
	let prefix = "layout-col";
	const className = new Array;
	Number(props.span) !== 0 ? className.push(`${prefix}-${props.span}`) : "";
	
	// 偏移量
	Number(props.offset) !== 0
		? className.push(`${prefix}-offset-${props.offset}`)
		: "";
	return className;
});
</script>

<script lang="ts" vars="{ prop.disabled }">
export default {
	name: "DtszCol"
};
</script>

<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;
@mixin col-width($width){
  width: $width;
}

@include b(layout-col){
  @include col-width(100%);
    float: left;
    box-sizing: border-box;
    display: block;
    margin-left: 0%;
}

</style>