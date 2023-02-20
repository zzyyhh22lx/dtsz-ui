<template>
  <div
    v-loading="loading1"
    dtsz-loading-text="Loading..."
    :dtsz-loading-spinner="svg"
    dtsz-loading-svg-view-box="-10, -10, 50, 50"
    dtsz-loading-background="rgba(122, 122, 122, 0.8)"
  >
    <p>各指令演示</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
      veritatis saepe, exercitationem illo at ea consectetur nam dolorum
      consequuntur totam, nobis consequatur et voluptate enim vel fugit
      aspernatur reiciendis asperiores!
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
      veritatis saepe, exercitationem illo at ea consectetur nam dolorum
      consequuntur totam, nobis consequatur et voluptate enim vel fugit
      aspernatur reiciendis asperiores!
    </p>
  </div>
  <div v-loading.fullscreen.lock="loading2">
    <p>配置项演示</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
      veritatis saepe, exercitationem illo at ea consectetur nam dolorum
      consequuntur totam, nobis consequatur et voluptate enim vel fugit
      aspernatur reiciendis asperiores! Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Minus repellendus quisquam, cum saepe suscipit illo sit
      molestias deleniti placeat enim omnis ipsam quasi recusandae laborum
      dignissimos deserunt magnam eos sint. Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Numquam veritatis saepe, exercitationem illo
      at ea consectetur nam dolorum consequuntur totam, nobis consequatur et
      voluptate enim vel fugit aspernatur reiciendis asperiores! Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Minus repellendus quisquam,
      cum saepe suscipit illo sit molestias deleniti placeat enim omnis ipsam
      quasi recusandae laborum dignissimos deserunt magnam eos sint.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
      veritatis saepe, exercitationem illo at ea consectetur nam dolorum
      consequuntur totam, nobis consequatur et voluptate enim vel fugit
      aspernatur reiciendis asperiores! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Enim repudiandae vitae assumenda nulla neque esse quis
      corrupti cupiditate doloremque sapiente, obcaecati, deleniti reprehenderit
      minima tenetur culpa nam autem reiciendis illo! Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Numquam veritatis saepe, exercitationem
      illo at ea consectetur nam dolorum consequuntur totam, nobis consequatur
      et voluptate enim vel fugit aspernatur reiciendis asperiores! Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Minus repellendus quisquam,
      cum saepe suscipit illo sit molestias deleniti placeat enim omnis ipsam
      quasi recusandae laborum dignissimos deserunt magnam eos sint.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const loading1 = ref<boolean>(true);
const loading2 = ref<boolean>(true);
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;

onMounted(() => {
  setTimeout(() => {
    loading1.value = false;
  }, 6000);
  setTimeout(() => {
    loading2.value = false;
  }, 3000);
});
</script>

<script lang="ts">
export default { name: "Sy" };
</script>
