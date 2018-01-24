<template>
  <div>
    <msections>
      <h1 slot="sections-title">解决方案</h1>
    </msections>
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
import slider from './slider'
import msections from './msections'
export default {
  name: 'solution',
  components:{
    msections
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
    padding: 0 10%;
  }
  .solution-tab{
    flex-wrap:wrap 
  }
}
</style>