<template>
  <div>
    <div class="banner" :style="bgimage">
      <div class="banner-title wow fadeIn">
        <slot name="banner-title"></slot>
      </div>
      <div class="banner-info wow fadeIn">
        <slot name="banner-info"></slot>
      </div>
      <div class="banner-tab">
        <ul>
          <li v-for="(item, index) in banner" :key="index"><a :href="'#'+index">{{ banner[index] }}</a></li>
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
    },
    banner:{
      type:Array
    }
  },
  method:{
    goto(){

    }
  }
}
</script>

<style scoped>
a{
  display: block;
  padding: 12px 80px;
  color: white;
  transition: all 0.5s ease
}
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
.banner-tab li a:hover{
  background-color: white;
  color: black;
}
@media screen and (min-width:360px) and (max-width:430px){
  p { font-size: 16px;}
  .banner-tab li a{
  padding: 20px;
  transition: all 1s ease
}
}
</style>
