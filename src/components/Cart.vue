<template>
  <div class="container" style="display: flex; align-items: center; justify-content: center;">
  <div class="wrap_box">
    <div
      style="display: flex; justify-content: center; align-items: center;"
      class="top_box"
    >
      <div
        style="
          left: 0;
          display: flex;
          justify-content: center;
          align-content: center;
          width: 56px;
          height: 56px;
        "
      >
        <button><p class="big_del" @click="goback()">X</p></button>
      </div>
      <p class="top_title">장바구니</p>
    </div>
    <div class="content2">
    <div class="mid_box">
      <div
        style="display: flex; height: 53px; border-bottom: 1px solid #f0f0f0;"
      >
        <input
          type="checkbox"
          v-model="chkModel"
          @click="allChk()"
          style="margin-top: 20px; margin-left: 16px;"
          class="chk_box"
        />
        <p
          style="
            display: flex;
            margin-top: 20px;
            margin-left: 8px;
            text-align: left;
            font: normal normal normal 13px/20px Noto Sans KR;
            letter-spacing: 0px;
            color: #666666;
          "
        >
          전체선택 ({{ countNum }}/{{ array_list.length }})
        </p>
      </div>

      <div :class="{list_box_last: array_list.length-1===index, list_box : array_list.length-1!==index }" v-for="(list, index) in array_list">
        <div style="width: 20px; height: 20px; margin-left: 16px;">
          <input type="checkbox" v-model="list.status" />
        </div>
        <div class="img_box">
          <img style="width: 100%; height: 100%;" :src="'../assets/' + list.img" />
        </div>
        <div class="next_img_box">
          <div style="text-align: left; color: #666666; font-size: 12px;">
            {{ list.farm }}
          </div>
          <div style="text-align: left; color: #333333; font-size: 14px;">
            {{ list.product }}
          </div>
          <div
            style="
              text-align: left;
              color: #333333;
              font-size: 13px;
              margin-top: 4px;
            "
          >
            {{ list.sort }}
          </div>
          <div
            style="
              display: flex !important;
              align-items: center;
              justify-content: space-between;
              margin-top: 10px;
            "
          >
            <div
              style="
                width: 94px;
                height: 28px;
                background-color: #ffffff;
                border: 1px solid #dddddd;
              "
            >
              {{ list.count }}박스
            </div>
            <div
              style="
                width: 65px;
                height: 24px;
                text-align: right;
                font-size: 16px;
                color: #333333;
              "
            >
              {{ list.price }}원
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="bill_box">
        <div
          style="
            text-align: left;
            flex-direction: column;
            margin-left: 16px;
            margin-top: 16px;
            font-size: 14px;
          "
        >
          <span style="color: #333333;">총 주문상품</span>
          <div style="margin-top: 8px; color: #f24147;">총 결제금액</div>
        </div>
        <div style="text-align: right; margin-right: 16px; margin-top: 16px;">
          <span style="font-size: 14px; font-weight: normal; color: #333333;"
            >{{totalBox}}박스</span
          >
          <div
            style="
              margin-top: 8px;
              font-size: 18px;
              font-weight: bold;
              color: #f24147;
            "
          >
            {{ totalPrice }} 원
          </div>
        </div>
      </div>
    </div>
    </div>
      <div class="purchase_box">
        <button
          :disabled="!computing"
          :class="{ gray_box: !computing }"
          style="width: 100%; height: 100%;">
          <p style="font-size: 14px; color: #ffffff; opacity: 1;">주문하기</p>
        </button>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      chkModel: false,
      count: 0,
      totalWon: 0,
      array_list: [
        {
          farm: "민수네 한라봉",
          product: "민수 배만큼 큰 한라봉 5kg",
          sort: "대과 10~20개",
          count: 2,
          price: 35000,
          img: "logo.jpg",
          status: false,
        },
        {
          farm: "지은이네 한라봉",
          product: "아주아주 맛있는 한라봉 5kg",
          sort: "중과 15~20개",
          count: 1,
          price: 38000,
          status: false,
        },
        {
          farm: "유리네 한라봉",
          product: "새콤달콤 한라봉 5kg",
          sort: "소과 20~30개",
          count: 3,
          price: 30000,
          status: false,
        },
        {
          farm: "지영이네 한라봉",
          product: "숨겨두고 몰래 먹는 한라봉 3kg",
          sort: "소과 7~15개",
          count: 2,
          price: 23000,
          status: false,
        },
        {
          farm: "댕댕이네 한라봉",
          product: "애월읍 최고 한라봉 5kg",
          sort: "대과 10~15개",
          count: 1,
          price: 40000,
          status: false,
        },
      ],
    };
  },
  computed: {
    computing: function () {
      return this.array_list.filter((data) => data.status).length > 0;
    },
    countNum: function () {
      return this.array_list.filter((data) => data.status).length;
    },
    totalBox : function () {
      let box = 0;
      this.array_list
        .filter((data) => data.status)
        .forEach(function (element) {
          box += element.count;

        });
      return box;
    },
    totalPrice: function () {
      let price = 0;
      this.array_list
        .filter((data) => data.status)
        .forEach(function (element) {
          price += element.count * element.price;
        });
      return price;
    },
  },
  methods: {
    allChk() {
      //전체선택 클릭했을 때;
      let vue = this;
      this.array_list.forEach(function (element) {
        element.status = !vue.chkModel;
      });
    },
    goback() {
      //좌측 상단 x클릭했을 때;
      history.go(-1);
    },
  },
};
</script>

