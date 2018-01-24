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
  name: 'bridge',
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
          src: require('../assets/bridge/1.jpg'),
          title: '桥梁健康实时监控',
          text: '',
          col: true
        },
        {
          src: require('../assets/bridge/2.jpg'),
          title: '桥梁施工监控内容',
          text: '',
          col: true
        },
        {
          src: require('../assets/bridge/3.jpg'),
          title: '桥梁施工监测内容',
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
@media screen and (min-width:360px) and (max-width:430px){
  .swiper-wrap{
    margin: 20% 0;
    width: 100%;
  }
  .swiper-wrap img{
    width: 100%;
    height: 200px;
  }
}
</style>
