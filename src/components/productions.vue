<template>
  <div class="productions">
    <div class="production-titles">
      <h2>我们的产品</h2>
        <div class="productions-cat">
          <router-link  to="/productions/progres" class="nav-items">进度管理</router-link>
          <router-link  to="/productions/lis" class="nav-items" >工序管理</router-link>
          <router-link  to="/productions/ene" class="nav-items">能耗管理</router-link>
          <router-link  to="/productions/mointor" class="nav-items">智能监理</router-link>
          <router-link  to="/productions/ioput" class="nav-items">进销存管理</router-link>
        </div>
    </div>

      <router-view></router-view>
  </div>
  
</template>
<script>
export default {
  name: 'productions'
}
</script>
<style scoped>
.productions{
  margin: 0% 15% 0 15%;
  min-height: 800px;
}
.production-titles{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.productions-cat{
  display: flex;
  justify-content: center;
}


.nav-items{
  flex: 0 1 auto;
  text-align: center;
  padding: 20px 30px 5px 30px  ;
  font-size: 2rem;
  border-right:1px solid rgba(83, 214, 127, 0)
}

.router-link-active{
    color:rgb(14, 14, 14);
    border-bottom:1px solid rgb(14, 14, 14)
}
</style>