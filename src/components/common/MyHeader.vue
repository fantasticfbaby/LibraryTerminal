<template>
  <div id="header">
    <div class="top"></div>
    <div class="titlebar">
      <span class="system-name">RFID自助借还系统</span>
    </div>
    <div class="gap"></div>
  </div>
</template>
<script>
    export default {}
</script>
<style scoped lang="less">
  #header {
    .top {
      width: 100%;
      height: 10px;
      background-color: #d44200;
    }
    .titlebar {
      width: 100%;
      height: 100px;
      background-color: #44a4df;

      .system-name {
        line-height: 100px;
        font-size: 30px;
      }
    }

    .gap {
      width: 100%;
      height: 5px;
    }


  }
</style>