<style scoped>
/* wrap div css*/
.wrap_box {
  top: 0px;
  left: 0px;
  width: 360px;
  background-color: #f7f7f7;
}
button {
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
}
/* 상위영역 div css */
.top_box {
  top: 24px;
  left: 0px;
  width: 360px;
  height: 56px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000029;
  opacity: 1;
  display: flex !important;
  justify-content: space-between;
}

/* 중간영역 css */
.mid_box {
  position: relative;
  left: 0px;
  width: 360px;
  /*height: 371px;*/
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  opacity: 1;
}

/* 배열값 for문 도는 div css */
.list_box {
  margin-top: 14px;
  top: 147px;
  width: 328px;
  height: 145px;
  opacity: 1;
  border-bottom: 1px solid #f0f0f0;
}

.list_box_last {
  margin-top: 14px;
  top: 147px;
  width: 328px;
  height: 145px;
  opacity: 1;
  border-bottom: none;
}

/* 이미지 css */
.img_box {
  position: absolute;
  margin-top: 8px;
  /* top: 97px; */
  left: 16px;
  display: flex;
  width: 94px;
  height: 94px;
  background-color: #ff921d;
}
/* 이미지box옆 폰트 div css */
.next_img_box {
  margin-top: 8px;
  margin-left: 120px;
}

/* 하단영역 css */
.bottom_box {
  top: 459px;
  left: 0px;
  width: 360px;
  height: 87px;
  background-color: #ffffff;
  opacity: 1;
}

.bill_box {
  top: 459px;
  left: 0px;
  width: 360px;
  height: 87px;
  margin-top: 8px;
  background-color: #ffffff;
  opacity: 1;
  display: flex;
  justify-content: space-between;
}
/* 주문하기 div css */
.purchase_box {
  margin-left: 16px;
  margin-top: 150px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 328px;
  height: 48px;
  background-color: #ff921d;
  border-radius: 4px;
  opacity: 1;
}

/* 타이틀 좌측 x표시 css */
.big_del {
  color: #404040;
  width: 15px;
  height: 15px;
  font-size: 18px;
  opacity: 1;
}

/* 장바구니 제목 css */
.top_title {
  font-size: 18px;
  top: 39px;
  left: 147px;
  text-align: center;
  font: 21px;
  color: #333333;
  opacity: 1;
}

/* 체크박스 css */
.chk_box {
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 3px;
  opacity: 1;
}

/* 회색배경 css */
.gray_box {
  background-color: gray;
}
</style>
