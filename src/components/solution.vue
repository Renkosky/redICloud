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
      <div class="solution-slide">
        <router-view></router-view>
      </div>
    </div>
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
.solution-tab{
  display: flex;
  flex-direction: column;
  font-size: 20px;
}
.solution-show{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 700px;
}
.router-link-active{
  color: black
}
</style>