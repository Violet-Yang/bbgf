<template>
  <div class="container" style="display: flex; justify-content: center; align-items: center">
    <div id="wrap">
      <div class="top" style="position: relative; display: flex">
        <div @click="goBack()"
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
          "
        >
          X
        </div>
        <div
          style="
            position: absolute;
            top: 15px;
            left: 147px;
            font-size: 18px;
            color: #333333;
          "
        >
          주문목록
        </div>
      </div>
      <div class="contents1" v-for="item in orderList">
        <div id="padding">
          <div class="eachBar">
            <div class="date">{{ item.date }}</div>
            <div class="detail">
              <div>상세보기</div>
              <div class="point">〉</div>
            </div>
          </div>

          <div class="eachData" v-for="data in item.list">
            <div :class="{ img: !data.isCancel, img2: data.isCancel }">
              <img :src="data.image" />
            </div>
            <div class="letters">
              <span class="kg">{{ data.title }}</span>
              <span class="mixed"
                >{{ data.price.toLocaleString() }}원 / {{ data.breed }} /
                {{ data.amount }}박스
              </span>
              <span class="farm">농장 : {{ data.farm }}</span>
              <div class="btnCancel" v-if="data.isCancel">
                <span class="fontCancel" @click="clkBtnCancel()">주문취소</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderList",
  data() {
    return {
      orderList: [
        {
          date: "2020.04.06",
          list: [
            {
              image: "../assets/pam1.jpg",
              title: "한라봉 5kg",
              price: 90000,
              breed: "소과 20~30개",
              amount: 3,
              farm: "토평 정민규네",
              isCancel: false,
            },
          ],
        },
        {
          date: "2020.03.25",
          list: [
            {
              image: "../assets/pam2.jpg",
              title: "밀감 5kg",
              price: 27000,
              breed: "소과 20~30개",
              amount: 1,
              farm: "토평 정민규네",
              isCancel: true,
            },
            {
              image: "../assets/pam3.jpg",
              title: "밀감 3kg",
              price: 30000,
              breed: "중과 20~30개",
              amount: 1,
              farm: "토평 정민규네",
              isCancel: false,
            },
          ],
        },
        {
          date: "2020.02.05",
          list: [
            {
              image: "../assets/pam1.jpg",
              title: "한라봉 5kg",
              price: 90000,
              breed: "대과 10~20개",
              amount: 3,
              farm: "토평 정민규네",
              isCancel: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    goBack () {
      history.back(-1);
    },

    clkBtnCancel() {
      //주문취소 버튼 클릭했을 때
      this.orderList.forEach((orderArray) => {
        orderArray.list.forEach((listArray) => {
          return (listArray.isCancel = false);
        });
      });
    },
  },
};
</script>

<style scoped>
#wrap {
  width: 360px;
  background-color: whitesmoke;
}

#padding {
  padding: 16px;
}
.top {
  left: 0px;
  width: 360px;
  height: 56px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000029;
  opacity: 1;
}

.contents1 {
  margin-top: 8px;
  top: 80px;
  left: 0px;
  width: 360px;
  /*height: 134px;*/
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-bottom: 1px solid #00000014;
}

.contents2 {
  margin-top: 8px;
  top: 222px;
  left: 0px;
  width: 360px;
  height: 249px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  background-color: #ffff8f;
}

.eachBar {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
}

.date {
  display: flex;
  align-items: center;
  top: 96px;
  left: 16px;
  width: 60px;
  height: 18px;
  text-align: left;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
}

.detail {
  display: flex;
}

.point {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  border-radius: 50%;
  color: #ffffff;
  font-weight: bolder;
  font-size: 4px;
  width: 14px;
  height: 14px;
  background: #6bb555 0% 0% no-repeat padding-box;
  opacity: 1;
}

.eachData {
  display: flex;
  margin-top: 8px;
  border-top: 1px solid #f0f0f0;
}

.img {
  margin-top: 12px;
  top: 134px;
  left: 16px;
  width: 64px;
  height: 64px;
  opacity: 1;
  background-color: goldenrod;
}

.img2 {
  margin-top: 12px;
  top: 134px;
  left: 16px;
  width: 64px;
  height: 64px;
  opacity: 0.5;
  background-color: goldenrod;
}

.letters {
  /*position: absolute;*/
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}

.kg {
  margin-top: 3px;
  height: 20px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
}

.mixed {
  padding-top: 2px;
  top: 156px;
  left: 96px;
  height: 19px;
  color: var(--unnamed-color-333333);
  text-align: left;
  font-size: 13px;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
}

.farm {
  padding-top: 4px;
  top: 179px;
  left: 96px;
  height: 18px;
  color: var(--unnamed-color-666666);
  text-align: left;
  font-size: 12px;
  letter-spacing: 0px;
  color: #666666;
  opacity: 1;
}

/*
.boxCancel {
  position: relative;

  display: flex;
  align-items: center;
}
*/

.btnCancel {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  top: 343px;
  left: 96px;
  width: 56px;
  height: 24px;
  background: var(--unnamed-color-f24147) 0% 0% no-repeat padding-box;
  background-color: rgba(242, 65, 71, 0.08);
  border-radius: 2px;
  /*opacity: 0.5;*/
  font-size: 12px;
  /*z-index: -1;*/
}

.fontCancel {
  /*position: absolute;*/
  display: flex;
  justify-content: center;
  align-items: center;
  left: 6px;
  text-align: left;
  font-size: 12px;
  letter-spacing: 0px;
  color: #f24147;
  /*opacity: 1;
  /*z-index: 1;*/
}
</style>
