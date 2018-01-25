<template>
<div>
  <banner :bgimage="bgimage"></banner>
  <proshow></proshow>
</div>
</template>
<script>
import banner from './banner'
import proshow  from './proshow'
import msections from './msections'
export default {
  name: 'about',
  components:{
    proshow,
    msections,
    banner
  },
  data () {
    return {
      bgimage:{
          backgroundImage: 'url('+require('../assets/banner/jason-wong-351890.jpg')+')'
        }
    }
  }
}
</script>
<style scoped>
.slider-btn{
    position: absolute;
    padding: 20px 10px;
    border-radius: 5px;
    top: 35%;
    cursor: pointer;
    color: white;
    background-color: rgba(128, 128, 128, 0.5);
    text-align: center;
    font-size: 150%;
    transition: all 0.5s ease
}
.slider-btn:hover{
  background-color: black;
}
.slide-pages .on {
  background-color: red
}
 @media screen and (min-width:360px) and (max-width:430px){

  .slide-cover img {
    width: 100%;
    height: 100%;
  }
 }
 @media screen and (min-width:768px) and (max-width:1024px){
    .slide-cover{
      flex-direction: column;
      align-items: center
  }
 }
</style>
