<template>
 <div id="app">
  <head>
  </head>
    <mheader></mheader>
    <router-view>
    </router-view>
    <mfooter></mfooter>
  </div>
</template>

<script>
import mheader from './components/mheader'
import mfooter from './components/footer'
import WOW from 'wow.js'
export default {
  name: 'App',
  components: {
    mheader,
    mfooter
  },
  created:function () {
    new WOW().init()
  }
}
</script>

<style>

body,button, input, select, textarea,h1 ,h2, h3, 
h4, h5, h6 { font-family: Microsoft YaHei,'宋体' , Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;}
ul,li{list-style: none;margin: 0;padding: 0}
a{text-decoration:none !important}
a:hover{text-decoration:none !important}
body { min-width: 1000px }
p,nav{margin: 0px}
@media screen and (min-width:360px) and (max-width:430px){
    body{min-width: 0;}
}
</style>
