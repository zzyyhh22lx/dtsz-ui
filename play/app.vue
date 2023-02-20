<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div>
    <dtsz-button></dtsz-button>
    <dtsz-button type="success">success</dtsz-button>
    <dtsz-button type="primary">primary</dtsz-button>
    <dtsz-button type="info">info</dtsz-button>
    <dtsz-button type="danger">danger</dtsz-button>
    <dtsz-button type="danger" round disabled></dtsz-button>
    <dtsz-button type="warning">warning</dtsz-button>

    <DIcon name="email" type="large" dot badge="1" />
    <DIcon name="edit" dot badge="1" type="middle" />
  
    <div style="display:flex">
      <DProgressbar
        :angle="angle"
        size="normal"
      ></DProgressbar>
      <DProgressbar
        :angle="angle"
        size="large"
      ></DProgressbar>
    </div>
    <input
      v-model.number="angle"
      type="range"
      name="设置圆角"
      min="0"
      max="360"
    />
  </div>
</template>
<script lang="ts" setup>
import { DtszButton, DIcon } from 'dtsz-ui'
import { ref } from 'vue'
import {  DProgressbar } from 'dtsz-ui'
const angle = ref(0)
</script>