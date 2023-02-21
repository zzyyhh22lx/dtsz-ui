<template>
    <div>
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

<style>
.col-div {
  background-color: rgb(97, 126, 126); 
  height: 40px; 
  border-radius: 20px;
}
</style>