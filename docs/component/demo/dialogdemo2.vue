<template>
  <dtsz-button type="success" @click="openDialog()">添加内容</dtsz-button>
  <DtszDialog :dialog-visible="visible">
    <template #title>
      <h3>我是标题</h3>
    </template>
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
