<template>
    <nav class="navbar navbar-default nav-add">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button"  class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" href="#" to='/'>红云鼎</router-link>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/productions">产品中心</router-link>
                    </li>
                    <li class="dropdown">
                        <router-link to="/solution" 
                         class="dropdown-toggle">
                            解决方案
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/allies">合作伙伴</router-link>
                    </li>
                    <li>
                        <router-link to="/aboutus">关于我们</router-link>
                    </li>
                </ul>        
            </div>
        </div>        
    </nav>
</template>
<script>
export default {
  name: 'mheader'
}
</script>
<style scoped>
.navbar{
    margin: 0px;
}
</style>
