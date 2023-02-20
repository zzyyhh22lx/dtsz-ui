<template>
    <div :class="[bem.b(), bem.m(shape)]">
        <img v-if="src && !hasLoadError" :src="src" :alt="alt" @error="handleError" />
    </div>
</template>

<script setup lang="ts">
import { avatarProps } from './types/types'
import { createNamespace } from "@dtsz-ui/utils/create"
import { ref, watch } from 'vue';

const hasLoadError = ref(false);
const bem = createNamespace("avatar"); // bem.b() 为 dtsz-avatar
const props = defineProps(avatarProps);
const emits = defineEmits(["error"]);

watch(
    () => props.src,
    () => (hasLoadError.value = false)
);
const handleError = (e: Event) => {
    hasLoadError.value = true;
    emits("error", e);
};
</script>

<style lang="scss">
// 导入全局 root 中的变量
@use '@dtsz-ui/theme-chalk/src/var.scss' as *;
</style>
<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;
$font-size: 14px;

@mixin avatar-type($size) {
    height: $size + px;
    width: $size + px;
    font-size: round(calc($size / 3) * 2) + px;
    line-height: $size + px;
}

$white: #fff;
$default-background: #c0c4cc;

@include b(avatar) {
    @include avatar-type(24);
    background-color: $default-background;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: $font-size;
    color: $white;

    >img {
        width: 100%;
        height: 100%;
    }

    &>* {
        height: 100%;
        width: 100%;
    }

    @include m(large) {
        @include avatar-type(56);
    }

    @include m(middle) {
        @include avatar-type(40);
    }

    @include m(small) {
        @include avatar-type(24);
    }

    @include m(circle) {
        border-radius: 100%;

        >img {
            border-radius: 100%;
        }
    }

    @include m(square) {
        border-radius: 3px;

        >img {
            border-radius: 3px;
        }
    }
}
</style>