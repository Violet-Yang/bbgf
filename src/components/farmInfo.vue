<template>
  <div id="wrap">
    <topBox :is-back="true" :title="'농장소개'" />
    <div class="mainImg">
      <img
        style="width: 100%; height: 100%"
        src="static/main_sample_img_01.png"
      />
    </div>
    <div class="title_css">
      <p style="color: #333333; height: 29px; font-size: 20px">토평 정민규네</p>
      <p style="margin-top: 4px; height: 20px; color: #666666; font-size: 14px">
        신례리, 서귀포시
      </p>
      <div class="tagList">
        <span
          style="display: inline-block"
          class="eachTagCss"
          v-for="list in tag"
          >#{{ list }}</span
        >
      </div>
      <div style="border-bottom: solid 1px #999999"></div>
    </div>

    <!-- 2nd div -->
  </div>
</template>

<script>
import { Carousel } from "vue-carousel";
export default {
  name: "farmInfo",
  data() {
    return {
      tag: [
        "한라봉",
        "감귤",
        "천혜향",
        "농장소개",
        "제주도 낙원읍",
        "2줄일경우",
        "예시입니다",
      ],
    };
  },
  components: { Carousel },
};
</script>

<style scoped>
@media screen and (min-width: 360px) {
  #wrap {
  }
}

@media screen and (max-width: 361px) {
}

p {
  margin: 0;
  padding: 0;
}

.mainImg {
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 24px 0px;
}

.title_css {
  padding: 16px;
  margin-top: 20px;
  text-align: left;
}

.tagList {
  /*display: flex;*/
  /*display: inline-block;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  margin-top: 20px;
}

.eachTagCss {
  padding: 4px 8px;
  color: #999999;
  margin-right: 6px;
  margin-bottom: 6px;
  font-size: 14px;
  border: 1px solid #f7f7f7;
  border-radius: 2px;
  background-color: #f7f7f7;
}
</style>
