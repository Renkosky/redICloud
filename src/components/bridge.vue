<template>
  <slider :slide="slide"></slider>
</template>
<script>
import slider from './slider'
export default {
  name: 'bridge',
  components:{
    slider
  },
  data () {
    return {
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

</style>
