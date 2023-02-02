<template>
  <div class="dtsz-icon">
    <svg
      class="icon"
      :style="iconColor"
      aria-hidden="true"
    >
      <use :xlink:href="iconName"></use>
    </svg>
    <div
      v-if="dot"
      class="dtsz-info"
      :class="styleDot"
    >
      {{ badge }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { iconProps } from './types/types'
export default defineComponent({
    props: iconProps,
    setup(props) {
        onMounted(() => {
            import('./font/iconfont.js' as any)
        })
        const iconName = computed(() => {
            return `#dtsz-${props.name}`
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
            iconColor
        };
    },
});
</script>
<style lang="scss" scoped>
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

  .dtsz-info {
    position: absolute;
    top: 8px;
    right: 0;
    box-sizing: border-box;
    min-width: 16px;
    padding: 0 3px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 16px;
    background-color: #ee0a24;
    transform: translate(50%, -50%);
  }

  .dtsz-dot {
    width: 8px;
    min-width: 0;
    height: 8px;
    background-color: #ee0a24;
    border-radius: 100%;
  }
}
</style>