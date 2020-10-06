<template>
  <!--  <link rel="stylesheet" href="../css/common.css">-->
  <div id="wrap">
    <div style="width: 100%">
      <topBox :is-cart="true" :is-menu="true" :title="null" />
      <!--이미지 슬라이드로 처리하기-->
      <carousel
        :per-page="1"
        :autoplay="true"
        :loop="true"
        :autoplayTimeout="1200"
      >
        <slide>
          <img src="/static/main_sample_img_01.png" />
        </slide>
        <slide>
          <img src="/static/main_sample_img_01.png" />
        </slide>
        <slide>
          <img src="/static/main_sample_img_01.png" />
        </slide>
      </carousel>

      <!-- menuBar show div -->
      <div id="menuDiv" v-if="icon_menu">
        <div
          style="
            margin-top: 38px;
            display: flex;
            justify-content: space-between;
          "
        >
          <img
            style="margin-left: 16px; height: 26px"
            src="static/logo_top.png"
          />
          <div style="margin-right: 16px; width: 24px; height: 24px">
            <!--닫기 버튼 -->
            <img @click="doClose()" src="static/ico_close.png" />
          </div>
        </div>

        <!-- 2nd market/intro -->
        <div style="padding: 0 10px; margin-top: 18px">
          <div class="div_title">
            <div style="display: flex; align-items: center">
              <img style="margin-left: 15px" src="static/ico_market.png" /><span
                style="margin-left: 10px; font-size: 16px; color: #333333"
                >마켓</span
              >
            </div>
            <div @click="showHidedMenu()" style="display: flex; align-items: center">
              <img style="margin-right: 16px" src="static/ico_chevron_down.png" />
            </div>
          </div><!--마켓 div 끝-->
          <!-- 마켓 div 클릭했을 때 나오는 드롭바 -->
          <div v-if="isDown!=false" style="margin-top: 10px; font-size: 14px; color: #333333; text-align: left; display: flex;">
            <div v-for="eachBreed in breedList" style="width: 140px; height: 40px; display: flex; align-items: center"><span style="margin-left: 16px">{{ eachBreed.breed }}</span></div>


          </div>

          <!--소개 div 시작 -->
          <div class="div_title" style="margin-top: 12px">
            <div style="display: flex; align-items: center">
              <img style="margin-left: 15px" src="static/ico_introduce.png" /><span
                style="margin-left: 10px; font-size: 16px; color: #333333"
                >소개</span
              >
            </div>
            <div @click="showHidedMenu()" style="display: flex; align-items: center">
              <img :class="{icon_down : this.isDown===true, icon_up : this.isDown===false}" style="margin-right: 16px"/>
            </div>
          </div><!-- 소개 div 끝 -->
          <!-- 소개 div 클릭했을 때 나오는 드롭바 -->
          <div v-if="isDown!=false" style="margin-top: 10px; font-size: 14px; color: #333333; text-align: left; display: flex;">
            <div v-for="eachBreed in breedList" style="width: 140px; height: 40px; display: flex; align-items: center"><span style="margin-left: 16px">{{ eachBreed.breed }}</span></div>


          </div>

        </div>
        <!-- 3rd 주문조회~카카오톡 문의-->
        <div style="padding: 0 10px; text-align: left">
          <div style="border-bottom: 0.5px solid #e1e1e1; margin: 16px 0"></div>
          <div class="menu_subTitle"><span style="margin-left: 16px">주문조회</span></div>
          <div class="menu_subTitle"><span style="margin-left: 16px">배송안내</span></div>
          <div class="menu_subTitle"><span style="margin-left: 16px">대량주문 문의</span></div>
          <div class="menu_subTitle"><span style="margin-left: 16px">자주 묻는 질문</span></div>
          <div class="menu_subTitle"><span style="margin-left: 16px">카카오톡 문의</span></div>

        </div>
      </div>

      <!-- title 별별귤팜~~~~골라보세요-->
      <div style="margin: 0; padding: 0 24px">
        <div
          class="flex-ali-jus"
          style="
            width: 62px;
            height: 22px;
            background-color: #6bb555;
            border-radius: 12px 12px 12px 0px;
            color: #ffffff;
            font-size: 12px;
          "
        >
          별별귤팜
        </div>
        <div
          style="
            margin-top: 8px;
            height: 65px;
            color: #333333;
            font-size: 22px;
            text-align: left;
          "
        >
          제주도 10개 농장의 귤을<br />
          직접 골라보세요!
        </div>
      </div>
      <div style="display: flex; padding: 20px 8px">
        <div style="width: 62px; margin: 0 12px" v-for="eachBreed in breed">
          <img
            style="
              width: 62px;
              height: 62px;
              background-color: #f7f7f7;
              border-radius: 42px;
            "
            :src="breedList.img"
          />
          <div style="text-align: center; height: 20px; font-size: 14px">
            {{ eachBreed.typeName }}
          </div>
        </div>
      </div>

      <!--best farm -->
      <div
        class="bestFarm_div"
        style="
          margin-left: 20px;
          text-align: left;
          font-size: 18px;
          color: #333333;
        "
      >
        이번주 베스트 농장은?
      </div>
      <!-- best farm v-for div-->
      <div style="display: flex; padding: 0px 11px; overflow: auto">
        <div
          style="margin: 6px 6px 19px 6px; font-size: 14px"
          v-for="eachFarm in farm"
        >
          <img
            style="width: 157px; height: 138px; border-radius: 4px"
            :src="eachFarm.img"
          />

          <!-- 베스트 농장 이미지 하단 text영역-->
          <div
            style="
              width: 140px;
              text-align: left;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            "
          >
            {{ eachFarm.farmZipAddress }}<br />
            {{ eachFarm.farmOwner }}
          </div>
          <div
            style="
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              width: 157px;
              height: 40px;
              line-height: 20px;
              color: #666666;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            "
          >
            {{ eachFarm.farmDescription }}
          </div>
        </div>
      </div>
      <!-- 베스트 농장 끝 -->

      <!-- 상큼한 한라봉 시작-->
      <div class="banner_div" style="display: flex">
        <div>
          <div class="p18" style="text-align: left; margin-left: 20px">
            상큼한 한라봉
          </div>
          <div style="padding: 8px 16px 16px 16px">
            <img src="static/card_sample.png" />
          </div>
        </div>

        <div>
          <div class="p18" style="text-align: left; margin-left: 20px">
            새콤한 한라봉
          </div>
          <div style="padding: 8px 16px 16px 16px">
            <img src="static/card_sample.png" />
          </div>
        </div>
      </div>
      <!--상큼한 한라봉 끝-->

      <!--이번주 베스트 상품 시작 -->
      <div class="p18" style="text-align: left; margin-left: 20px">
        이번주 베스트 상품
      </div>
      <div style="margin: 10px 0 0 0; padding: 0 0 0 14px; display: flex">
        <div
          class="flex-ali-jus"
          style="
            display: flex;
            height: 32px;
            width: 58px;
            margin-right: 6px;
            border-radius: 16px;
            border: 1px solid #e1e1e1;
            font-size: 14px;
            color: #333333;
          "
          v-for="bestItem in breedList"
        >
          {{ bestItem.breed }}
        </div>
      </div>
      <div style="padding: 16px">
        <div
          style="display: flex; width: 260px; height: 248px; margin-right: 10px"
          v-for="eachBreed in weeklyBest"
        >
          <div style="margin-right: 10px" v-for="data in eachBreed.list">
            <div style="width: 260px; height: 160px">
              <img style="width: 100%; height: 100%" :src="data.img" />
            </div>
            <!-- 이번주 베스트 상품 이미지 하단 text영역 -->
            <div
              style="
                padding: 0 4px;
                margin: 10px 0 0 0;
                text-align: left;
                color: #333333;
              "
            >
              <p style="font-size: 12px; color: #999999">{{ data.sort }}</p>
              <p style="font-size: 18px">{{ data.product }}</p>
              <span
                style="margin-top: 4px; font-size: 20px; font-weight: bold"
                >{{ data.price.toLocaleString() }}</span
              ><span>원~</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 이번주 베스트 상품 끝 -->

      <!-- 대량주문 문의 시작-->
      <div
        style="
          margin-top: 8px;
          padding: 17px 16px;
          background-color: #f7f7f7;
          text-align: left;
        "
      >
        <p style="font-size: 14px; color: #333333">대량주문 문의 ></p>
        <span style="font-size: 12px; color: #666666">
          카페, 학교, 종교단체, 가족에게 저렴한 가격에 주문하세요.</span
        >
      </div>

      <!-- footer -->
      <footer style="text-align: left; background: #333333; font-size: 10px">
        <div class="footer_p">
          <p>
            상호명 : 귤팜<br />
            사업자번호 : 00-000-0000<br />
            통신판매업신고번호 : 2020-000000-00-0-0000<br />
            사업자정보확인 : ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ<br />
            주소 : 제주특별자치도 제주시 ㅇㅇㅇ 000(0000)
          </p>
          <p style="margin-top: 8px">
            귤팜은 통신판매중개자이며 통신판매의 당사자가 아닙니다.<br />
            따라서 귤팜은 상품거래정보 및 거래에 대하여 책임을 지지 않습니다.
          </p>
        </div>
        <div
          class="flex-ali-jus"
          style="display: flex; border-top: 0.5px solid #999999"
        >
          <ul>
            <li><a href="">이용약관</a></li>
            <li><a href="">개인정보처리방침</a></li>
            <li><a href="">카카오톡 문의</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";
