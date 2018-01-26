<template>
  <div>
    <banner :bgimage="bgimage" :banner="banner">
      <h1 slot="banner-title" >解决方案</h1>
      <p slot="banner-info">
      针对各行业业务特性，打造个性化行业解决方案，为用户提供一站式的产品与服务。包括
      隧道信息化/安全监测，桥梁健康监测以及公路智能监理
      </p>
    </banner>
    <div class="solution-show" v-for="(item,index) in banner" :key="index" :id="index">
      <subtitle><span slot="tit">{{ banner[index] }}</span></subtitle>
      <solswiper :slide="slide[index]"></solswiper>
    </div>
  </div>
  
</template>
<script>
import banner from './banner'
import slider from './slider'
import solswiper from './solswiper'
import subtitle from './subtitle'
export default {
  name: 'solution',
  components:{
    banner,
    solswiper,
    subtitle
  },
  data() {
    return {
      bgimage:{
        backgroundImage: 'url('+require('../assets/banner/frederic-koberl-108783.jpg')+')'
      },
      banner:['隧道信息化/安全','桥梁健康','公路智能'],
      slide: [
        [
          {
            src: require('../assets/tunnel/1.jpg'),
            title: '隧道洞内安全监测',
            text: '无线网络平台,现场环境监控,现场视频监控,人员定位系统,语音广播对讲。',
          },
          {
            src: require('../assets/tunnel/2.jpg'),
            title: '隧道洞口安全监测',
            text: '人车入场，管理渣车ETC监控，重点区域监控',
          },
          {
            src: require('../assets/tunnel/3.jpg'),
            title: '洞口LED大屏显示',
            text: '',
          },
          {
            src: require('../assets/tunnel/4.jpg'),
            title: '监控中心展示',
          },
          {
            src: require('../assets/tunnel/5.png'),
            title: '通风竖井实时监测',
          }
        ],
        [
          {
            src: require('../assets/bridge/1.jpg'),
            title: '桥梁健康实时监控',
          },
          {
            src: require('../assets/bridge/2.jpg'),
            title: '桥梁施工监控内容',
          },
          {
            src: require('../assets/bridge/3.jpg'),
            title: '桥梁施工监测内容',
          }
        ],
        [
          {
            src: require('../assets/road/1.jpg'),
            title: '道路施工智能监理',

          },
          {
            src: require('../assets/road/2.jpg'),
            title: '施工数据实时传感'
          },
          {
            src: require('../assets/road/3.jpg'),
            title: '云端本地双重备份',
          },
          {
            src: require('../assets/road/4.jpg'),
            title: '道路边坡实时监控'
          }
        ]
      ]
    }
  }
}
</script>
<style scoped>
.solution-tab{
  display: flex;
  justify-content: center;
  flex: 0 0 auto;
  font-size: 20px;
}
.router-link-active{
  color: black
}
@media screen and (min-width:360px) and (max-width:430px){
  .solution-tab a{
    display: block;
    padding: 0 50px;
  }
  .solution-tab{
    flex-wrap:wrap 
  }
}
</style>