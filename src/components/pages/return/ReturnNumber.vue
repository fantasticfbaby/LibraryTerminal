<template>
  <div class="container">
    <div class="wrap">
      <el-row>
        <el-col :span="24">
          <el-row class="infobar">
            <span style="font-size: 20px; color: #fff;">请选择要归还的数量</span>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="btnRow">
        <el-col :span="12">
          <el-button class="btnNum" v-for="item in 5" :key="item" @click="$router.push({name:'PlaceReturnBook'})">{{item}}本</el-button>
        </el-col>
      </el-row>

      <el-row class="warnRow">
        <el-col :span="16" :offset="4">
          <span class="warn">一次最多归还5本图书</span>
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
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button.vue";
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

      .btnRow {
        padding-top: 40px;
      }
      .btnNum {
        width: 30%;
        height: 100px;
        font-size: 30px;
      }

      .warnRow {
        padding-top: 40px;
        .warn {
          color: #fff;
          font-size: 30px;
        }
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

    .el-button:first-child {
      margin-right: 10px;
    }
    .el-button+.el-button {
      margin: 10px;
    }
  }

</style>
