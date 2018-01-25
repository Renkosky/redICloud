<template>
  <div>
    <banner :bgimage="bgimage">
      <h1 slot="banner-title">解决方案</h1>
      <p slot="banner-info">
      针对各行业业务特性，打造个性化行业解决方案，为用户提供一站式的产品与服务。包括
      隧道信息化/安全监测，桥梁健康监测以及公路智能监理
      </p>
    </banner>
    <div class="solution-show">
      <div class="solution-tab">
        <router-link to="/solution/tunnel">隧道信息化/安全监测</router-link>
        <router-link to="/solution/bridge">桥梁健康监测</router-link>
        <router-link to="/solution/road">公路智能监理</router-link>
      </div>  
    </div>
    <router-view></router-view>
  </div>
  
</template>
<script>
import banner from './banner'
import slider from './slider'
import msections from './msections'
export default {
  name: 'solution',
  components:{
    msections,
    banner
  },
  data() {
    return {
       bgimage:{
          backgroundImage: 'url('+require('../assets/banner/frederic-koberl-108783.jpg')+')'
        }
    }
  }
}
</script>
<style scoped>

.solution-tab a{
  display: block;
  padding: 0 2%;
}

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