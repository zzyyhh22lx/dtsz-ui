<template>
    <div ref="wrapper">
    </div>
    <div
    v-show="show" @click="backTo"
    :class="[bem.b(), bem.m(type), bem.is('rightLen', true), bem.is('disabled', disabled)]"
    :style="{right: props.rightLen, bottom: props.bottomLen}"
    >
    <slot v-if="$slots.default"></slot>
    <span v-else>UP</span>
    </div>
    
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { backToTopProps } from './types/types'
import { createNamespace } from "@dtsz-ui/utils/create"

const wrapper = ref()
const show = ref(false)

onMounted(() => {
    window.addEventListener("scroll", function () {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolltop > 100) {
            show.value = true
        } else {
            show.value = false
        }
    })
})

const backTo = () => {
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
}
const bem = createNamespace("backToTop")

const props = defineProps(backToTopProps)
</script>
<script lang="ts" vars="{ prop.disabled }">
export default {
    name: "DtszBTTop"
}
</script>

<style lang="scss">
@use '@dtsz-ui/theme-chalk/src/var.scss' as *;
</style>

<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;

@mixin backToTop-type($bgcolor, $hover-bgcolor, $active-bgcolor){
    color: var(--dtsz-color-white);
    background-color: $bgcolor;
    &:hover {
        background-color: $hover-bgcolor;
    }
    &:active {
        background-color: $active-bgcolor;
    }
}
@mixin backToTop-disabled($bgcolor){
    cursor: not-allowed;
    opacity: 0.55;
    &:hover {
        background-color: $bgcolor;
    }
    &:active {
        background-color: $bgcolor;
    }
}
@include b(backToTop) {
    @include backToTop-type(var(--dtsz-color-white), var(--dtsz-color-primary-light-8), var(--dtsz-color-primary-light-7));
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--dtsz-border-radius-base);
    border: 1px solid var(--dtsz-border-color);
    width: 50px;
    height: 70px;
    color: #222222;
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
    position: fixed;

    @include when(disabled){
        @include backToTop-disabled(var(--dtsz-color-white))
    }
    @include when(normal){
        @include backToTop-type(var(--dtsz-color-primary-light-3), var(--dtsz-color-primary-light-5), var(--dtsz-color-primary-dark));
        @include when(disabled) {
			@include backToTop-disabled(var(--dtsz-color-primary-light-3));
		}
    }
    @include when(blueColor){
        @include backToTop-type(var(--dtsz-color-primary-dark), var(--dtsz-color-primary-light-5), var(--dtsz-color-primary-light-8));
        @include when(disabled) {
			@include backToTop-disabled(var(--dtsz-color-primary-light-3));
		}
    }
}
</style>