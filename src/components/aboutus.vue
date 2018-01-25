<template>
<div class="aboutus">
  <banner :bgimage="bgimage">
    <h1 slot="banner-title">关于我们</h1>
    <p slot="banner-info">
      成都红云鼎科技有限公司是一家创新型高新技术企业，依托深厚的通信、计算机信息行业经验，扎实的技术，
      先进的理念，以客户需求为导向，植根于行业应用的大数据，
      将信息科学与工程实际相结合，为客户提供业界领先的物联网应用解决方案。</p>
  </banner>
    <subtitle>
      <span slot="tit">为什么选择红云鼎</span>
      </subtitle>
    <div class="team wow fadeIn data-wow-delay=' .3s'">
      <div class="team-title">
        <h1>我们的团队</h1>
        <p>our team</p>
      </div>
        <div class="team-mem">
          <div class="mem-content" v-for="(item, index) in team" :key="index">
            <div class="mem-img">
              <img :src="team[index].src" alt="error">
              <div class="mem-cover"></div>
              <div class="mem-info">
                <p>{{ team[index].duty }}</p>
                <h2>{{ team[index].name }}</h2>        
              </div>
            </div> 
          </div>
        </div>
    </div>
    <div class="team wow fadeIn data-wow-delay=' .3s'" >
      <div class="team-title">
        <h1>我们的优势</h1>
        <p>our advantage</p>
      </div>
      <div class="team-mem">
          <div class="mem-content" v-for="(item, index) in adv" :key="index" id="bigcontent">
            <div class="mem-img">
              <img :src="adv[index].src" alt="error">
              <div class="mem-cover"></div>
              <div class="mem-info" :class="{ biginfo: adv[index].big }">
                <p>{{ adv[index].duty }}</p>
                <h2>{{ adv[index].name }}</h2>        
              </div>
            </div> 
          </div>
        </div>
    </div>
    <div class="team  wow fadeIn data-wow-delay=' .3s' ">
      <div class="team-title">
        <h1>我们的使命</h1>
        <p>our route</p>
      </div>
      <div class="team-mem">
        <p>既可提供全方位一站式的系统方案和服务，
          也可有针对性的定制解决方案或升级改造，以“价值、创新”为导向，帮助客户成就最大化的商业价值。
        </p>
      </div>
    </div>
      <msections>
        <h2 slot="sections-title">联系方式</h2>
      </msections>
      <contact></contact>
</div>  
</template>
<script>
import subtitle from './subtitle'
import banner from './banner'
import card from './card'
import msections from './msections'
import contact from './contact'
export default {
  name: 'about',
  components: {
    msections,
    contact,
    banner,
    subtitle
  },
  data() {
    return {
        team: [
          {
            src:require('../assets/team/lenon.jpg'),
            duty:'主唱/作词/作曲',
            name:'约翰列侬'
          },
          {
            src:require('../assets/team/pual.jpg'),
            duty:'主唱/作词/作曲',
            name:'保罗麦卡特尼'
          },
          {
            src:require('../assets/team/george.jpg'),
            duty:'吉他',
            name:'约翰哈里森'
          },
          {
            src:require('../assets/team/ringo.jpg'),
            duty:'鼓手',
            name:'林戈斯塔尔'
          },
        ],
        adv: [
          {
            big: true, 
            src: require('../assets/mgwm.jpg'),
            duty: '专业证书',
            name: '高新技术企业'
          },
          {
            big: true,
            src: require('../assets/wlbf.jpg'),
            duty: '专业证书',
            name: '专利证书'
          },
        ],
        bgimage:{
          backgroundImage: 'url('+require('../assets/banner/paul-morris-286949.jpg')+')'
        }
      }
    }
}
</script>
<style scoped>
.aboutus-info{
  padding: 5% 10% 5% 10%;
  font-size: 20px;
  color: white;
}
.aboutus-background{
  height: 600px;
  background-image: url('../assets/banner/paul-morris-286949.jpg');
  background-size: cover;
}
.aboutus-title{
  /* margin: 0px 300px 400px 300px; */
  padding: 60px 100px 60px 100px;
  color: white;

}
.team {
  display: flex;
  justify-content: flex-start;
  margin: 5% 10%;
  padding-bottom: 100px;
}
.team-title{
  margin-right: 5%;
  max-width: 100%;
  min-width: 180px;
  background-color: #f5f5f5;
  border-radius: 5px
}
.team-title p{
  color: rgb(165, 165, 165);
}
.team-mem{
  display: flex;
  font-size: 20px;
  flex: 1 1 auto
}
.mem-content{
  overflow: hidden;
  transition: all 1s ease;
}
.bigcontent{
  width: 500px;
}
.mem-content img{
  width: 100%;
}
.mem-img{
  position: relative;
  height: 100%;
  overflow: hidden;
}
.mem-cover{
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  height: 100%;
  background-color:rgba(255, 255, 255, 0.8);
  transition: all 0.5s ease
}
.mem-info{
  position: absolute;
  padding: 90% 0 0 10%;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s ease
}
.biginfo{
  padding: 40% 0 0 10% !important;
}
.mem-info p{
  font-size: 16px;
}
.mem-img:hover .mem-cover{
  width: 100%;
}
.mem-img:hover .mem-info{
  opacity: 1;
}
 @media screen and (min-width:360px) and (max-width:430px){
   #bigcontent{
     width: 100%;
   }
  .team {
    display: flex;
    flex-wrap:wrap;
    margin: 0% 10px;
    padding-bottom: 100px;
  }
  .team-title{
    width: 100%;
    margin: 5% 0
  }
  .mem-content{
    width: 50%;
    height: 250px
  }

  .team-mem{
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 5px
  }
 }
</style>
