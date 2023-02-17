<template>
    <div ref="container" class="my-image">
        <!-- 占位区域 -->
        <div class="bem.is('placeholder', true)" v-if="state.loading">
            <slot name="placeholder">加载中</slot>
        </div>

        <!-- 加载失败 -->
        <div class="bem.is('error', true)" v-else-if="state.isLoadError">
            <slot name="error">加载失败</slot>
        </div>

        <!-- 图片 -->
        <img v-else class="bem.is('inner', true)" :src="src" :style="imgStyle" />
    </div>
</template>

<script setup lang="ts">
import { imageProps } from './types/types'
import { createNamespace } from "@dtsz-ui/utils/create"
import { ref, reactive, watch, computed, onMounted } from 'vue';

const bem = createNamespace("image") // bem.b() 为 dtsz-avatar
const props = defineProps(imageProps);
const state = reactive({
    isLoadError: false, // 是否加载失败
    loading: true, // 加载状态
});
const imgStyle = computed(() => `object-fit:${props.fit}`);

onMounted(() => {
    loadImage();
})

// 加载图片
const loadImage = () => {
    state.loading = true;
    state.isLoadError = false;

    var image = new Image();
    image.onload = (e) => onComplete(e);
    image.onerror = () => onError(image);
    image.src = props.src;
};

// 图片地址改变重载图片
watch(
    () => props.src,
    () => loadImage()
);

// 图片加载完成回调
function onComplete(e) {
    state.loading = false;
    state.isLoadError = false;
    //   emit("load", e);
}

// 图片加载失败回调
function onError(image) {
    state.loading = false;
    state.isLoadError = true;
    //   emit("error", image);
}
</script>

<style lang="scss">
// 导入全局 root 中的变量
@use '@dtsz-ui/theme-chalk/src/var.scss' as *;
</style>
<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;

@include b(avatar) {
    display: block;

    img {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0;
    }

    @include when(placeholder) {
        height: 100%;
        display: flex;
        font-size: 14px;
        color: #bfbfbf;
        background-color: #f5f5f5;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
    }

    @include when(error) {
        height: 100%;
        display: flex;
        font-size: 14px;
        color: #bfbfbf;
        background-color: #f5f5f5;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
    }
}
</style>