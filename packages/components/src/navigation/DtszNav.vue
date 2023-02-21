<template>
    <div
    :class="[bem.b(), bem.is('disabled', disabled)]"
    >
        <div
        :class="[bem.m(type)]"
        ref="index1"
        >
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCA0NEM4Ljg5NTQzIDQ0IDggNDMuMTA0NiA4IDQyVjZDOCA0Ljg5NTQzIDguODk1NDMgNCAxMCA0SDM4QzM5LjEwNDYgNCA0MCA0Ljg5NTQzIDQwIDZWNDJDNDAgNDMuMTA0NiAzOS4xMDQ2IDQ0IDM4IDQ0SDEwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDIyVjRIMzNWMjJMMjcgMTUuNzI3M0wyMSAyMloiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTAgNEgzOCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
        style="width: 20px;height: 20px;margin-right: 10px;"
        >
        选项1
        </div>
        <div
        :class="[bem.m(type)]"
        ref="index2"
        >
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yNCA0TDE4IDEwSDEwVjE4TDQgMjRMMTAgMzBWMzhIMThMMjQgNDRMMzAgMzhIMzhWMzBMNDQgMjRMMzggMThWMTBIMzBMMjQgNFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI0IDMwQzI3LjMxMzcgMzAgMzAgMjcuMzEzNyAzMCAyNEMzMCAyMC42ODYzIDI3LjMxMzcgMTggMjQgMThDMjAuNjg2MyAxOCAxOCAyMC42ODYzIDE4IDI0QzE4IDI3LjMxMzcgMjAuNjg2MyAzMCAyNCAzMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+"
        style="width: 20px;height: 20px;margin-right: 10px;"
        >
        选项2
        </div>
        <div
        :class="[bem.m(type)]"
        ref="index3"
        >
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDI0QzQgMzUuMDQ1NyAxMi45NTQzIDQ0IDI0IDQ0VjQ0QzM1LjA0NTcgNDQgNDQgMzUuMDQ1NyA0NCAyNEM0NCAxMi45NTQzIDM1LjA0NTcgNCAyNCA0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTM2IDI0QzM2IDE3LjM3MjYgMzAuNjI3NCAxMiAyNCAxMkMxNy4zNzI2IDEyIDEyIDE3LjM3MjYgMTIgMjRDMTIgMzAuNjI3NCAxNy4zNzI2IDM2IDI0IDM2VjM2IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+"
        style="width: 20px;height: 20px;margin-right: 10px;"
        >
        选项3
        </div>
    <slot v-if="$slots.default"></slot>
    <span v-else></span>
    </div>
</template>

<script setup lang="ts">
import { navProps } from './types/types'
import { createNamespace } from "@dtsz-ui/utils/create"
import {getCurrentInstance, ref, onMounted} from 'vue'

const bem = createNamespace('nav')
const index1 = ref()
const index2 = ref()
const index3 = ref()
const img2 = ref()
const props = defineProps(navProps)

onMounted(() => {
    index1.value.onclick = function () {
        index1.value.style.color = 'yellow'
        index2.value.style.color = 'aliceblue'
        index3.value.style.color = 'aliceblue'
    }
    index2.value.onclick = function () {
        index2.value.style.color = 'yellow'
        index1.value.style.color = 'aliceblue'
        index3.value.style.color = 'aliceblue'
    }
    index3.value.onclick = function () {
        index3.value.style.color = 'yellow'
        index1.value.style.color = 'aliceblue'
        index2.value.style.color = 'aliceblue'
    }
})
</script>
<script lang="ts" vars="{ prop.disabled }">
export default {
    name: "DtszNav"
};
</script>

<style lang="scss">
@use '@dtsz-ui/theme-chalk/src/var.scss' as *;
</style>
<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;

@mixin nav-type($bgcolor){
    color: var(--dtsz-color-white);
	background-color: $bgcolor;
}
@mixin nav-disabled($bgcolor) {
	cursor: not-allowed;
	opacity: 0.55;
	&:hover {
		background-color: $bgcolor;
	}
	&:active {
		background-color: $bgcolor;
	}
}

@mixin nav-child($hover-bgcolor, $active-bgcolor) {
	&:hover {
		background-color: $hover-bgcolor;
	}
	&:active {
		background-color: $active-bgcolor;
	}
}

@include b(nav) {
    width: 250px;
    height: 500px;
    @include nav-type(var(--dtsz-color-info-light-11));

    @include m(whiteColor) {
        @include nav-child(var(--dtsz-color-info-light-15), var(--dtsz-color-primary-light-7));
        width: 100%;
        height: 50px;
        color: var(--dtsz-color-info-light-11);
        display: flex;
        justify-content: center;    
        align-items: center;
        cursor: pointer;
    }
    @include m(blackColor) {
        @include nav-child(var(--dtsz-color-info-light-15), var(--dtsz-color-primary-light-7));
        width: 100%;
        height: 50px;
        color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
}
</style>