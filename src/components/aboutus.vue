<template>
<div class="aboutus">
  <div class="aboutus-background">
    <div class="aboutus-title">
      <h1>关于我们</h1>
   </div>
    <div class="aboutus-info">
      成都红云鼎科技有限公司是一家创新型高新技术企业，
        依托深厚的通信、计算机信息行业经验，扎实的技术，先进的理念，以客户需求为导向，
        植根于行业应用的大数据，将信息科学与工程实际相结合，为客户提供业界领先的物联网应用解决方案
    </div>
  </div>
  <msections>   
    <h2 slot="sections-title">为什么选择红云鼎？</h2>
  </msections>
    <div class="about-cat-details">
      <card v-for="(item, index) in cards" :key="index" :hasPic="hasPic">
        <img :src="cards[index].url" alt="error" slot="card-img">
        <span slot="card-title">
          {{ cards[index].title }}
        </span>
        <p slot="card-text">
          {{ cards[index].text }}
        </p>
      </card>
    </div>
</div>  
</template>
<script>
import card from './card'
import msections from './msections'
export default {
  name: 'about',
  components: {
    card,
    msections
  },
  data() {
    return {
        hasPic: true,
        cards: [
          {
            title: '我们的团队',
            text: '我们是一支具有丰富行业经验和创新精神的团队，公司主创人员来自华为和国内著名高校，现有博士2名，'+
              '中青年梯队合理。凭借主创人员多年大型国企和跨国公司的工作经验与项目操作经验，'+
             '在ICT信息与通信技术领域的深度理解和前瞻性，围绕物联网技术在工业领域的交叉应用，'+
              '大数据分析、工业智能在专业领域进行纵深研究，不断开拓进取，全心全意为客户服务。',
            url:require('../assets/rawpixel-com-250087.jpg')
          },
          {
            title: '我们的使命',
            text: '竭诚服务于项目开发商、投资商，工程承包商、建筑方，全心助力客户面向工业4.0转型，并推动企业和行业向数字化、信息化、智能化发展。',
            url: require('../assets/nasa-53884.jpg')
          },
          {
            title: '我们的优势',
            text: '既可提供全方位一站式的系统方案和服务，也可有针对性的定制解决方案或升级改造，'+
            '以“价值、创新”为导向，帮助客户成就最大化的商业价值。',
            url:require('../assets/helloquence-61189.jpg')
          },
          {
            title:'我们的专利',
            text:'',
            url:require('../assets/wlbf.jpg')
          },
          {
            title:'我们的认证',
            text:'',
            url:require('../assets/mgwm.jpg')
          }
        ]
      }
    }
}
</script>
<style scoped>

.aboutus-info{
  padding: 60px 100px 60px 100px;
  font-size: 20px;
  color: white;
}
.aboutus-background{
  height: 600px;
  background-image: url('../assets/mo.jpg');
  background-size: cover;
}
.aboutus-title{
  /* margin: 0px 300px 400px 300px; */
  padding: 60px 100px 60px 100px;
  color: white;

}

.about-cat-details {
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    margin: 0% 20%;
    padding-bottom: 100px;
}

</style>
