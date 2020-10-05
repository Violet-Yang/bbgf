<template>
  <div>
    <top-box is-back="" :title="'품종소개'"></top-box>
    <div class="main_img">
      <img style="width: 100%; height: 100%" src="/static/peach.jpg" />
    </div>
    <!--below mainImg-->
    <div class="infoBreed">
      <!--for문 돌아가는 곳-->
      <span style="height: 29px; color: #333333; font-size: 20px"
        >breed title</span
      >
      <p style="margin-top: 8px; color: #666666; font-size: 13px">
        한라봉은 선물용으로 꾸준히 사랑받는 품종입니다. 보통 크기가 크면 맛이
        있다고 생각하지만 너무 물렁하지 않으며 한라봉 꼭지가 두툼한게 맛이
        있습니다.
      </p>
      <div class="border-bottom"></div>
      <!--level components-->
      <div class="level" style="display: inline-block; margin-right: 16px" v-for="eachLevel in orangeTypeRanges">
        <level-box :title="eachLevel.rangesName" :range="eachLevel.rangesValue"/>
<!--        <level-box style="position: absolute; top: 0; left: 0; z-index: 3" :range="eachLevel.rangesValue"/>-->
      </div>
      <div class="border-bottom"></div>

      <!-- 품종특징/ 수확시기 div 시작-->
      <div class="dot" style="margin-bottom: 6px">
        <div class="flex-ali-jus"><div class="dot_css"></div></div>
        <span style="margin-left: 10px; font-size: 14px">품좀특징</span>
      </div>
      <span style="margin-left: 20px; color: #666666; font-size: 14px"
        >천혜향 + 황금향 교배</span
      >
      <div class="dot" style="margin-top: 16px; margin-bottom: 6px">
        <div class="flex-ali-jus"><div class="dot_css"></div></div>
        <span style="margin-left: 10px; font-size: 14px">수확시기</span>
      </div>
      <span style="margin-left: 20px; color: #666666; font-size: 14px"
        >12월 ~ 3월</span
      >
      <div class="border-bottom"></div>
      <!--품종특징/ 수확시기 div끝-->

      <!--귤팜추천 -->
      <div>
        <div class="recom_css">귤팜추천</div>
        <p style="margin-top: 4px; font-size: 16px; color: #333333">
          어떤 귤을 골라야 할까요?
        </p>
        <!-- 추천img,text -->
        <div class="div_recomandation" style="margin-top: 24px;">
          <!--추천 1st div-->
          <div class="div_1" style="display: inline-block; margin-right: 24px;">
            <img
              style="width: 328px; height: 160px;"
              src="static/sample_img_03.png"
            />
            <p style="margin-top: 16px; font-size: 14px; color: #333333">
              집에서 편하게 먹기 좋은
            </p>
            <div style="width: 328px">
              <span style="margin-top: 8px; font-size: 13px; color: #666666"
                >제주도 현지 농장주들이 집에서 먹는 한라봉이에요. 생김새는 조금
                모날 수 있지만 맛은 보장할 수 있어요.</span
              >
            </div>
          </div>
          <!--추천 2nd div-->
          <div class="div_2" style="display: inline-block">
            <img
              style="width: 328px; height: 160px"
              src="static/sample_img_04.png"
            />
            <p style="margin-top: 16px; font-size: 14px; color: #333333">
              부모님께 선물하기 좋은
            </p>
            <div style="width: 328px">
              <span
                style="
                  margin-top: 8px;
                  font-size: 13px;
                  color: #666666;
                  display: inline-block;
                "
                >박스를 열었을 때 한라봉 하나하나에 포장되어 있는 모습을 발견할
                수 있어요. 정성스레 농장주가 직접 포장한 한라봉은 선별도
                까다롭기에 맛도 모양도 최고에요.</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="border-bottom"></div>
      <!-- 판매상품 바로가기 -->
      <div class="dot" style="margin-bottom: 6px">
        <div class="flex-ali-jus"><div class="dot_css"></div></div>
        <span style="margin-left: 10px; font-size: 16px"
          >판매상품 바로 가기</span
        >
      </div>
      <div style="margin-top: 16px; margin-bottom: 32px; display: flex">
        <div
          style="
            position: relative;
            width: 140px;
            height: 221px;
            margin-right: 16px;
          "
          v-for="item in items"
        >
          <img
            style="width: 140px; height: 140px; border-radius: 10px"
            :src="item.img"
          />
          <p style="font-size: 14px; color: #333333">{{ item.title }}</p>
          <span
            style="
              position: absolute;
              top: 197px;
              left: 67px;
              font-size: 16px;
              font-weight: bold;
            "
            >{{ item.price.toLocaleString()
            }}<span style="font-size: 14px; color: #333333; font-weight: normal"
              >원~</span
            ></span
          >
        </div>
        <!--end-->
      </div>
      <!--end -->
    </div>
  </div>
</template>

<script>
import ComCss from "../css/common.css";
import { BREED_LIST } from "./url";
import axios from "axios";
export default {
  name: "Breed",
  components: { ComCss },
  data() {
    return {
      orangeTypeRanges : [
        {id : 9, rangesName : "과즙", rangesValue : 3.0},
        {id : 10, rangesName : "향의 세기", rangesValue : 4.0},
        {id : 11, rangesName : "단맛", rangesValue : 5.0},
        {id : 12, rangesName : "까기 쉬운정도", rangesValue : 1.0}
      ],

      items: [
        { img: "../static/bbgpam3.png", title: "김민수귤", price: 12000 },
        {
          img: "../static/bbgpam3.png",
          title: "판매상품 이름이 2줄일 경우 귤",
          price: 12000,
        },
        { img: "../static/bbgpam3.png", title: "김민수귤", price: 12000 },
      ],
    };
  },
  created() {
    axios
      .get(BREED_LIST/4)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        // alert(error);
      });
  },
};
</script>

<style scoped>
p,
span {
  margin: 0;
  padding: 0;
}

.recom_css {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 22px;
  background-color: #6bb555;
  border-radius: 12px 12px 12px 0px;
  font-size: 12px;
  color: #ffffff;
}

.main_img {
  width: 360px;
  height: 240px;
}

.infoBreed {
  padding: 0 16px;
  margin: 20px 0;
  text-align: left;
  min-width: 298px;
}

.dot {
  display: flex;

  font-size: 14px;
}

.dot_css {
  width: 5px;
  height: 5px;
  border: 2px solid #ff921d;
  border-radius: 50px;
}

@media screen and (max-width: 360px) {
  .div_2 {
    margin-top: 32px ;
  }
  .level {
    margin-bottom: 18px;
  }
}

@media screen and (min-width: 720px) {
  .div_2 {
    margin-top: 0;
  }
  .level {
    margin-bottom: 0;
  }
}
</style>
