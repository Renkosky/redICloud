<template>
  <div class="producshow-cover">
    <img class="fadeInLeft wow data-wow-delay=' .1s'" src="../assets/szt9.jpg" alt="123">
    <prodshow :productinfo="productinfo" ></prodshow>
  </div>
</template>
<script>
import prodshow from './prodshow'
export default {
  name: 'lis',
  components: {
    prodshow
  },
  data() {
    return {
      productinfo: { 
          prodtitle: "工序管理",
          prodTxt: "施工人员通过手持终端的APP，提前查看各工序的准备情况，提前预判工序的必要条件是否能满足并及时解决问题，减少工序间的等待时间，提高作业效率。"
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
