<template>
  <div class="about-cat-cover wow fadeInUp data-wow-delay=' .3s' ">
    <img :src="hasPic.url" alt="123" v-if="hasPic.has">
    <div class="about-cat-info">
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
      hasPic:Boolean
    }
}
</script>
<style scoped>

.about-cat-details {
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    padding-bottom: 100px;
}
.about-cat-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
    text-align: center
}
.about-cat-cover{
    margin: 40px;
    width: 300px;
    border: 1px solid rgb(204, 204, 204);
    transition: all 0.5s ease
}
 .about-cat-cover:hover {
    box-shadow:1px 2px 8px #53535380
}
.about-cat-cover img{
    height: 170px;
    width: 100%;
    overflow: hidden;
}

.about-cat-info{
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
