<template>
  <div class="producshow-cover">
    <img class="fadeInLeft wow data-wow-delay=' .1s'" src="../assets/jss8.jpg" alt="123">
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
          prodtitle: "进销存管理",
          prodTxt: "我们为客户提供物料进销存CRM系统，帮助客户有效保障生产经营活动的供给，压缩库存资金占用，降低采购和销售成本，提高客户经济效益。"
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
