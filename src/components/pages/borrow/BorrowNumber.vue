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
      <el-row class="btnRow">
        <el-col :span="10" class="col-info">
          <p>姓名:林海瑞</p>
          <p>证号:2015210405043</p>
          <p>可借数量:10</p>
        </el-col>

        <el-col :span="12">
          <button class="btnNum" style="" v-for="item in 10" :key="item" @click="$router.push({name:'PlaceBorrowBook', params: {number:item}})">{{item}}本</button>
        </el-col>
      </el-row>

      <el-row class="warnRow">
        <el-col :span="16" :offset="4">
          <span class="warn">一次最多借阅10本图书</span>
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

        .col-info {
          p {
            text-align: left;
            padding-left: 20px;
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
      .btnNum {
        width: 30%;
        height: 80px;
        font-size: 30px;
        float:left; margin:3px; background: #c5cad3;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #000;
        cursor: pointer;

        &:hover {
          background: #adb2bb;
        }


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

    /*.el-button {*/
      /*margin-right: 10px;*/
    /*}*/
    .el-button+.el-button {
      margin: 10px;
    }
  }

</style>
