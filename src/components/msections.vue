<template>
  <div class="sections">
    <div class="sections-info wow fadeInUp data-wow-delay= ' .3s' ">
      <div class="sections-title">    
        <slot name="sections-title"></slot>
        <div class="hr-line-div"></div>
      </div>
      <div class="sections-text">
      <slot name="sections-text" ></slot>
      </div> 
    </div>
  </div>

</template>
<script>
export default {
  name: 'msections'
}
</script>
<style scoped>
.hr-line-div {
  height: 1px;
  width: 400px;
  margin-top: 20px;
  background: radial-gradient(#535353 10%, #ffffff00 100%);
}
.sections{
  display: flex;
  justify-content:center;
  margin:50px 0;
  background-size: cover;
}
.sections-info{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items:center;
}
.sections-title{
  padding: 40px;
}
.sections-text{
    width: 60%;
    text-align: center;
    font-size:20px;
}
@media screen and (min-width:360px) and (max-width:430px){
    .hr-line-div {
      width: 300px;
    }
}
</style>
