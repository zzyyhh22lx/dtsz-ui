<template>
  <div style="position: relative">
    <div v-loading="true" dtsz-loading-text="Loading...">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        veritatis saepe, exercitationem illo at ea consectetur nam dolorum
        consequuntur totam, nobis consequatur et voluptate enim vel fugit
        aspernatur reiciendis asperiores!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const mask = document.getElementsByClassName(
    "dtsz-loading-mask"
  )[0] as HTMLElement;
  mask.style.zIndex = "9";
});
</script>
