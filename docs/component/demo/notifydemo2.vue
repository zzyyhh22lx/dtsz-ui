<template>
  <dtsz-button type="success" @click="openNotify()">位置修改</dtsz-button>
  <DtszNotify
    @NotifyVisibleValue="NotifyVisibleValue"
    :notifyVisible="NotifyVisible"
    position="top-left"
  >
  </DtszNotify>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const NotifyVisible = ref(false)
function openNotify() {
  NotifyVisible.value = true
}
function NotifyVisibleValue(value) {
  NotifyVisible.value = value
}
</script>

<style></style>
