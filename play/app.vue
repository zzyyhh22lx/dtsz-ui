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
    <dtsz-nav type="blackColor"></dtsz-nav>
    <dtsz-row :gutter="10">
      <div>布局测试</div>
      <dtsz-col span="8"><div class="col-div"></div></dtsz-col>
      <dtsz-col span="10"><div class="col-div"></div></dtsz-col>
    </dtsz-row>
    <dtsz-row :gutter="10">
      <dtsz-col span="3"><div class="col-div"></div></dtsz-col>
      <dtsz-col span="2"><div class="col-div"></div></dtsz-col>
      <dtsz-col span="10"><div class="col-div"></div></dtsz-col>
      <dtsz-col span="4"><div class="col-div"></div></dtsz-col>
    </dtsz-row>
    <dtsz-row :gutter="10">
      <dtsz-col span="5"><div class="col-div"></div></dtsz-col>
      <dtsz-col span="2"><div class="col-div"></div></dtsz-col>
      <dtsz-col span="1"><div class="col-div"></div></dtsz-col>
    </dtsz-row>
  </div>
</template>
<script lang="ts" setup>
import { DtszButton, DIcon } from 'dtsz-ui'
import { DtszBackToTop } from 'dtsz-ui'
import { DtszNav } from 'dtsz-ui'
import { DtszRow } from 'dtsz-ui'
import { DtszCol } from 'dtsz-ui'
</script>

<style>
body {
  height: 2000px;
}
.col-div {
  background-color: rgb(97, 126, 126); 
  height: 40px; 
  border-radius: 20px;
}
</style>