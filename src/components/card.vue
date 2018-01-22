<template>
  <div class="card-cover wow fadeInUp data-wow-delay=' .3s' ">
    <slot name="card-img" v-if="hasPic"></slot>
    <div class="card-info">
      <div class="card-title">
       <slot name="card-title"></slot>
      </div>
        <slot name="card-text"></slot>
        </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    hasPic: {
      type:Boolean
    }
  }
}
</script>
<style scoped>


.card-cover{
    flex: 0 1 300px; 
    margin: 40px;
    border: 1px solid rgb(204, 204, 204);
    transition: all 0.5s ease
}
 .card-cover:hover {
    box-shadow:1px 2px 8px #53535380
}
.card-cover img{
    height: 170px;
    width: 100%;
    overflow: hidden;
}

.card-info{
    padding:20px;
}
.card-title{
  font-size: 25px;
  padding: 10px;
  margin-bottom: 20px;
  color: rgb(59, 59, 59);
  border-bottom: 1px solid rgb(204, 204, 204);
}
</style>
