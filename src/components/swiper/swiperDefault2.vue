<template>
  <div >
      <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
           Slide {{item}}
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      slide: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        // direction: "vertical", // 竖屏切换
        pagination: {
          el: ".swiper-pagination",
          clickable:true, // 让分页器可以自由选择,注意这个属性要配置在pagination下面，才能起作用
        },
        loop:true, // 无限循环滚动
      }
    };
  },
  components: { swiper, swiperSlide }
};
</script>

<style scoped>
.swiper-slide {
  height: 4rem;
  text-align: center;
  padding-top: 3rem;
  border-bottom: 1px solid #ccc;
}
</style>
