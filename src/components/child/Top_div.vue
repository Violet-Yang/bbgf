<template>
  <div id="wrap_top" style="position: relative;">
    <div class="left flex-all-center" v-if="isBack!=null"><img src="/static/ico_right.png"> </div>
    <div class="left flex-all-center" v-if="isClose!=null"><img src="/static/ico_close.png"></div>
    <div class="left flex-all-center" v-if="isMenu!=null"><img src="/static/ico_menu.png"></div>
    <div class="center flex-all-center" v-if="title!=null" style="position: absolute; width: 100%; height: 100%">{{title}}</div>
    <div class="center flex-all-center" v-if="title===null" style="position: absolute; width: 100%; height: 100%"><img src="/static/logo_top.png"></div>
    <div class="right flex-all-center" v-if="isCart!=null"><img src="/static/ico_cart.png"> </div>

  </div>
</template>

<script>
export default {
  name: "Top_div",
  props : [ "isBack", "isClose", "title", "isCart", "isMenu"],
  data () {
    return {
      right : null

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
   box-shadow: 0px 1px 3px #00000029;
   opacity: 1;
 }

 .left {
   top: 24px;
   left: 0px;
   height: 56px;
   width: 56px;
   opacity: 1;
   font-size: 25px;
   font-family: 바탕;
 }

 .center {
   height: 56px;
   color: var(--unnamed-color-333333);
   text-align: center;
   font-size: 18px;
   font-family: HY신명조;
   letter-spacing: 0px;
   color: #333333;
   opacity: 1;
 }

 .right {
   height: 56px;
   width: 56px;
   opacity: 1;
 }
</style>
