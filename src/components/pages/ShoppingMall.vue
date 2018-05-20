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
        <van-swipe :autoplay="0">
            <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                <img v-lazy="banner.image" width="100%"/>
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- type-bar -->
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" width="90%" alt="">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <!-- ad-banner -->
    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%" alt="">
    </div>
    <!--Recommend goods area-->
    <div class="recommend-area">
        <div class="recommend-title">
            商品推荐
        </div>
        <div class="recommend-body">
          <swiper :options="swiperOption">
            <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
              <div class="recommend-item">
                <img v-lazy="item.image" width="80%" />
                <div>{{item.goodsName}}</div>
                <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
    </div>
    <!-- 自定义swiper组件 -->
    <!-- <div>
      <swiperDefault></swiperDefault>
      <swiperDefault1></swiperDefault1>
      <swiperDefault2></swiperDefault2>
    </div> -->
    <!--floor one area-->
    <div class="floor">
        <div class="floor-anomaly">
            <div class="floor-one"><img :src="floor1_0.image" width="100%" /></div>
            <div>
                <div class="floor-two"><img :src="floor1_2.image" width="100%" /></div>
                <div><img :src="floor1_3.image" width="100%" /></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import swiperDefault from "../swiper/swiperDefault";
import swiperDefault1 from "../swiper/swiperDefault1";
import swiperDefault2 from "../swiper/swiperDefault2";

export default {
  data() {
    return {
      msg: "shopping mall",
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [],
      category: [],
      adBanner: [],
      recommendGoods: [],
      swiperOption: {
        slidesPerView: 3
      },
      floor1: [],
    };
  },
  created() {
    axios({
      url: " https://www.easy-mock.com/mock/5af00fd49d036f65711bbb51/getList",
      method: "get"
    })
      .then(response => {
        // console.log(response);
        if (response.status === 200) {
          this.category = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture;
          this.bannerPicArray = response.data.data.slides;
          this.recommendGoods = response.data.data.recommend;

          // 楼层1数据
          this.floor1 = response.data.data.floor1;
          // 如果直接在模版中使用floor1[0].image取值会报错，这可能也是vue框架的一个限制
          this.floor1_0 = this.floor1[0];
          this.floor1_1 = this.floor1[1];
          this.floor1_2 = this.floor1[2];
          this.floor1_3 = this.floor1[3];

          console.log(this.floor1);
          console.log(this.floor1_0.image);
        }
      })
      .catch(error => {
        alert(error);
      });
  },
  components: {
    swiper,
    swiperSlide
    // swiperDefault,
    // swiperDefault1,
    // swiperDefault2
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
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
.swiper-area {
  height: 145px;
}
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #ddd;
}
.floor-two {
  border-bottom: 1px solid #ddd;
}
</style>
