<template>
  <div class="producshow-cover">
    <img class="fadeInLeft wow data-wow-delay=' .1s'" src="../assets/1xcs.jpg" alt="123">
    <prodshow :productinfo="productinfo" ></prodshow>
  </div>
</template>
<script>
import prodshow from './prodshow'
export default {
  name: 'ene',
   components: {
    prodshow
  },
  data() {
    return {
      productinfo: { 
          prodtitle: "能耗管理",
          prodTxt: "我们对施工中高能耗的机电设备进行动态监测和分析，实现能耗精细化管理与控制，达到节能减排的效果，为客户节约成本。"
      }   
    }
  }
}
</script>
<style scoped>
.producshow-cover{
  display: flex;
  margin: 15% 10% 15% 10%; 
}
.producshow-cover img {
  width: 30%;
  height: 30%;
}
</style>
