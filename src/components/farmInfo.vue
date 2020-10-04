<template>
  <div id="wrap">
    <topBox :is-back="true" :title="'농장소개'" />
    <div class="mainImg">
      <img
        style="width: 100%; height: 240px"
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
      <div class="bottom_line"></div>
    </div>

    <!-- 2nd div -->
    <div style="padding-left: 16px; display: flex; font-size: 14px">
      <div class="flex-ali-jus">
        <div
          style="
            width: 5px;
            height: 5px;
            border: 2px solid #ff921d;
            border-radius: 50px;
          "
        ></div>
      </div>
      <span style="text-align: left; color: #333333; margin-left: 10px"
        >농장주</span
      ><span style="margin-left: 16px; color: #666666"> 정민규</span>
    </div>

    <div
      style="
        margin-top: 6px;
        padding-left: 16px;
        display: flex;
        font-size: 14px;
      "
    >
      <div class="flex-ali-jus">
        <div
          style="
            width: 5px;
            height: 5px;
            border: 2px solid #ff921d;
            border-radius: 50px;
          "
        ></div>
      </div>
      <span style="text-align: left; color: #333333; margin-left: 10px"
        >커리어</span
      ><span style="margin-left: 16px; color: #666666"> 13년</span>
    </div>

    <!-- 3nd div-->
    <div style="padding: 16px">
      <div class="top_line"></div>
      <p style="color: #666666; font-size: 13px">
        10년 동안 서귀포시 남원읍에서 할머니 할아버지 단 둘이 5,000평의 밭을
        가꾸어나가고 있어요. 밀감과 한라봉이 있어 10년 동안 서귀포시 남원읍에서
        할머니 할아버지 단 둘이 5,000평의 밭을 가꾸어나가고 있어요. 밀감과
        한라봉이 있어요.10년 동안 서귀포시 남원읍에서 할머 니 할아버지 단 둘이
        5,000평의 밭을 가꾸어나가고 있어요. 밀 감과 한라봉이 있어요.
      </p>
    </div>

    <!-- 4rd div-->
    <div style="padding: 0 16px">
      <div class="top_line"></div>
      <div style="display: flex">
        <div class="flex-ali-jus">
          <div
            style="
              width: 5px;
              height: 5px;
              border-radius: 50px;
              border: 2px solid #ff921d;
            "
          ></div>
        </div>
        <span style="margin-left: 10px; font-size: 16px; color: #333333"
          >이 농장만의 장점</span
        >
      </div>
      <div class="bottom_line"></div>
      <!-- 장점묶음 하나-->

      <div
        class="div_merit"
        style="display: flex; padding: 16px"
        v-for="box in merit"
      >
        <div class="flex-ali-jus">
          <img style="width: 20px; height: 20px" src="static/box.png" />
        </div>
        <p style="padding-left: 24px; font-size: 13px; color: #666666">
          {{ box }}
        </p>
      </div>
    </div>

    <!-- 5th div-->
    <div style="padding: 0 16px; margin-bottom: 78px">
      <div class="top_line"></div>
      <div style="display: flex">
        <div class="flex-ali-jus">
          <div
            style="
              width: 5px;
              height: 5px;
              border-radius: 50px;
              border: 2px solid #ff921d;
            "
          ></div>
        </div>
        <span style="margin-left: 10px; font-size: 16px; color: #333333"
          >판매상품 바로가기</span
        >
      </div>
      <div style="margin-top: 16px; display: flex" >
        <div style="position: relative; width: 140px; height: 221px; margin-right: 16px" v-for="item in items">
          <img style="width: 140px; height: 140px; border-radius: 10px" :src="item.img" />
          <p style="font-size: 14px; color: #333333;">{{item.title}}</p>
          <span style="position: absolute; top : 197px; font-size: 16px; font-weight: bold">{{item.price.toLocaleString()}}<span style="font-size: 14px; color: #333333; font-weight: normal">원~</span></span>
        </div>
        <!--end-->

      </div>


    </div>
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
      merit: [
        "10년 동안 서귀포시 남원읍에서 할머니 할아버지 단 둘이 5,000평의 밭을 가꾸어나가고 있어요.",
        "10년 동안 서귀포시 남원읍에서 할머니 할아버지 단 둘이 5,000평의 밭을 가꾸어나가고 있어요.",
      ],
      items: [
        { img: "../static/trans.jpg", title: "김민수귤", price: 12000 },
        { img: "../static/trans.jpg", title: "김민수귤", price: 12000 },
        { img: "../static/trans.jpg", title: "김민수귤", price: 12000 },
        {
          img: "../static/bbgpam1.png",
          title: "양지은한라봉입니다 2줄일경우",
          price: 12000,
        },
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

p,
span {
  margin: 0;
  padding: 0;
  text-align: left;
}

.bottom_line {
  margin-top: 12px;
  border-bottom: solid 1px #e1e1e1;
}

.top_line {
  margin-bottom: 18px;
  border-top: solid 1px #e1e1e1;
}

.flex-ali-jus {
  display: flex;
  align-items: center;
  justify-content: center;
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
