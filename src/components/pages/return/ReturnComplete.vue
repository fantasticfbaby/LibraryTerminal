<template>
  <div class="container">
    <div class="wrap">
      <el-row>
        <el-col :span="24">
          <el-row class="infobar">
            <span style="font-size: 20px; color: #fff;">还书完成</span>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="21">
          <el-row style="border: 2px solid #fff; background: #44a4df; font-weight: bold">
            <el-col>
              <p>成功:4&nbsp;&nbsp;&nbsp;失败:0</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" style="margin-top: 20px;height: 300px;">
        <el-col :span="21" align="left" style="background-color: #fff;">
          <el-table
            border
            :data="tableData"
            style="width: 100%;">
            <el-table-column
              prop="id"
              label="条形码号"
              width="250">
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
        </el-col>
      </el-row>

      <el-row class="btn-group" type="flex" justify="space-between" style="padding: 20px 300px; position: absolute; bottom: 0; width: 100%;">
        <el-col :span="4">
          <el-button type="warning" class="btn" @click="$router.push({name:'ReturnNumber'})">继续还书</el-button>
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
          remark: '成功'
        }, {
          id: '002',
          title: '图书B',
          remark: '成功'
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
