<template>
  <div class="slide-position"> 
    <div class="slide-cover" @mouseover="clearInv" @mouseout="runInv" 
        :class="{  slidecolumn: slide[nowIndex].col }">
        <img class="fadeInLeft wow data-wow-delay=' .1s'"
            :class="{ columnImg: slide[nowIndex].col, rowImg: !slide[nowIndex].col}" 
            :v-if="isShow" :src="slide[nowIndex].src" alt="error">
        <img class="fadeInRight wow data-wow-delay=' .1s'"
            v-if="!isShow" 
            :src="slide[nowIndex].src">
        <div class=" wow fadeIn data-wow-delay='.6s'"
            :class="{columnText: slide[nowIndex].col, rowText: !slide[nowIndex].col}">
          <h3>{{ slide[nowIndex].title }}</h3>
          <p>{{ slide[nowIndex].text }}</p>
        </div>
        <div @click="goto(prevIndex)" class="slider-btn" id="btn-left">&lt;</div>
        <div @click="goto(nextIndex)" class="slider-btn" id="btn-right">&gt;</div>   
    </div>
  <div class="slide-pages-position">
    <div class="slide-pages">
      <ul>
        <li v-for="(item, index) in slide"  @click="goto(index)" :key="index">
          <div class="slide-dots-icon" :class="{on: index === nowIndex}"></div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'slider',
  data() {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  props: {
    slide: {
      type:Array
    },
      inv: {
      type: Number,
      default: 6000
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slide.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slide.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>
<style scoped>
h3{display: block}
p{display: block}
.slide-position{
  margin: 0% 10% 0% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 1 auto
}
.slide-cover{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5%;
  padding: 0 50px;
  height: 50%;
  width: 1000px
}
 .slider-btn{
    position: absolute;
    padding: 20px 10px;
    border-radius: 5px;
    top: 35%;
    cursor: pointer;
    color: white;
    background-color: rgba(128, 128, 128, 0.5);
    text-align: center;
    font-size: 150%;
    transition: all 0.5s ease
}
.slider-btn:hover{
  background-color: black;
}
.slidecolumn{
  flex-direction: column;
  align-items: center;
  width: 1000px;
  height: 600px;
}
.columnImg{
  width: 80%;
  height: 50%
}

.rowImg{
  width: 40%;
  height: 40%
}
.columnText{
  margin-top: 10% 
}
.rowText{
  width: 400px;
  margin-left: 10%
}
#btn-left{
  left: 0;
}
#btn-right{
  right: 0
}

/* .slide-trans-enter-active {
  transition: all .5s;
}

.slide-trans-enter {
  transform: translateX(900px);
}

.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
} */

.slide-pages-position {
  display: flex;
  justify-content: center;
  margin-bottom:20%; 
}

.slide-pages li {
  display: block;
  float: left;
  padding: 0 10px;
  cursor: pointer;
  color: black;
}
.slide-dots-icon{
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: rgba(0, 2, 2,0.2)
}

.slide-pages .on {
  background-color: red
}
 @media screen and (min-width:360px) and (max-width:430px){
  .slide-cover{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 550px;
  }
  .slidecolumn{
    padding-top: 100px;
    width: 330px;
  }
  .rowImg {
    width: 100%;
    height: 70%;
  }
  .columnImg {
    width: 100%;
    height: 30%;
  }
  .rowText{
    width: 200px;
    height: 60px;
  }
 }
 @media screen and (min-width:768px) and (max-width:1024px){
    .slide-cover{
      flex-direction: column;
      align-items: center
  }
  .slidecolumn{
  flex-direction: column;
  align-items: center;
  width: 900px;
  height: 500px;
}
 }
</style>
