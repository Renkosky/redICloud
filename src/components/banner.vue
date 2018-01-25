<template>
  <div>
    <div class="banner" :style="bgimage">
      <div class="banner-title">
        <slot name="banner-title"></slot>
      </div>
      <div class="banner-info">
        <slot name="banner-info"></slot>
      </div>
      <div class="banner-tab">
        <ul>
          <li>我们的团队</li>
          <li>我们的优势</li>
          <li>我们的使命</li>
        </ul>
      </div>
    </div>   
  </div>
</template>
<script>
export default {
  name: 'banner',
  props:{
    bgimage:{
      type:Object
    }
  }
}
</script>

<style scoped>
.banner-info{
  padding: 0% 10% 5% 10%;
  font-size: 20px;

}
.banner{
  position: relative;
  height: 400px;
  background-size: cover;  
  color: white;
}
.banner-title{
  padding: 5% 10% 1% 10%;/*67 134*/
}
.banner-tab{
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0;
  justify-content: center;
  background-color: rgba(42, 42, 42, 0.4)
}
.banner-tab ul{
  display: flex;
  justify-content: center
}
.banner-tab li{
  padding: 12px 80px;
}
@media screen and (min-width:360px) and (max-width:430px){
  p { font-size: 16px;}
}
</style>
