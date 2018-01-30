<template>
<div class="mainpage">
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
    <div class="section1-bg">
        <msections>
            <h2 slot="sections-title">关于我们</h2>
            <p slot="sections-text">
                成都红云鼎科技有限公司是一家创新型高新技术企业,
                依托深厚的通信、计算机信息行业经验，扎实的技术，先进的理念，
                以客户需求为导向，植根于行业应用的大数据，将信息科学与工程实际相结合，为客户提供业界领先的物联网应用解决方案。 
                我们竭诚服务于项目开发商、投资商，工程承包商、建筑方，全心助力客户面向工业4.0转型，
                并推动企业和行业向数字化、信息化、智能化发展。
            </p>
        </msections>
     </div>
    <div class="about-cat">
        <msections><h2 slot="sections-title">解决方案</h2></msections>
        <div class="card-pos">
            <card v-for="(item, index) in mainpageCards" :key="index" :hasPic="hasPic">
            <img :src="mainpageCards[index].url" alt="error" slot="card-img">
            <span slot="card-title">
                {{ mainpageCards[index].title }}
            </span>
            <p slot="card-text">
                {{ mainpageCards[index].text }}
            </p>
            </card>
        </div>
    </div>

</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import msections from './msections'
import card from './card'
export default {
  name:'mainpage',
  components:{
    msections,
    card,
    swiper,  
    swiperSlide
  },
  data() {
      return {
          hasPic: true,
          mainpageCards: [
            {
              title:'隧道信息化/安全监测',
              text:'物联网+工业4.0，众多工程案例，特别在超特长隧道和瓦斯隧道有高竞争力的解决方案。',
              url:require('../assets/lpa3.jpg')
            },
            {
              title:'桥梁健康监测',
              text:'运用国内最领先的光栅光纤技术，采集大跨度桥梁主梁的应变、裂缝、加速度、温度等数据，评估桥梁的承载力和健康状况。',
              url:require('../assets/nv8z.jpg')
            },
            {
              title:'公路智能监理',
              text:'综合运用现代通信技术、物联网技术、智能传感技术和大数据分析，智能监理工程进度，保证工程质量。',
              url:require('../assets/w450.jpg')
            },
          ],
          /**
           * swiper中的文字以及图片
           */
          slide: [
            {
              src: require('../assets/redicloud.png'),
              title: '红云鼎',
            },
            {
              src: require('../assets/banner/nasa.jpg'),
              title: '引领物联网智慧浪潮'
            },
            {
              src: require('../assets/banner/frederic-koberl-108783.jpg'),
              title: '行业领先的管理解决方案',
            },
             {
              src: require('../assets/banner/paul-morris-286949.jpg'),
              title: '绿色低碳的工程之选',
            },
          ], 
          /*配置swpier*/        
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

.nav-add li a{
    padding: 20px;
    margin-right: 30px;
}
.intorduction-bg{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 700px;
    width: 100%;
    background-image: url('../assets/redicloud.png');
    color: white 
}
.intorduction-text{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2%;
    font-size: 20px;
    width: 100%
}
.intorduction-text p{
    margin: 0% 2%;
    
}
  .join{
    display: flex;
    justify-content: center;
    padding: 40px;
    text-align: center
  }
  .join-btn:hover{
    color: white;
    background-color: black
  }
  .card-pos{
      display: flex;
      flex-wrap: wrap;
      justify-content: center
  }

.about-cat{
    text-align: center;
    background-color: rgb(245,245,251);;
}
.about-cat-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
    text-align: center
}
.section1-bg{
    background-image: url('../assets/mo2.jpg');
    background-size: cover;
    padding: 5% 0;
}

.swiper-wrap img{
    width: 100%;
    height: 400px;
}
.swiper-wrap p{
    position: absolute;
    display: block;    
    left: 0;
    right: 0;
    top: 50%;
    margin:auto;
    font-size: 40px; 
    color: white;
    text-align: center
}
@media screen and (min-width:360px) and (max-width:430px){
    body{min-width: 0;}
    .intorduction {   
        top: 30%;
        margin-left: 20%;
        color: white;
    }
    .hr-line-div {
        width: 300px;
    }
    .swiper-wrap img{
        width: 100%;
        height: 400px;
    }
    .swiper-wrap p{
        font-size: 20px;
    }
}
</style>
