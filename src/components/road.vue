<template>
    <div class="swiper-wrap wow fadeIn data-wow-delay=' .5s' ">
        <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in slide" :key="index">
            <img :src="slide[index].src" alt="error" srcset="">
            <p class="wow fadeInUp">{{ slide[index].title }}</p>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import slider from './slider'
export default {
  name: 'road',
  components:{ 
    slider,
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
          src: require('../assets/road/1.jpg'),
          title: '道路施工智能监理',
          text: '',
          col: true
        },
        {
          src: require('../assets/road/2.jpg'),
          title: '施工数据实时传感',
          text: '',
          col: true
        },
        {
          src: require('../assets/road/3.jpg'),
          title: '云端本地双重备份',
          text: '',
          col: true
        },
        {
          src: require('../assets/road/4.jpg'),
          title: '道路边坡实时监控',
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
