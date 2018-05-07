<template>
  <div>
    <!-- search-bar area -->
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
    <!--swipwer area-->
    <div class="swiper-area">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                <img v-lazy="banner.imageUrl" width="100%"/>
            </van-swipe-item>
        </van-swipe>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [
        { imageUrl: require("../../assets/images/simleVueDemoPic001.jpg") },
        { imageUrl: require("../../assets/images/simleVueDemoPic002.jpg") },
        { imageUrl: require("../../assets/images/simleVueDemoPic003.jpg") }
      ]
    };
  },
  created() {
    axios({
      url: " https://www.easy-mock.com/mock/5af00fd49d036f65711bbb51/getList",
      method: "get"
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {});
  }
};
</script>

<style scoped>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #fff !important;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
.swiper-area {
  clear: both;
  max-height: 10rem;
  overflow: hidden;
}
</style>
