<template>
  <div
    class="container"
    style="display: flex; justify-content: center; align-items: center"
  >
    <PulseLoader :loading="isLoading" style="position: absolute; z-index: 9999"/>
    <div id="wrap">
      <topBox :title="'장바구니'" is-close=""></topBox>

      <div class="content" style="padding-top: 2px" v-if="cartList === null">
        <div class="mark">!</div>
        <div class="phrase">
          장바구니가 비어있어요<br/>
          상품을 담아주세요!
        </div>
      </div>

      <div
        class="content2" style="padding-top: 2px" @scroll="handleScroll"
        v-if="cartList !== null"
      >
        <div style="border-bottom: 1px solid #dddddd; background-color: #FFFFFF">
          <div class="allChk_div">
            <div
              style="
                width: 20px;
                height: 20px;
                background: 0% 0% no-repeat padding-box;
                margin-top: 20px;
                margin-left: 16px;
                background: #ffffff 0% 0% no-repeat padding-box;
                opacity: 1;
              "
            >
              <input type="checkbox" class="chk_box" style="background-size: cover"  v-model="chkModel" @click="allChk()">
            </div>
            <div
              style="
                margin-top: 20px;
                margin-left: 8px;
                color: #666666;
                font-size: 13px;
              "
            >
             전체선택 ({{countNum}}/{{ cartList.length }})
            </div>

        </div>
          <div>
        <div :class="{listArea : cartList.length-1!==index, lastListArea : cartList.length-1===index}" v-for="(item,index) in cartList" style="position: relative">
          <div class="eachChk_div">
            <div>
              <div>
                <input type="checkbox" class="chk_box" style="background-size: cover" v-model="item.status">
              </div>
            </div>
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                width: 24px;
                height: 24px;
                font-size: 28px;
              "
            >
              <img src="static/ico_close_s.png"/>
            </div>
          </div>
          <div class="img_wrap">
            <div class="img"><img :src="item.image" style="width: 100%; height: 100%; object-fit: cover"/> </div>
            <div class="text" style="margin-left: 10px; width: 100%;">
              <div style="text-align: left; font-size: 12px; color: #666666">
                {{item.farm}}
              </div>
              <div style="text-align: left; font-size: 14px">{{item.product}}</div>
              <div style="text-align: left; font-size: 13px; margin-top: 4px">
                {{item.sort}}
              </div>
              <div class="" style="display: flex; justify-content: space-between; width: 100%;">
                <div class="btnCount" style="font-size: 14px">
                  <div @click="isMinus(item)" class="flex-ali-jus" style="display: flex; height: 28px; width: 28px; font-size: 20px">
                    <img src="static/ico_minus@2x.png" style="width: 100%; height: 100%"/>
                  </div>
                  <div class="flex-ali-jus" style="height: 28px; width: 38px">{{ item.count }}
                  </div>
                  <div @click="isPlus(item)" style="height: 28px; width: 28px; font-size: 20px">
                    <img src="static/ico_plus.png"/>
                  </div>
                </div>
                <div
                  class="flex-ali-jus"
                  style="
                    text-align: right;
                    font-size: 16px;
                    letter-spacing: 0px;
                    color: #333333;
                    opacity: 1;
                  "
                >
                  {{ (item.price * item.count).toLocaleString()}}원
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        <div>
        </div>


        </div>
        <div style="margin-bottom: 150px">
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
            <span style="color: #333333">총 주문상품</span>
            <div style="margin-top: 12px; color: #f24147">총 결제금액</div>
          </div>
          <div
            style="text-align: right; margin-right: 16px; margin-top: 16px"
          >
              <span style="font-size: 14px; font-weight: normal; color: #333333"
              >{{ totalBox }}박스</span
              >
            <div
              style="
                  margin-top: 8px;
                  font-size: 18px;
                  font-weight: bold;
                  color: #f24147;
                "
            >
              {{ totalPrice.toLocaleString() }}원
            </div>
          </div>
        </div>
        </div>



        <!---->
      </div>

      <div class="bottom" @click="sendRequest()">결제하기</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios' // Axios 임포트
