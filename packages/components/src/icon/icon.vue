<template>
  <div class="dtsz-icon">
    <svg
      :class="[bem.m(type)]"
      class="icon"
      :style="iconColor"
      aria-hidden="true"
    >
      <use :xlink:href="iconName"></use>
    </svg>
    <div
      v-if="dot"
      class="dtsz-info"
      :class="[styleDot, bem.e(type)]"
    >
      {{ badge }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { iconProps } from './types/types'
import { createNamespace } from "@dtsz-ui/utils/create"

export default defineComponent({
    props: iconProps,
    setup(props) {
        const bem = createNamespace("icon") // bem.b() 为 dtsz-button
        onMounted(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            import('./font/iconfont.js' as any)
        })
        const iconName = computed(() => {
            return `#icon-${props.name}`
        })
        const styleDot = computed(() => {
            return {
                [`dtsz-dot`]: props.dot && !props.badge
            }
        })
        const badge = computed(() => {
            return props.badge
        })

        const iconColor = computed(() => {
            return {
                color: props.color
            }
        })
        return {
            iconName,
            styleDot,
            badge,
            iconColor,
            bem
        };
    },
});
</script>
<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;
.icon {
  width: 1em;
  height: 1em;

  fill: currentColor;
  overflow: hidden;
}

.dtsz-icon {
  display: inline-block;
  position: relative;
  vertical-align: -0.15em;

  @include m(large) {
    width: 5em;
    height: 5em;
	}
	@include m(small) {
    width: 2em;
    height: 2em;
	}
	@include m(middle) {
    width: 3em;
    height: 3em;
	}
	@include m(mini) {
    width: 1em;
    height: 1em;
	}

  .dtsz-dot {
    width: 8px;
    min-width: 0;
    height: 8px;
    background-color: #ee0a24;
    border-radius: 100%;
  }
  @include e(large) {
    width: 40px;
    height: 40px;
    font-size: 25px!important;
    line-height:40px!important;
	}
	@include e(small) {
    width: 20px;
    height: 20px;
    font-size: 18px!important;
    line-height: 20px!important;
	}
	@include e(middle) {
    width: 30px;
    height: 30px;
    font-size: 20px!important;
    line-height: 30px!important;
	}
	@include e(mini) {
    width: 8px;
    height: 8px;
    font-size: 12px!important;
    line-height: 1.2!important;
	}
}
.dtsz-info {
    position: absolute;
    top: 8px;
    right: 0;
    font-size: 12px;
    line-height: 1.2;
    box-sizing: border-box;
    min-width: 16px;
    padding: 0 3px;
    color: #fff;
    font-weight: 500;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 50%;
    background-color: #ee0a24;
    transform: translate(50%, -50%);
  }
</style>