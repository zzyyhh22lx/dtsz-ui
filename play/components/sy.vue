<template>
  <div v-loading:[text]="loading">
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
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const loading = ref<boolean>(true);
const text = ref<string | undefined>("Loading...");

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>

<script lang="ts">
export default { name: "Sy" };
</script>
