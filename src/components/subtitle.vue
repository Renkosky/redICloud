<template>
    <div class="sections">   
        <div class="title" >
          <p class="line"></p>
          <p class="tit">
            <slot name="tit" ></slot>
          </p>
		</div>
    </div>
</template>
<script>
export default {
  name: 'subtitle'
}
</script>
<style scoped>
.sections{
  padding:60px 400px 0px 400px;
  background-size: cover;
}
 .title {
    height: 31px;
    position: relative;
    margin-bottom: 51px;
}
.line {
  text-align: center;
    width: 100%;
    height: 1px;
    background-color: rgb(124, 124, 124);
    position: absolute;
    top: 15px;
    left: 0;
    z-index: 1;
}
.tit {
    width: 250px;
    height: 31px;
    margin: 0 auto;
    text-align: center;
    font-size: 26px;
    line-height: 31px;
    background-color: #fff;
    position: relative;
    z-index: 2;
}
</style>
