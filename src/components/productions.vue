<template>
<div>
  <msections>
    <h2 slot="sections-title">产品中心</h2>
  </msections>
  <slider :slide="slide"></slider>
</div>
</template>
<script>
import slider from './slider'
import msections from './msections'
export default {
  name: 'about',
  components:{slider,msections},
  data () {
    return {
      slide: [
        {
          src: require('../assets/n153.jpg'),
          title: '进度管理',
          text: '我们为客户提供了端到端的进度管理解决方案，在充分保障工程安全和质量的前提下，有效的提升项目进度。',
          col: false
        },
        {
          src: require('../assets/szt9.jpg'),
          title: '工序管理',
          text: '施工人员通过手持终端的APP，提前查看各工序的准备情况，提前预判工序的必要条件是否能满足并及时解决问题，减少工序间的等待时间，提高作业效率。',
          col: false
        },
        {
          src: require('../assets/1xcs.jpg'),
          title: '智能监理',
          text: '我们对施工中高能耗的机电设备进行动态监测和分析，实现能耗精细化管理与控制，达到节能减排的效果，为客户节约成本。',
          col: false
        },
        {
          src: require('../assets/jss8.jpg'),
          title: '进销存管理',
          text: '我们为客户提供物料进销存CRM系统，帮助客户有效保障生产经营活动的供给，压缩库存资金占用，降低采购和销售成本，提高客户经济效益。',
          col: true
        },
        {
          src: require('../assets/w993.jpg'),
          title: '智能监理',
          text: '我们为客户提供路面智能监理系统，您不用到现场，也能实时掌握路面的施工进度和施工质量。',
          col: true
        }
      ]
    }
  }
}
</script>
<style scoped>
.slider-btn{
    position: absolute;
    padding: 20px 10px;
    border-radius: 5px;
    top: 35%;
    cursor: pointer;
    color: white;
    background-color: rgba(128, 128, 128, 0.5);
    text-align: center;
    font-size: 150%;
    transition: all 0.5s ease
}
.slider-btn:hover{
  background-color: black;
}
.slide-pages .on {
  background-color: red
}
 @media screen and (min-width:360px) and (max-width:430px){

  .slide-cover img {
    width: 100%;
    height: 100%;
  }
 }
 @media screen and (min-width:768px) and (max-width:1024px){
    .slide-cover{
      flex-direction: column;
      align-items: center
  }
 }
</style>
