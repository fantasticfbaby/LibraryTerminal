<template>
  <div class="container">
    <div class="wrap">
      <el-row>
        <el-col :span="24">
          <el-row class="infobar">
            <span style="font-size: 20px; color: #fff;">请放置您要归还的图书</span>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 20px;height: 430px;">
        <el-col :span="21" align="left" style="background-color: #fff;">
          <el-table
            border
            :data="tableData"
            style="width: 100%;">
            <el-table-column
              prop="id"
              label="条形码号"
              width="300">
            </el-table-column>
            <el-table-column
              prop="title"
              label="题名"
              width="400">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="备注">
            </el-table-column>
          </el-table>
          <el-row type="flex" justify="space-between" style="padding-top: 100px">
            <el-col :span="2">
              <img src="/static/img/putbook.png" alt="" width="200px">
            </el-col>
            <el-col :span="2" style="margin-top: 130px;">
              <span>读到
                <span style="font-size: 30px; font-weight: bold; color: red;">1</span>
                本
              </span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-row class="btn-group" type="flex" justify="space-between">
        <el-col :span="4">
          <el-button type="warning" class="btn" @click="$router.go(-1)">重选数量</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="warning" class="btn" @click="$router.push({name:'Returning'})">确认归还</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="warning" class="btn" @click="$router.push({name:'Index'})">退出</el-button>
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

  export default {
    data() {
      return {
        tableData: [{
          id: '001',
          title: '图书A',
          remark: '超期，应还日期：2017-01-01'
        }, {
          id: '002',
          title: '图书B',
          remark: '应还日期：2017-12-01'
        }]
      }
    },
    components: {
      ElButton,
      ElCol
    }
  }
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

      .btn-group {
        padding: 20px 300px;
        position: absolute;
        bottom: 0;
        width: 100%;
        .btn {
          width: 200px;
          height: 60px;
        }
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
