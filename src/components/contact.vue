<template>
  <div class="contact">
    <div class="contact-img"><img src="../assets/tianfu.jpg" alt=""></div>
    <div class="contact-text">
      <p>电话： (0086) 028-85002569
                (0086) 138-8019-0669
      </p>
      <p>地址： 成都高新西区西源大道2006号电子科技大学创新中心6栋501
                成都市高新区府城大道399号天府新谷10栋18楼
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'contact'
}
</script>
<style scoped>
.contact{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5%
}
.contact-img{
  width: 40%
}
.contact-img img{
  width: 100%
}
.contact-text{
  width: 50%;
  padding: 20px
}
</style>