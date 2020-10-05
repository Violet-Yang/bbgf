<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Noto Sans KR";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

@font-face{
  font-family:"Noto Sans KR";
  src : url("/static/fonts/NotoSansKR-Regular.otf");
}

body {
  margin: 0 !important;
  font-family: "Noto Sans KR" !important;
}

div{
  margin: 0;
  padding: 0;
}


</style>
