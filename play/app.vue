<template>
  <div>
    <dtsz-button></dtsz-button>
    <dtsz-button type="success">success</dtsz-button>
    <dtsz-button type="primary">primary</dtsz-button>
    <dtsz-button type="info">info</dtsz-button>
    <dtsz-button type="warning">warning</dtsz-button>
    <dtsz-button type="danger">danger</dtsz-button>
    <dtsz-button type="danger" round disabled></dtsz-button>
    <DIcon name="edit" />
    <DtszDialog width="80%" :dialog-visible="visible">
      <template #title>
        <h3>我是标题</h3>
      </template>
      <template #footer>
        <dtsz-button type="primary" @click="close()">确定</dtsz-button>
        <dtsz-button type="primary" @click="close()">取消</dtsz-button>
      </template>
    </DtszDialog>
    <dtsz-avatar
      shape="square"
      size="large"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      @error="error"
    ></dtsz-avatar>
    <dtsz-image
      fit="cover"
      radius="50"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    ></dtsz-image>
    <dtsz-image src="url" lazy></dtsz-image>
    <div class="scroll">
      <dtsz-image v-for="url in urls" :key="url" :src="url" lazy></dtsz-image>
    </div>

    <div style="display: flex">
      <DProgressbar :angle="angle" size="normal"></DProgressbar>
      <DProgressbar :angle="angle" size="large"></DProgressbar>
    </div>
    <input
      v-model.number="angle"
      type="range"
      name="设置圆角"
      min="0"
      max="360"
    />
  </div>
  <sy></sy>
</template>

<script lang="ts" setup>
import {
  DtszButton,
  DIcon,
  DProgressbar,
  DtszAvatar,
  DtszImage,
  DtszDialog,
} from "dtsz-ui";
import { ref } from "vue";
import sy from "./components/sy.vue";

const visible = ref(false);
function open() {
  visible.value = true;
}
function close() {
  visible.value = false;
}
function error() {
  alert("error");
}
const urls = [
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
];

const angle = ref(0);
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
