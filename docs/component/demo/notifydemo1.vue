<template>
  <dtsz-button type="primary" @click="openNotify()">通知</dtsz-button>
  <DtszNotify
    @NotifyVisibleValue="NotifyVisibleValue"
    :notifyVisible="NotifyVisible"
    width="400px"
    type="warning"
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
