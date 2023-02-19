<template>
  <div>
    <dtsz-button></dtsz-button>
    <dtsz-button type="success">success</dtsz-button>
    <dtsz-button type="primary">primary</dtsz-button>
    <dtsz-button type="info">info</dtsz-button>
    <dtsz-button type="warning">warning</dtsz-button>
    <dtsz-button type="danger">danger</dtsz-button>
    <dtsz-button
      type="danger"
      round
      disabled
    ></dtsz-button> 
    <DIcon name="edit" />
    <dtsz-backToTop rightLen="50px" bottomLen="50px"></dtsz-backToTop>
    <Dtsz-nav type="blackColor"></Dtsz-nav>
  </div>
</template>
<script lang="ts" setup>
import { DtszButton, DIcon } from 'dtsz-ui'
import { DtszBackToTop } from 'dtsz-ui'
import { DtszNav } from 'dtsz-ui'
import BackToTop from './components/wlc.vue'
</script>

<style>
body {
  height: 2000px;
}
</style>