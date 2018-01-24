<template>
  <div class="swiper-wrap wow fadeIn data-wow-delay=' .5s' ">
    <swiper :options="swiperOption">
    <swiper-slide v-for="(item, index) in slide" :key="index">
        <img :src="slide[index].src" alt="error" srcset="">
        <p class="wow fadeInUp">{{ slide[index].title }}</p>
        <p>{{ slide[index].text }}</p>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'tunnel',
  components:{
    swiper,  
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
          speed:1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      slide: [
        {
          src: require('../assets/tunnel/1.jpg'),
          title: '隧道洞内安全监测',
          text: '无线网络平台,现场环境监控,现场视频监控,人员定位系统,语音广播对讲。',
          col: true
        },
        {
          src: require('../assets/tunnel/2.jpg'),
          title: '隧道洞口安全监测',
          text: '人车入场，管理渣车ETC监控，重点区域监控',
          col: true
        },
        {
          src: require('../assets/tunnel/3.jpg'),
          title: '洞口LED大屏显示',
          text: '',
          col: true
        },
        {
          src: require('../assets/tunnel/4.jpg'),
          title: '监控中心展示',
          text: '',
          col: true
        },
        {
          src: require('../assets/tunnel/5.png'),
          title: '通风竖井实时监测',
          text: '',
          col: true
        }
      ]
    }
  }
}
</script>
<style scoped>
.swiper-wrap{
  margin: 5% auto;
  width: 60%;
  
}
.swiper-wrap img{
  width: 100%;
  height: 500px;
}
.swiper-wrap p{
  font-size: 20px;
  text-align: center;
  margin-top: 5% 
}
</style>