import { BREED_LIST } from "./url";
import { FARM_LIST } from "./url";

export default {
  name: "Main",

  components: {
    Carousel,
    Slide,
  },
  methods : {

    showMenu() {
      this.icon_menu = true;
      console.log("메뉴버튼클릭");
    },
    showHidedMenu () {
      this.isDown = !this.isDown;
    },

    doClose () {
      this.icon_menu = false;
    }
  },
  data() {
    return {
      /**/
      icon_menu : false,
      isDown : false,
      farm: [],
      breed: [],
      breedList: [
        { breed: "전체보기", img: "../static/main_btn_01.png" },
        { breed: "한라봉", img: "/static/main_btn_03.png" },
        { breed: "천혜향", img: "/static/main_btn_05.png" },
        // { breed: "오렌지", img: "/static/main_btn_04.png" },
        // { breed: "황금향", img: "/static/main_btn_04.png" },
      ],
      farmInfo: [
        {
          addr: "신례리, 서귀포시",
          owner: "정민규",
          img: "static/farm_01.png",
          intro:
            "GAP인증을 받고 꾸준히 맛있는 귤을 연구하는 농장입니다. 신례리 서귀포시에 있으며, 유기농이라는 농장주의 철학이 소비자를 안심하게 합니다.",
        },
        {
          addr: "남원읍, 서귀포시",
          owner: "김민수",
          img: "static/farm_02.png",
          intro:
            "GAP인증을 받고 꾸준히 맛있는 귤을 연구하는 농장입니다. 신례리 서귀포시에 있으며, 유기농이라는 농장주의 철학이 소비자를 안심하게 합니다.",
        },
        {
          addr: "애월읍, 서귀포시",
          owner: "양지은",
          img: "static/farm_03.png",
          intro:
            "GAP인증을 받고 꾸준히 맛있는 귤을 연구하는 농장입니다. 신례리 서귀포시에 있으며, 유기농이라는 농장주의 철학이 소비자를 안심하게 합니다.",
        },
        {
          addr: "신례리, 서귀포시",
          owner: "정유리",
          img: "static/farm_04.png",
          intro:
            "GAP인증을 받고 꾸준히 맛있는 귤을 연구하는 농장입니다. 신례리 서귀포시에 있으며, 유기농이라는 농장주의 철학이 소비자를 안심하게 합니다.",
        },
        {
          addr: "남원읍, 서귀포시",
          owner: "함지영",
          img: "static/farm_01.png",
          intro:
            "GAP인증을 받고 꾸준히 맛있는 귤을 연구하는 농장입니다. 신례리 서귀포시에 있으며, 유기농이라는 농장주의 철학이 소비자를 안심하게 합니다.",
        },
        {
          addr: "남원읍, 서귀포시",
          owner: "캥거루",
          img: "static/farm_02.png",
          intro:
            "GAP인증을 받고 꾸준히 맛있는 귤을 연구하는 농장입니다. 신례리 서귀포시에 있으며, 유기농이라는 농장주의 철학이 소비자를 안심하게 합니다.",
        },
        {
          addr: "신례리, 서귀포시",
          owner: "댕댕이",
          img: "static/farm_03.png",
          intro:
            "GAP인증을 받고 꾸준히 맛있는 귤을 연구하는 농장입니다. 신례리 서귀포시에 있으며, 유기농이라는 농장주의 철학이 소비자를 안심하게 합니다.",
        },
      ],

      weeklyBest: [
        {
          breed: "한라봉",
          list: [
            {
              sort: "소과 중과 대과",
              product: "고당도 한라봉 5kg",
              price: 16000,
              img: "static/rbf.jpg",
            },
            {
              sort: "소과",
              product: "상큼하고 맛있는 한라봉",
              price: 22000,
              img: "static/rbf.jpg",
            },
            {
              sort: "중과",
              product: "새콤달콤 온가족 한라봉",
              price: 29000,
              img: "static/rbf.jpg",
            },
          ],
        },
      ],
    };
  },
  created: function () {
    let vue = this;
    axios
      .get(BREED_LIST)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          vue.breed = result.data.content;
          console.log("breed에 들어있는 값:" + vue.breed[0].typeName);
        }
      })
      .catch((error) => {
        alert(error);
      }),
      axios
        .get(FARM_LIST)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            vue.farm = res.data.content;
          }
        })
        .catch((err) => {
          alert(err);
        });
  },
};
</script>

