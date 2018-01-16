<template>
  <div class="producshow-cover">
    <img class="fadeInLeft wow data-wow-delay=' .1s'" src="../assets/w993.jpg" alt="123">
    <prodshow :productinfo="productinfo" ></prodshow>
  </div>
</template>
<script>
import prodshow from './prodshow'
export default {
  name: 'mointor',
   components: {
    prodshow
  },
  data() {
    return {
      productinfo: { 
          prodtitle: "智能监理",
          prodTxt: "我们为客户提供路面智能监理系统，您不用到现场，也能实时掌握路面的施工进度"
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
