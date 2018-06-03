# M-Commerce

## 0.简介

Vue.js+Koa2移动电商系统，包括首页展示，类别展示，购物功能，注册登录，积分系统，签到制作，查找页面，后台接口设置，权限管理。
技术栈包括：Vue+Vuex+Router+Vant+Node+Koa2+Mongoose+MongoDB

## 1.项目初始化

1. $ vue init webpack  使用vue-cli生成项目目录
2. $ npm run dev  运行测试环境(http://localhost:8080)

## 2.引入Vant组件库

* [vant](https://www.youzanyun.com/zanui/vant#/zh-CN/intro)是有赞前端团队提供的Vue组件库。特性：
1. 50+ 个经过有赞线上业务检验的组件；
2. 支持babel-plugin-import引入，按需加载插件，无需单独引入样式；
3. 支持TypeScript；
4. 支持SSR；
* 安装vant:$ npm i vant -s;以及babel引入插件:$ npm i babel-plugin-import -d
* 在.babelrc中配置plugins:["import",{"libraryName":"vant","style":true}]
* 按需使用Vant组件:import { 组件名 } from 'vant'

## 3.移动端屏幕适配方案

* 常见移动web布局适配方法
1. 固定高度，宽度百分比(过时)
2. Media Query（媒体查询）,比如bootsrtap
3. flex布局,flex+rem的方式不仅适用于移动Web，网页上也表现良好
* rem单位是相对根元素（即html元素）字体大小的长度单位
1. css中将px单位换算成rem
2. JS控制适配屏幕

```
    //得到手机屏幕的宽度
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
    //设置根元素字体大小
    htmlDom.style.fontSize= htmlWidth/20 + 'px';
```

## 4.首页布局和路由设置

* 去除默认无关配置,如helloword.vue等
* 首页路由的配置:src/router/index.js,详情见文件
* 在src/components下新增pages,放置组件

## 5.首页搜索区

* shoppingMall.vue使用vant组件完成骨架,main.js下引入{Button,Row,Col}
* [iconFont](http://www.iconfont.cn/)图标选取
* vue组件内图标引入,使用:src绑定路径,require引入相对路径,避免编译时出错

## 6.首页轮播图

* shoppingMall.vue的js部分写入一个data参数bannerPicArray，把图片地址放入到里边
* 修改模版文件

```
<van-swipe :autoplay="3000">
    <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
        <img :src="banner.imageUrl" width="100%"/>
    </van-swipe-item>
</van-swipe>
```

* Vant实现图片轮播懒加载
1. 引入Vant的图片懒加载组件 import {Lazyload} from 'vant' ; Vue.use(Lazyload)
2. template部分,修改img标签 v-lazy="banner.imageUrl"

## 7.easyMock(模拟数据)和axios

* [Mock数据准备](https://www.easy-mock.com/)，获得请求地址url，详情见其官网api
* axios的引入 $ npm install --save axios
* 在created的生命周期里取得数据，见shoppingMall.vue

## 8.Mock数据的使用

* 判断获取状态,将数据赋值,if(response.status==200){this.key=response.data.data.key}
* data下的return值需要提前声明空数组,data(){return {key:[]}}
* html通过v-for循环数据

## 9.商品推荐vue-awesome-swiper

* vue-awesome-swiper安装：$ npm install vue-awesome-swiper
* 组件形式引入样式路径+组件名:import "swiper/dist/css/swiper.css";import {swiper swiperSlide} form 'vue-awesome-swiper'
* data下声明变量,created中获取数据
* swiper相关配置,详情见受shoppingMall.vue

## 10.详细配置vue-awesome-swiper

* 添加分页器,竖屏切换效果(swiperDefault.vue)
1. data里进行配置:swiperOption:{pagination:{el:'.swiper-pagination'}}
2. template标签里加入一个div用于显示分页器,注意的是要在swiper-slide外层,(div class="swiper-pagination" slot="pagination")
3. swiper标签里加入 :options="swiperOption"

* 区域滚动效果(swiperDefault1.vue)

```
swiperOption: {
  direction: "vertical", // 竖屏切换
  slidesPerView:'auto', // slidesPerView:’auto’ 设置同屏显示的数量，默认为1
  freeMode:true, // freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合
  mousewheel:true, // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值
}
```

* 分页器可以自由选择,无限循环滚动

```
swiperOption:{
    loop:true, //无限循环滚动
    pagination:{
        el:'.swiper-pagination',
        clickable:true //分页器可以自由选择
    }
}
```

## 11. 首页楼层区域布局

1. 获取楼层1的数据,在data里注册一个floor1的数组变量floor1:[]，在axios里得到数据
2. 编写HTML的时候需要注意层次结构，原则就是先统一规划大体，然后再调整局部
3. 使用了flex布局和box-sizing编写CSS样式

## 12. 楼层组件的封装和watch使用

* 在src/components/下新建一个component的文件夹,新建floorComponent.vue文件
* 父子组件通过props属性进行通讯,组件详情见src/components/component/floorComponent.vue文件
1. 父组件script,通过axois获取数据进行赋值,
2. 父组件template,绑定属性传值 :floorData=floor1
3. 子组件srcipt,通过watch监听异步获得的数据然后进行data赋值,props:['fllor']接收父组件传来的数据
4. 子组件template,进行页面渲染和数据绑定

## 13. 完善楼层组件

* 将楼层主题封装到楼层组件内,floorName
1. floor组件template增加楼层标题,style增加样式,script增加props组件通信属性
2. 父组件template内floor组件的标签绑定:floorTitle属性,scriot部分通过axios获取数据并赋值到data内

## 14. Filter的使用

* 电商项目对钱的格式是有一定要求的,需要对钱的格式做一个过滤器处理。
1. 新建src/filter/moneyFilter.js,并且在调用的组件内引入,components中注册
2. 编写vue里的filter属性,template使用filter:{{item.price | moneyFilter}}

## 15. 首页热卖模块 Van-list组件

* html/css部分在@/src/components/pages/shoppingMall.vue

* Van-list组件的使用
1. 引入List组件:在/src/main.js文件中引入List组件
2. 构造数据:shoppingMall.vue/script,data里声明hotGoods.
3. axios里获得数据:this.hotGoods = response.data.data.hotGoods
4. shoppingMall.vue/html中加入List组件，并使用van-row布局
5. 使用/src/component/goodsInfoComponent.vue商品显示组件
6. import引入组件,并在components里声明一下,最后模版内使用

## 16. 编写后台服务接口配置文件

* 开发中现在直接把数据接口文件写到了axios中，这样写如果地址改变或者接口改变，需要进入业务逻辑代码进行修改，维护起来会非常的麻烦。应该把项目中用到的接口都单独拿出来，作一个接口配置文件serviceAPI.config.js。
1. src目录下建立serviceAPI.config.js
2. 在要使用的文件中用import的形式引入,import url from '@/serviceAPI.config.js'
