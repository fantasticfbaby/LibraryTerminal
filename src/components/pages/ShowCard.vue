<template>
  <div class="container">
    <div class="wrap">
      <el-row>
        <el-col :span="24">
          <el-row class="infobar">
            <span style="font-size: 20px; color: #fff;">请出示您的借书卡</span>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <img src="/static/img/showCard.jpg" alt="" class="cardImg">
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="1" :offset="18">
          <el-button type="warning" class="exit" @click="$router.push({name:'Index'})">退出</el-button>
        </el-col>
      </el-row>

    </div>
    <div class="time">
      <i class="iconfont clock">&#xe6b7;</i>
      <span>57</span>
    </div>
  </div>

</template>
<script>
    import ElCol from "element-ui/packages/col/src/col";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    export default {components: {
      ElButton,
      ElCol}}
</script>
<style scoped lang="less">
  .container {
    position: absolute;
    top: 112px;
    bottom: 15px;
    left: 0;
    right: 0;

    .wrap {
      background-color: #44a4df;
      position: relative;
      height: 100%;
      .cardImg {
        margin-top: 60px;
        border: 3px solid #ffffff;
      }
      .exit {
        margin-top: 20px;
        width: 200px;
        height: 50px;
      }


    }

    .time {
      position: absolute;
      top: 0;
      right: 20px;
      margin-top: -40px;
      border: 2px solid #fff;
      background-color: #44a4df;

      padding-right: 30px;
      padding-left: 5px;
      .clock {
        font-size: 30px;
        color: #fff;
      }
      span {
        font-size: 40px;
        color: #fff
      }
    }
  }

</style>
