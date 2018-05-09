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
<pre>
    //得到手机屏幕的宽度
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
    //设置根元素字体大小
    htmlDom.style.fontSize= htmlWidth/20 + 'px';
</pre>

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
<pre>
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
            <img :src="banner.imageUrl" width="100%"/>
        </van-swipe-item>
    </van-swipe>
</pre>
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
