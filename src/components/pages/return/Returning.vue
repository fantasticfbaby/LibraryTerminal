<template>
  <div class="container">
    <div class="wrap">
      <el-row>
        <el-col :span="24">
          <el-row class="infobar">
            <span style="font-size: 20px; color: #fff;">系统正在还书</span>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 20px;height: 430px;">
        <el-col :span="21" align="left" style="background-color: #fff;">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="icon"
              width="50">
              <template slot-scope="scope">
                <i class="iconfont" v-if="scope.row.status == 'success'" style="color: green;">&#xe605;</i>
                <i class="iconfont" v-else-if="scope.row.status == 'processing'" style="font-size: 25px; color: blue;">&#xe600;</i>
                <i class="iconfont" v-else-if="scope.row.status == 'waiting'">&#xe6b7;</i>
              </template>
            </el-table-column>
            <el-table-column
              label="书名"
              prop="title"
              width="700">
              <template slot-scope="scope">
                <span v-if="scope.row.status == 'success'" style="color: green;">{{scope.row.title}}</span>
                <span v-else-if="scope.row.status == 'processing'" style="color: blue;">{{scope.row.title}}</span>
                <span v-else-if="scope.row.status == 'waiting'" style="color: gray;">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态">
              <template slot-scope="scope">
                <span v-if="scope.row.status == 'success'" style="color: green;">成功</span>
                <span v-else-if="scope.row.status == 'processing'" style="color: blue;">正在处理</span>
                <span v-else-if="scope.row.status == 'waiting'" style="color: gray;">等待中</span>
              </template>
            </el-table-column>
          </el-table>

        </el-col>
      </el-row>
      <router-link :to="{name:'ReturnComplete'}">next</router-link>


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
          title: '1.图书A',
          status: 'success'
        }, {
          title: '2.图书A',
          status: 'processing'
        }, {
          title: '3.图书A',
          status: 'waiting'
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