import { BREED_LIST }  from './url'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: "emptyCart",
  components: {
    PulseLoader
  },
  data() {
    return {
      scrollY: 0,
      timer : null,
      chkModel: false,
      isLoading: false,
      cnt: 1,
      totalWon: 0,
      testList: [],
       // cartList: null,

      cartList: [
        {
          farm: "민수네 한라봉",
          image: "static/bbgpam1.png",
          product: "민수 배만큼 큰 한라봉 5kg",
          sort: "대과 10~20개",
          count: 1,
          price: 35000,
          img: "logo.jpg",
          status: false,
        },


        {
          farm: "유리네 한라봉",
          image: "static/bbgpam3.png",
          product: "새콤달콤 한라봉 5kg",
          sort: "소과 20~30개",
          count: 1,
          price: 30000,
          status: false,
        }
      ],
    };
  },

  created : function () {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy : function () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  computed: {
    computing: function () {
      return this.cartList.filter((data) => data.status).length > 0;
    },
    countNum: function () {
      return this.cartList.filter((data) => data.status).length;
    },
    totalBox: function () {
      let box = 0;
      this.cartList
        .filter((data) => data.status)
        .forEach(function (element) {
          box += element.count;
        });
      return box;
    },
    totalPrice: function () {
      let price = 0;
      this.cartList
        .filter((data) => data.status)
        .forEach(function (element) {
          price += element.count * element.price;
        });
      return price;
    },
  },
  methods: {

    sendRequest() { // 서버통신예제
      let vue = this;
      this.isLoading = true;
      axios.get(BREED_LIST)
        .then(res => { // 여기는 결과값(response data)을 받는 곳
          console.log(res);
          if (res.status === 200) { // 성공 처리
            console.log(res.data.content);
            vue.testList = res.data.content;
            // vue.isLoading = false;
          }
        })
        .catch(error => { // 여기는 400이상 에러들이 발생하면 여기로 나오는곳
          console.log(error)
        })
    },

    goHome () {
      this.$router.push({ path: "/" });
    },

    isPlus (cartItem) {
      cartItem.count += 1;
    },
    isMinus(cartItem) {
      if(cartItem.count > 1) {
        cartItem.count -= 1;
      }
    },

    allChk () {
      //전체선택 클릭했을 때;
      let vue = this;
      this.cartList.forEach(function (element) {
        element.status = !vue.chkModel;
      });
    },

    handleScroll : function () {
      if (this.timer === null) {
        this.timer = setTimeout(function () {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null

        }.bind(this), 200)
      }
    }


  },
};
</script>

<style scoped>
.flex-ali-jus {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  margin: 0;
  /*-webkit-appearance:none;*/
  -moz-appearance: none;
  /*appearance: none;*/
  /*background-position: top right;*/
  /*background-repeat: no-repeat;*/
  background:url('/static/check_off.png') no-repeat;
}

input:focus{
  /*appearance: none;*/
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

#wrap {
  margin: 0;
  padding: 0;
  /*height: 760px; => height값을 주면 왜 마진이 생길까? */
  background: #F7F7F7;
  opacity: 1;
  border: 1px solid #00000029;
}

.top {
  display: flex;
  align-items: center;
  top: 24px;
  left: 0px;
  width: 360px;
  height: 56px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000029;
  opacity: 1;
}

.btnCancel {
  font-size: 18px;
  top: 24px;
  left: 0px;
  width: 56px;
  width: 56px;
  height: 56px;
  opacity: 1;
}

.title {
  margin-left: 91px;
  top: 39px;
  left: 147px;
  height: 27px;
  color: var(--unnamed-color-333333);
  font-size: 18px;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
}

.mark {
  display: flex;
  justify-content: center;
  align-items: center;
  left: 154px;
  width: 52px;
  height: 52px;
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  background-color: #ff921d;
  border-radius: 50px;
  opacity: 1;
  margin: 0px 0 20px 0;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 616px;
  background-color: #ffffff;
}

.phrase {
  top: 394px;
  left: 105px;
  height: 45px;
  color: var(--unnamed-color-333333);
  text-align: center;
  font-size: 16px;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
}

.allChk_div {
  display: flex;
  justify-content: left;
  width: 360px;
  height: 53px;
  border-bottom: 1px solid #f0f0f0;
  /*background-color: white;*/
}

.eachChk_div {
  display: flex;
  justify-content: space-between;

}

.listArea {
  margin: 14px 16px 0;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 16px;
  background: #FFFFFF;
}

.lastListArea {
  margin: 14px 16px 16px 16px;
  border-bottom: none;
  padding-bottom: 16px;
  background: #ffffff;
}

.img_wrap {
  display: flex;
  margin-top: 8px;
}

.img {
  top: 177px;
  left: 16px;
  width: 94px;
  height: 94px;
  min-width: 94px;
  max-width: 94px;
  opacity: 1;
  background-color: linen;
}

.btnCount {
  display: flex;
  top: 248px;
  left: 120px;
  width: 94px;
  height: 28px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  border-radius: 2px;
  opacity: 1;
  margin-top: 10px;
}

.bill_box {
  top: 459px;
  left: 0px;
  width: 360px;
  height: 87px;
  margin-top: 8px;
  border-bottom: 1px solid #dddddd;
  /*margin-bottom: 150px;*/
  background-color: #ffffff;
  opacity: 1;
  display: flex;
  justify-content: space-between;
}

/* 배열값 for문 도는 div css */
.list_box {
  display: flex;
  margin-top: 14px;
  margin-left: 16px;
  margin-right: 16px;
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
  margin-top: 8px;
  /* top: 97px; */
  left: 16px;
  /*display: flex;*/
  width: 94px;
  height: 94px;
  background-color: #ff921d;
}
/* 이미지box옆 폰트 div css */
.next_img_box {
  margin-top: 8px;
  margin-left: 10px;
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

.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 16px 16px 16px;
  color: #ffffff;
  font-size: 14px;
  top: 696px;
  left: 16px;
  width: 328px;
  height: 48px;
  background: var(--unnamed-color-ff921d) 0% 0% no-repeat padding-box;
  background: #ff921d 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
}
</style>



