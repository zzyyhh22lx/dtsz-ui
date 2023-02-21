<template>
    <div ref="container" :class="bem.b()" :style="`width:${width}px;height:${height}px`">
        <!-- 占位区域 -->
        <div class="bem.is('placeholder', placeholder)" v-if="state.loading">
            <slot name="placeholder">加载中</slot>
        </div>

        <!-- 加载失败 -->
        <div class="bem.is('error', error)" v-else-if="state.isLoadError">
            <slot name="error">加载失败</slot>
        </div>

        <!-- 图片 -->
        <img v-else :src="src" :style="imgStyle" />
    </div>
</template>

<script setup lang="ts">
import { imageProps } from './types/types'
import { createNamespace } from "@dtsz-ui/utils/create"
import { ref, reactive, watch, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { isInContainer, isHtmlEl, getScrollContainer, on, off, throttle } from "@dtsz-ui/utils/util.js";

const bem = createNamespace("image") // bem.b() 为 dtsz-avatar
const props = defineProps(imageProps);
const emit = defineEmits(["error", "load"]);
const state = reactive({
    isLoadError: false, // 是否加载失败
    loading: true, // 加载状态
});
const imgStyle = computed(() => `object-fit:${props.fit};border-radius:${props.radius}px;width:100%;height:100%;`);
let _scrollContainer: Element | String | null;
let _lazyLoadHandler: Function | null;
const container = ref(null);
// 加载图片
const loadImage = () => {
    state.loading = true;
    state.isLoadError = false;

    var image = new Image();
    image.onload = (e) => onComplete(e, image);
    image.onerror = () => onError(image);
    image.src = props.src;
};

// 图片地址改变重载图片
watch(
    () => props.src,
    () => loadImage()
);

// 图片加载完成回调
function onComplete(e:Event, image:HTMLImageElement) {
    state.loading = false;
    state.isLoadError = false;
    emit("load", e);
}

// 图片加载失败回调
function onError(image:HTMLImageElement) {
    state.loading = false;
    state.isLoadError = true;
    emit("error", image);
}

function onLazyLoad() {
    if (isInContainer(container.value, _scrollContainer)) {
        loadImage();
        removeLazyLoadListener();
    }
}
// 添加懒加载监听
function addLazyLoadLintener() {
    const { scrollContainer } = props;
    if (isHtmlEl(scrollContainer)) {
        _scrollContainer = scrollContainer;
    } else if (
        typeof scrollContainer === "string" &&
        scrollContainer !== ""
    ) {
        _scrollContainer = document.querySelector(scrollContainer);
    } else {
        _scrollContainer = getScrollContainer(container.value);
    }
    if (_scrollContainer) {
        _lazyLoadHandler = throttle(onLazyLoad, 200);
        on(_scrollContainer, "scroll", _lazyLoadHandler);
        setTimeout(() => onLazyLoad(), 100);
    }
}
// 移除懒加载监听
function removeLazyLoadListener() {
    if (!_scrollContainer || !_lazyLoadHandler) return;
    off(_scrollContainer, "scroll", _lazyLoadHandler);
    _scrollContainer = null;
    _lazyLoadHandler = null;
}
onMounted(() => {
    if (!props.lazy) {
        return loadImage();
    }
    nextTick(addLazyLoadLintener);
});
onBeforeUnmount(() => {
    props.lazy && removeLazyLoadListener();
});

</script>

<style lang="scss">
// 导入全局 root 中的变量
@use '@dtsz-ui/theme-chalk/src/var.scss' as *;
</style>
<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;

@include b(avatar) {
    overflow: hidden;
    >img {
        // display: block;
        width: 100%;
        height: 100%;
        // font-size: 0;
    }

    @include when(placeholder) {
        // height: 100%;
        display: flex;
        // font-size: 14px;
        color: #bfbfbf;
        background-color: #f5f5f5;
        align-items: center;
        justify-content: center;
        // vertical-align: middle;
    }

    @include when(error) {
        // height: 100%;
        display: flex;
        // font-size: 14px;
        color: #bfbfbf;
        background-color: #f5f5f5;
        align-items: center;
        justify-content: center;
        // vertical-align: middle;
    }
}
</style>