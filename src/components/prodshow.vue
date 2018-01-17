<template> 
  <div class="producshow-text wow fadeIn data-wow-delay='.6s'">
    <h3>{{ productinfo.prodtitle }}</h3>
    <p>{{ productinfo.prodTxt }}</p>
  </div>
</template>
<script>
export default {
  name:'prodshow',
  props: {
    productinfo: {
        type:Object,
        default: function () {
        return
      }
    }
  }
} 
</script>
<style scoped>

.producshow-text{
  margin-left: 10%
  }

</style>
