<template>
<div>
   <banner :bgimage="bgimage">
      <h1 slot="banner-title">合作伙伴</h1>
      <p slot="banner-info">
      针对各行业业务特性，打造个性化行业解决方案，为用户提供一站式的产品与服务。包括
      隧道信息化/安全监测，桥梁健康监测以及公路智能监理
      </p>
    </banner>
  <div class="allies">
    <div class="allies-info wow fadeIn data-wow-delay='.6s'">
      <a class="allies-info-cover" v-for="(item,index) in alliesInfo" :key='index' :href="alliesInfo[index].href">
        <img :src="alliesInfo[index].src" alt="">
        <div class="allies-details">
          <h3>{{ alliesInfo[index].title }}</h3>
          <p>{{ alliesInfo[index].text }}</p>
        </div>  
      </a>
    </div>
    <div class="join">
      <router-link tag="div" class="join-btn" to="/aboutus">
        加入我们
      </router-link>      
    </div>
  </div>
</div>
</template>
<script>
import banner from './banner'
import msections from './msections'
export default {
  name: 'allies',
  components:{msections,banner},
  data() {
    return {
      alliesInfo:[
        {
          src: require('../assets/4up4.jpg'),
          title: "中国科学院合肥分部",
          text: "合作国内首个公路通风竖井大型结构件应力监测，通过光纤技术实现全生命周期健康监测，并已申报多项专利和软著"+
          "。拟联合行业客户在岩性识别、监控量测等多领域开展深度合作。",
          href: "http://www.cas.cn/"
        },
        {
          src: require('../assets/lvp7.jpg'),
          title: "电子科技大学机电学院",
          text: "与电子科技大学电力电子与智能检测研究所，合作开发隧道空气压缩机节能控制核心算法，并已申请专利，应用到多个项目。",
          href: "http://www.uestc.edu.cn/"
        },
        {
          src:  require('../assets/p923.jpg'),
          title: "西南交通大学",
          text: "西南交通大学坐落于成都是国家首批“双一流”、“211工程”、“985工程优势学科创新平台”、“111计划”、"+
          " “2011计划” 、“卓越计划”重点建设并设有研究生院的研究型大学，是“中法4+4”“中欧精英大学联盟”主要成员，"+
          "是“国家建设高水平大学公派研究生项目”及国家“援藏计划”培养院校。",
          href:"http://www.swjtu.edu.cn/"
        },
        {
          src: require('../assets/f6v3.jpg'),
          title: "成都信息工程大学",
          text: "与成都信息工程大学信息安全学院筹备成立工业物联网数据中心与数据安全实验室。 为健壮物联体系架构，培养后继优秀人才做好准备。",
          href: "http://www.cuit.edu.cn/"
        },
      ],
      bgimage:{
          backgroundImage: 'url('+require('../assets/banner/evelyn-mostrom-113153.jpg')+')'
        }
    }
  }
}
</script>
<style scoped>
a{
  color: black
}
  .allies{
    padding: 60px 120px 60px 120px;
    background-color: #f7f7f7;
  }
  .allies-info{
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;

  }
  .allies-info-cover{
    display: flex;  
    margin: 40px 150px 0px 150px;
    padding: 25px;
    background-color: white;
    box-shadow:1px 2px 8px #53535380;
    border-radius: 10px
  }
  .allies-info img{
    display: block;
    width: 150px;
    height: 120px;
  }
  .allies-details{
    padding-left: 20px;
  }
 
  .allies{
    padding: 60px 40px;
  }
 .allies-details{
    padding-left: 20px;
  }

  .join{
    display: flex;
    justify-content: center;
    padding: 40px;
    text-align: center
  }
  .join-btn{
    padding: 10px 40px 10px 40px;
    width: 200px;
    border: 1px solid black;
    background-color: white;
    transition: all 0.5s;
    font-size: 15px;
    text-align: center;
    border-radius: 5px;
  }
  .join-btn:hover{
    color: white;
    background-color: black
  }
 @media screen and (min-width:360px) and (max-width:430px){

    .allies-info-cover{
    align-items: center;
    flex-direction: column;
    margin: 40px 20px 40px 20px;
    padding: 15px;
  }
 }
</style>