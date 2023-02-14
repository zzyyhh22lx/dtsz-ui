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
    <dtsz-avatar shape="large"></dtsz-avatar>
    <dtsz-image src="https://pic1.zhimg.com/80/v2-715769278745803cf7a5e012dfc2a66a_1440w.webp?source=1940ef5c"></dtsz-image>
  </div>
</template>
<script lang="ts" setup>
import { DtszButton, DIcon, DtszAvatar, DtszImage} from 'dtsz-ui'
</script>