<template>
  <div :class="[bem.b(), bem.m(type)]">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { buttonProps } from './types/types'
import { createNamespace } from "@dtsz-ui/utils/create"

const bem = createNamespace("button") // bem.b() 为 dtsz-button

defineProps(buttonProps);
</script>
<script lang="ts">
export default {
	name: "DtszButton"
};
</script>
<style lang="scss">
// 导入全局 root 中的变量
@use '@dtsz-ui/theme-chalk/src/var.scss' as *;
</style>
<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;
@mixin button-hover($color) {
	cursor: pointer;
	background-color: $color;
}
@include b(button) {
	display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
	padding: 5px 10px;
	border: 1px solid var(--dtsz-border-color);
	user-select: none;
	&:hover {
		@include button-hover(var(--dtsz-color-primary-light));
	}
	&:active {
		border-color: var(--dtsz-color-primary-active);
	}
	@include m(primary) {
		color: var(--dtsz-color-white);
		background-color: var(--dtsz-color-primary);	
		&:hover {
			@include button-hover(var(--dtsz-color-primary-hover));
		}
		&:active {
			background-color: var(--dtsz-color-primary-active);
		}
	}
}
</style>