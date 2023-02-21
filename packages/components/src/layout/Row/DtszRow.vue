<template>
    <div
    :class="[bem.b()]"
    class="className"
    ref="row"
    >
        <slot v-if="$slots.default"></slot>
        <span v-else>UP</span>
    </div>
</template>

<script setup lang="ts">
import { rowProps } from './types/type-row'
import { createNamespace } from "@dtsz-ui/utils/create"
import { computed, getCurrentInstance, onMounted, ref } from 'vue'

const bem = createNamespace("layout-row")

const props = defineProps(rowProps)

const row = ref()


const setColAttrs = () => {
	// 获取 row 下所有 col
	// const row = getCurrentInstance().refs.row.children || [];
  let len
	row.value.children ?  len = row.value.children : []
  console.log(len);
  
	if (len === 0) return;

	for (let i = 0; i < len; i++) {
        row[i].classList.add("col");

        if (props.gutter !== 0 && len > 1) {
          if (i !== 0) row[i].style.paddingLeft = `${props.gutter}px`;
          if (i !== len - 1) row[i].style.paddingRight = `${props.gutter}px`;
        }
    }
};


const className = computed(() => {
    const isFlex = props.type === 'flex';
    const prefix = isFlex ? "row-flex" : "row";
    const name = [prefix];

    if (isFlex) {
        name.push(`row-flex-justify-${props.justify}`)
        name.push(`row-flex-align-${props.align}`)
    }
    return name
})

onMounted(() => {
	setColAttrs();
});
</script>
<script lang="ts" vars="{ prop.disabled }">
export default {
	name: "DtszRow"
};
</script>

<style lang="scss" scoped>
@use '@dtsz-ui/theme-chalk/src/mixins.scss' as *;


.row {
  position: relative;
  box-sizing: border-box;
  display: block;
}

.row:after,
.row:before {
  display: table;
  content: ""
}

.row:after {
  clear: both
}

// flex 布局
.row-flex {
  display: flex;
}

.row-flex-justify-start {
  justify-content: flex-start;
}

.row-flex-justify-end {
  justify-content: flex-end;
}

.row-flex-justify-center {
  justify-content: center;
}

.row-flex-justify-space-around {
  justify-content: space-around;
}

.row-flex-justify-space-between {
  justify-content: space-between;
}

.row-flex-justify-space-evenly {
  justify-content: space-evenly;
}

.row-flex-align-top {
  align-items: flex-start;
}
.row-flex-align-middle {
  align-items: center;
}
.row-flex-align-bottom {
  align-items: flex-end;
}
</style>