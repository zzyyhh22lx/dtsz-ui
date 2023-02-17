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
    <dtsz-avatar shape="square" size="large"  @error="error" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></dtsz-avatar>
    <dtsz-image fit='cover' src="https://pic1.zhimg.com/80/v2-715769278745803cf7a5e012dfc2a66a_1440w.webp?source=1940ef5c"></dtsz-image>
    <dtsz-image src="url" lazy></dtsz-image>
    <div class="scroll">
      <dtsz-image v-for="url in urls" :key="url" :src="url" lazy></dtsz-image>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { DtszButton, DIcon, DtszAvatar, DtszImage} from 'dtsz-ui'
function error(){
  alert('error');
}
const urls= [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
</script>

<style>
.scroll {
  margin: 10px;
  overflow: hidden scroll;
  width: 1000px;
    height: 500px;
  background-color: #eee;
    white-space: nowrap;
}
</style>