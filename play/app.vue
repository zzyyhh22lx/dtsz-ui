<template>
  <div>
    <dtsz-button></dtsz-button>
    <dtsz-button type="success">success</dtsz-button>
    <dtsz-button type="primary">primary</dtsz-button>
    <dtsz-button type="info">info</dtsz-button>
    <dtsz-button type="warning">warning</dtsz-button>
    <dtsz-button type="danger">danger</dtsz-button>
    <dtsz-button type="danger"
    round
    disabled
    ></dtsz-button>
    <DIcon name="edit" />
  
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
  <div v-loading:[title]="loading">
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
import { DtszButton, DIcon,DProgressbar } from 'dtsz-ui'
const angle = ref(0)
import { ref, onMounted } from "vue";
const loading = ref<boolean>(true);
const title = ref<string | undefined>("Loading...");
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>
