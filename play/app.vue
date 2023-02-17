<template>
  <div>
    <dtsz-button @click="open()"></dtsz-button>
    <dtsz-button type="success">success</dtsz-button>
    <dtsz-button type="primary">primary</dtsz-button>
    <dtsz-button type="info">info</dtsz-button>
    <dtsz-button type="warning">warning</dtsz-button>
    <dtsz-button type="danger">danger</dtsz-button>
    <dtsz-button type="danger" round disabled></dtsz-button>
    <DIcon name="edit" />
    <DtszDialog width="80%" :dialogVisible="visible">
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
      <template v-slot:footer>
        <dtsz-button type="primary" @click="close()">确定</dtsz-button>
        <dtsz-button type="primary" @click="close()">取消</dtsz-button>
      </template>
    </DtszDialog>
  </div>
</template>
<script lang="ts" setup>
import { DtszButton, DIcon, DtszDialog } from 'dtsz-ui'
import { ref } from 'vue'
const visible = ref(false)
function open() {
  visible.value = true
}
function close() {
  visible.value = false
}
</script>