<style scoped>
ul {
  display: flex;
}

li {
  list-style: none;
  margin-right: 16px;
}

li a {
  text-decoration: none;
  /*margin-right: 10px;*/
  color: #999999;
}

li:after {
  border: #ffffff;
}

.icon_down{
  background-image: url("/static/ico_chevron_down.png");

}
.icon_up {
  background-image: url("/static/ico_chevron_up.png");
}

/* 뷰포트가 768이하인 경우에만 해당 css 적용하기 */
@media screen and (min-width: 768px) {
  .banner_div,
  bestFarm_div {
    width: 50%;
  }
}

div {
  margin: 0;
  padding: 0;
}

p,
span {
  margin: 0;
  padding: 0;
}

/*span {*/
/*  display: inline-block;*/
/*}*/

*::before,
*::after {
  box-sizing: border-box;
  vertical-align: baseline;
}

#wrap {
  display: flex;
  align-items: center;
  /*flex-direction: column;*/
  height: 100%;
  width: 100%;
}
/* 메뉴팝업 css */
#menuDiv {
  z-index: 9999;
  width: 300px;
  height: 760px;
  background-color: #ffffff;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid #e1e1e1;
}

/* menu market div css */
.div_title {
  z-index: 2;
  width: 280px;
  height: 54px;
  background-color: rgba(255, 146, 29, 0.06);
  border-radius: 4px;
  /*opacity: 0.06;*/
  display: flex;
  justify-content: space-between;
}
/* menu 주문조회 div css */
.menu_subTitle {
  width: 280px; height: 40px;
  text-align: left;
  color: #333333;
  font-size: 14px;

}


/* 가로 세로 중앙 정렬 */
.flex-ali-jus {
  display: flex;
  justify-content: center;
  align-items: center;
}

breedList .title_img {
  height: 100%;
}

.p18 {
  font-size: 18px;
}

.p14 {
  font-size: 14px;
}

.footer_p {
  padding: 24px;
  color: #999999;
}
</style>
