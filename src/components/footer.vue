<template>
  <div class="footer">
    <div class="footer-bar">                   
      <router-link to="/productions">产品中心</router-link>                
      <router-link to="/solution">解决方案</router-link>             
      <router-link to="/allies">合作伙伴</router-link>                  
      <router-link to="/aboutus">关于我们</router-link>         
    </div>
    <div class="footer-contact">
      <div>
        <p>成都红云鼎科技有限公司</p>
        <p>电话： (0086) 028-85002569(0086) 138-8019-0669</p>
        <p>地址： 成都高新西区西源大道2006号电子科技大学创新中心6栋501</p>
        <p>成都市高新区府城大道399号天府新谷10栋18楼</p>
      </div>
      <div>
        <p>微信公众号</p>
        <img src="../assets/bfpc.jpg" alt="二维码">
      </div>
    </div>
    <div class="footer-regist">
      <p>© 2017 成都红云鼎科技有限公司 蜀ICP备17038712号</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'footer'
}
</script>
<style>
.footer{
  padding: 10px;
  background-color: #313131;
  color: #dadada;
  
}
.footer-bar{
  margin: 20px;
  text-align: center
}
.footer-contact{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center
}
.footer-contact div{
  margin: 0 10%
}
.footer-bar a{
  margin: 0 5%;
  font-size: 16px;
  color: #f5f5f5
}
.footer-regist{
  margin: 20px 0 0 20px;
  text-align: center;
}
@media screen and (min-width:360px) and (max-width:430px){
  .footer-bar a{
    margin: 0 2px;
    font-size: 16px;
    color: #f5f5f5
  }
}
</style>
