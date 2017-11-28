<template>
  <div class="wrap">
    <el-row>
      <el-col :span="24">
        <el-row class="infobar">
          <el-col :span="2" :offset="18">
            <span style="color: #fff;">中文</span>
          </el-col>
          <el-col :span="2">
            <span style="color: #00E4FF">English</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-col :span="5" :offset="2">
        <div class="button-group">
          <el-button type="primary" size="large" @click="$router.push({name:'BorrowNumber'})">借书</el-button>
          <el-button type="primary" size="large" @click="$router.push({name:'ReturnNumber'})">还书</el-button>
          <el-button type="primary" size="large">续借</el-button>
          <el-button type="primary" size="large">查询</el-button>
          <el-button type="danger" size="large" @click="$router.push({name:'ShowCard'})">无卡</el-button>
        </div>
      </el-col>
      <el-col :span="13" :offset="2">
        <el-carousel height="380px" class="images">
          <el-carousel-item v-for="src in picList" :key="src">
            <img :src="src"/>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="16" :offset="4">
        <el-alert
          title="非本馆读书证及图书不能在此操作"
          type="error"
          center
          :closable="false"
          class="alert"
        >
        </el-alert>
      </el-col>
    </el-row>

    <div class="content">



    </div>
  </div>
</template>
<script>
    import ElCol from "element-ui/packages/col/src/col";

    export default {
      data() {
        return {
          picList: [
            '../static/img/library1.jpg',
            '../static/img/library2.jpg',
            '../static/img/library3.jpg',
            '../static/img/library4.jpg',
          ]
        }
      },
      methods: {
      },

      components: {ElCol}}
</script>
<style scoped lang="less">
  .wrap {

    margin-top: -3px;
    .infobar {
    }

    .content {
      padding-top: 5%;

      .button-group {
        padding-top: 30px;
        /*background-color: red;*/
      }
      .images {
      }
      .alert {
        margin-top: 20px;
        font-size: 25px;
      }
    }


  }

  .el-button {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .el-button+.el-button {
    margin: 0;
    margin-bottom: 20px;
  }
  .el-alert__title {
    font-size: 20px !important;
  }


</style>
<style lang="less">
  /*.el-carousel__indicators {*/
    /*display: none !important;*/
  /*}*/
</style>
