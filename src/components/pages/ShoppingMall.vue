<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" width="60%" alt="locationIcon" class="location-icon">
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
    </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "shopping Mall",
        locationIcon:require('../../assets/images/location.png')
      }
    },
  }
</script>

<style scoped>
  .search-bar{
    height:2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
  }
  .search-input{
    width:100%;
    height:1.3rem;
    border-top:0;
    border-left:0;
    border-right:0;
    border-bottom:1px solid #fff;
    background-color: #e5017d;
  }
  .location-icon{
    padding-top:.2rem;
    padding-left:.3rem;
  }
</style>
