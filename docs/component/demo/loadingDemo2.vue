<template>
  <div
    v-loading="true"
    dtsz-loading-text="Loading..."
    :dtsz-loading-spinner="svg"
    dtsz-loading-svg-view-box="-10, -10, 50, 50"
    dtsz-loading-background="rgba(122, 122, 122, 0.8)"
  >
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
      veritatis saepe, exercitationem illo at ea consectetur nam dolorum
      consequuntur totam, nobis consequatur et voluptate enim vel fugit
      aspernatur reiciendis asperiores!
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

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
  const mask = document.getElementsByClassName(
    "dtsz-loading-mask"
  )[0] as HTMLElement;
  mask.style.zIndex = "9";
});
</script>
