<template>
 <div id="app">
  <head>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  </head>
    <mheader></mheader>
    <router-view/>
  </div>
</template>

<script>
import mheader from './components/mheader'
import WOW from 'wow.js'
export default {
  name: 'App',
  components: {
    mheader
  },
  created:function () {
    new WOW().init()
  }
}
</script>

<style>

body,button, input, select, textarea,h1 ,h2, h3, 
h4, h5, h6 { font-family: Microsoft YaHei,'宋体' , Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;}
ul,li{list-style: none}
/* body { min-width: 1000px } */
p,nav{margin: 0px}
</style>
