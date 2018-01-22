<template>
  <slider :slide="slide"></slider>
</template>
<script>
import slider from './slider'
export default {
  name: 'road',
  components:{ slider },
  data () {
    return {
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

</style>
