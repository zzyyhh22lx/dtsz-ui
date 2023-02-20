<template>
  <dtsz-button type="primary" @click="openDialog()">宽度</dtsz-button>
  <DtszDialog width="80%" :dialog-visible="visible">
    <template #footer>
      <dtsz-button type="primary" @click="close()">确定</dtsz-button>
      <dtsz-button type="primary" @click="close()">取消</dtsz-button>
    </template>
  </DtszDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
function openDialog() {
  visible.value = true
}
function close() {
  visible.value = false
}
</script>

<style></style>
