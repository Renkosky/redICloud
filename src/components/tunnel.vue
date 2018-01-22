<template>
  <slider :slide="slide"></slider>
</template>
<script>
import slider from './slider'
export default {
  name: 'tunnel',
  components:{
    slider
  },
  data () {
    return {
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

</style>
