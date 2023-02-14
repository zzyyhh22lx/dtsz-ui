<template>
    <div
    :class="[bem.b(), bem.m(shape)]"
  >
  </div>
</template>

<script setup lang="ts">
import { avatarProps } from './types/types'
import { createNamespace } from "@dtsz-ui/utils/create"

const bem = createNamespace("avatar") // bem.b() 为 dtsz-avatar
defineProps(avatarProps)
</script>

<style lang="scss">
// 导入全局 root 中的变量
@use '@dtsz-ui/theme-chalk/src/var.scss' as *;
</style>
<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;

@mixin avatar-type($size) {
    height: $size + px;
    width: $size + px;
    font-size: round(calc($size / 3) * 2) + px;
    line-height: $size + px;
}

@include b(avatar) {
	border: 1px solid var(--dtsz-border-color);
	border-radius: var(--dtsz-border-radius-base);
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    
    color: var(--dtsz-color-white);
	background-color: var(-dtsz-color-white);
	&:hover {
		background-color: var(--dtsz-color-primary-light-8);
	}

    & > * {
        height: 100%;
        width: 100%;
    }

    @include m(large) {
		@include avatar-type(32);
	}
	@include m(middle) {
		@include avatar-type(24);
	}
	@include m(small) {
		@include avatar-type(16);
	}
}

</style>