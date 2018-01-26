<template>
  <solswiper :slide="slide"></solswiper>
</template>
<script>
import solswiper from './solswiper'
export default {
  name: 'road',
  components:{ 
    solswiper
  },
  data () {
    return {
      slide: [
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
    }
  }
}
</script>
