<template>
<div class="mainpage">
    <div class="title">    
        <div class="bgimage"></div>
        <div class="blur"></div>
        <div class="intorduction">
            <div class="intorduction-left">红云鼎</div>
            <div class="intorduction-right">
                <ul>
                    <li>引领物联网智慧浪潮</li>
                    <li>行业领先的管理解决方案</li>
                    <li>绿色低碳的工程之选</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="about">
        <div class="about-info wow fadeInUp data-wow-delay= ' .3s' ">     
            <h2>关于我们</h2>
            <div class="hr-line-div"></div>
            <p class="">成都红云鼎科技有限公司是一家创新型高新技术企业,
            依托深厚的通信、计算机信息行业经验，扎实的技术，先进的理念，
            以客户需求为导向，植根于行业应用的大数据，将信息科学与工程实际相结合，为客户提供业界领先的物联网应用解决方案。 
            我们竭诚服务于项目开发商、投资商，工程承包商、建筑方，全心助力客户面向工业4.0转型，
            并推动企业和行业向数字化、信息化、智能化发展。
            </p>  
        </div>
    </div> 
    <div class="about-cat">
        <div class="about-cat-title  wow fadeInUp  data-wow-delay=' .3s' ">
            <h2>解决方案</h2>
            <div class="hr-line-div"></div>
        </div>
        <div class="about-cat-details">       
            <div class="about-cat-cover wow fadeInUp data-wow-delay=' .3s' ">
                <img src="../assets/lpa3.jpg" alt="123">
                <div class="about-cat-info">
                    <h3>隧道信息化/安全监测</h3> 
                    <p>物联网+工业4.0，众多工程案例，特别在超特长隧道和瓦斯隧道有高竞争力的解决方案。</p>
                </div>
            </div>
            <div class="about-cat-cover wow fadeInUp data-wow-delay=' .3s' ">
                    <img src="../assets/nv8z.jpg" alt="123">
                <div class="about-cat-info">
                    <h3>桥梁健康监测</h3>
                    <p>运用国内最领先的光栅光纤技术，采集大跨度桥梁主梁的应变、裂缝、加速度、温度等数据，评估桥梁的承载力和健康状况。</p>
                </div>
            </div>
            <div class="about-cat-cover wow fadeInUp data-wow-delay=' .3s' ">
                <img src="../assets/w450.jpg" alt="123">
                <div class="about-cat-info">
                    <h3>公路智能监理</h3>
                    <p>综合运用现代通信技术、物联网技术、智能传感技术和大数据分析，智能监理工程进度，保证工程质量。</p>
                </div>        
            </div>
        </div>
    </div>
    <div class="contact">
        <div class="contact-content wow fadeInUp data-wow-delay=' .5s' ">
            <h1>联系我们</h1>
            <p>成都红云鼎科技有限公司</p>
            <p>电话： (0086) 028-85002569</p>
            <p>(0086) 138-8019-0669</p>
            <p>地址： 成都高新西区西源大道2006号电子科技大学创新中心6栋501</p>
            <p>成都市高新区府城大道399号天府新谷10栋18楼</p>
            <p>公众号:</p>
            <img src="../assets/bfpc.jpg" alt="二维码">
        </div>
    </div>
    <div class="footer">
         <p>© 2017 成都红云鼎科技有限公司 蜀ICP备17038712号</p>
    </div>
</div>
</template>
<script>

export default {
  name:'mainpage'
}
</script>
<style scoped>

.nav-add li a{
    padding: 20px;
    margin-right: 30px;
}
.title{
    position: relative;
    height: 600px;
    width: 100%;
}
.title img{
    width: 100%;
    height: 100%;
    background-size: cover
}
.blur{
    position: absolute;
    top:0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4)
}
.bgimage{
    height: 100%;
    background-image: url("../assets/christian-seeling-118793.jpg");
    background-size: cover
}
.intorduction{
    display: flex;
    position: absolute;
    top:50%;
    margin-left: 35%;
    color:white;
}
.intorduction-left{
    padding-right:80px; 
    font-size:60px;
    border-right: 4px solid white
}
.intorduction-right{
    flex-direction: column;
    font-size:20px; 
}

.intorduction-right li{
    padding: 20px;
}
.about{
  display: flex;
  justify-content:center;
  margin:200px 0 200px 0;
  /* background-image: url('../assets/christian-seeling-118793.jpg'); */
  background-size: cover;
  /* opacity: 0.4 */
}
.about-info{
    width: 1000px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items:center;
}
.about-info p {
    display: block;
    padding: 40px;
    font-size: 20px
}
.about-cat{
    text-align: center;
    background-color: #f5f5f5;
}
.about-cat-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
    text-align: center
}
.about-cat-details {
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    padding-bottom: 100px;
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
.hr-line-div {
    height: 1px;
    width: 400px;
    background: radial-gradient(#535353 10%, #ffffff00 100%);
}
.contact{
    padding: 100px;
    background-color: #d3d3d3;
}
.contact-content{
    margin-left: 10%;
}
.contact-content img{
    width: 100px;
    height: 100px;
}
.footer{
    padding: 10px;
    background-color: #313131;
    color: #f5f5f5;
    text-align: center
}
@media screen and (min-width:375px) and (max-width:430px){
    body{min-width: 0;}
    .intorduction {   
        top: 30%;
        margin-left: 20%;
        color: white;
    }
    .hr-line-div {
        width: 300px;
    }
    .intorduction-left {
        font-size: 20px;
        padding-right:20px;
        line-height: 11rem;
    }
    .intorduction-right {
        font-size: 10px;
    }
}
</style>
