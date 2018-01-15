<template>
    <nav class="navbar navbar-default nav-add">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" @click="toggleCollapse()" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" href="#" to='/'>红云鼎</router-link>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link href="#" to="/mainpage">首页
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link href="#" to="/aboutus">关于我们</router-link>
                    </li>
                    <li>
                        <router-link href="#" to="/productions">产品中心</router-link>
                    </li>
                   
                    <li class="dropdown">
                        <router-link href="#"  to="/solution" @click="toggledrop()"
                         class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            解决方案
                            <span class="caret"></span>
                        </router-link>
                        <ul id="dropdown-menu" class="dropdown-menu">
                            <li>
                                <router-link href="#">隧道安全监控</router-link>
                            </li>
                            <li>
                                <router-link href="#">桥梁健康检测</router-link>
                            </li>
                            <li>
                                <router-link href="#">路面智能监理</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/example">成功案例</router-link>
                    </li>
                    <li>
                        <router-link to="/alias">合作伙伴</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">联系我们</router-link>
                    </li>
                </ul>        
            </div>
        </div>        
    </nav>
</template>
<script>
export default {
  name: 'mheader',
  methods: {
      toggleCollapse () {
          let navbarClass = document.getElementById('bs-example-navbar-collapse-1').classList;
          navbarClass.toggle('collapse')
      },
      toggledrop () {
          let navbarClass = document.getElementById('dropdown-menu').classList;
          navbarClass.toggle('dropdown-menu')
      }
  }
}
</script>
<style scoped>
.navbar{
    margin: 0px;
}
</style>
