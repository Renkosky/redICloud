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
    return{
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