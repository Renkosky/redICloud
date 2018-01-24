<template>
  <div class="proshow">
    <div class="proshow-title">
        <h1>产品1</h1>
    </div>
    <div class="proshow-content">
      <img src="../assets/jss8.jpg" alt="">
      <p>概述概述概述概述概述概述概述概述概述概述概述
          概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述
          概述概述概述概述概述概述概述概述
          概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述</p>
      <div class="proshow-function ">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yewu-xianxing "></use>
          </svg>
          <p>功能1</p>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jifen-xianxing"></use>
          </svg>
          <p>功能2</p>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cangkucangchu"></use>
          </svg>
          <p>功能3</p>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ziliaoshouce"></use>
          </svg>
          <p>功能4</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'proshow'
}
</script>
<style scoped>
.proshow{
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center
}
.proshow-content{
  
  margin: 0 20%  
}
.proshow-content p{
  margin: 5% 0;
}
.proshow-function{
  width: 100%;
  display: flex;
  justify-content: center
}
.proshow-content img{
  width: 100%;
}
.icon {
  width: 80px; 
  height: 80px;
  vertical-align: -0.15em;
  fill: gray;
  overflow: hidden;
  margin: 0 50px;
}
 @media screen and (min-width:360px) and (max-width:430px){
   .proshow-content{
     margin: 0 10%;
   }
  .icon {
    width: 40px;
    height: 40px;
    margin: 0 10px
  }
 }
</style>
