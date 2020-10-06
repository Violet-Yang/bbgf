<template>
  <div id="wrap_top" style="position: relative;">
    <div class="left flex-all-center" v-if="isBack!=null"><img src="/static/ico_right.png"/> </div>
    <div class="left flex-all-center" v-if="isClose!=null"><img src="/static/ico_close.png"/></div>
    <div class="left flex-all-center"  @click="showMenu" v-if="isMenu!=null"><img src="/static/ico_menu.png"/></div>

    <div class="center flex-all-center" v-if="title!=null" style="position: absolute; width: 100%; height: 100%">{{title}}</div>
    <div class="center flex-all-center" v-if="title===null" style="width: 70%; height: 100%"><img src="/static/logo_top.png"></div>

    <div class="right flex-all-center" @click="goCart()" v-if="isCart!=null"><img src="/static/ico_cart.png"/> </div>

  </div>
</template>

<script>
export default {
  name: "Top_div",

  props : [ "isBack", "isClose", "title", "isCart", "isMenu"],
  methods : {
    showMenu(){
      this.$emit('ShowMenu')
    },

    goCart () {
      // this.$emit('goCart');
      this.$router.push({path: "/emptyCart"});
      console.log("타냐??");
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
/* 가로, 세로 중앙 정렬 */
.flex-all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

 #wrap_top {
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 56px;
   box-shadow: 0 1px 3px #00000029;
   opacity: 1;
 }

 .left {
   top: 24px;
   left: 0;
   height: 56px;
   width: 56px;
   opacity: 1;
   font-size: 25px;
 }

 .center {
   height: 56px;
   color: #333333;
   text-align: center;
   font-size: 18px;
   letter-spacing: 0;
   color: #333333;
   opacity: 1;
 }

 .right {
   height: 56px;
   width: 56px;
   opacity: 1;
 }
</style>
