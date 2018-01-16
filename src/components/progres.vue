<template>
<div class="producshow-cover">
    <img class="fadeInLeft wow data-wow-delay=' .1s'" src="../assets/n153.jpg" alt="123">
    <prodshow :productinfo="productinfo" ></prodshow>
</div>
</template>
<script>
import prodshow from './prodshow'
export default {
  name: 'progres',
  components: {
    prodshow
  },
  data() {
    return {
      productinfo: { 
          imgUrl: "../static/n153.jpg",
          prodtitle: "进度管理",
          prodTxt: "我们为客户提供了端到端的进度管理解决方案，在充分保障工程安全和质量的前提下，有效的提升项目进度。"
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
