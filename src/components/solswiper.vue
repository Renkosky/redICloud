<template>
  <div class="swiper-wrap wow fadeIn data-wow-delay=' .5s' ">
    <swiper :options="swiperOption">
    <swiper-slide v-for="(item, index) in slide" :key="index">
        <img :src="slide[index].src" alt="error" srcset="">
        <h3 class="wow fadeInUp">{{ slide[index].title }}</h3>
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
  name: 'solswiper',
  components:{
    swiper,  
    swiperSlide,
  },
  props:{
    slide: {
      type: Array
    }
  },
  data() {
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
      }
    }
  }
}
</script>
<style scoped>
.swiper-wrap{
  margin: 6% auto;
  width: 60%;
  text-align: center;
}
.swiper-wrap img{
  width: 100%;
  height: 500px;
}
  
.swiper-wrap p{
  font-size: 20px;
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
  .swiper-wrap p{
    font-size: 20px;
    margin: 0 4px 
  }
}
</style>
