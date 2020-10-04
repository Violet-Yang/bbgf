<template>
  <div class="container" style="display: flex; justify-content: center; align-items: center">
  <div id="wrap">
    <div class="top">
      <div class="btnCancel">X</div>
      <div class="title">주문조회</div>
    </div>
    <div class="name_box">
      <div class="name">주문자 이름</div>
      <div class="getName"><input style="width: calc(100% - 15px); height: 100%;" v-model="name2" placeholder="주문자 이름을 적어주세요"></div>

      <div class="name" style="margin-top: 16px">주문자 휴대폰 번호</div>
      <div class="getName"><input style="width: calc(100% - 15px); height: 100%" v-model="phone2" placeholder="'-'없이 숫자만 입력해주세요"></div>
      <div class="showMsg" v-if="this.info!==null">주문자 이름, 폰번호가 맞는지 확인해주세요</div>
      <div @mousedown="getOrderInfo()" :class="{btnConfirm:!computing, btnOrange : computing}">주문확인</div>
    </div>

  </div>
  </div>
</template>

<script>
export default {
name: "SearchOrderList",
  data () {
    return {
      name2 : '',
      phone2 :'',
      orderInfo: [{name: '김민수', phone : '01099496470'}, {name : '양지은', phone : '01066440155'}],
      info : null
    }
  },
  methods : {
    getOrderInfo () {
      this.info=null;
      let newOrderInfo = this.orderInfo.filter(data => data.name === this.name2 && data.phone ===this.phone2);
      if (newOrderInfo.length > 0) {
        alert('정보확인 완료! 다음화면으로 이동합니다.')
        this.$router.push({path : '/orderList'})
      } else {
        this.info = '정보없음';
      }
    }
  },
  computed : {
    computing : function () {
      return (this.name2.length >= 2 && this.phone2.length === 11 );
    }
  }
}
</script>

<style scoped>

.showMsg{
  margin-top: 2px;
  left: 16px;
  width: 277px;
  height: 18px;
  color: var(--unnamed-color-f24147);
  text-align: left;
  font-size: 12px;
  letter-spacing: 0px;
  color: #F24147;
  opacity: 1;
}

.btnOrange{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  top: 274px;
  left: 15px;
  width: 329px;
  height: 48px;
  border-radius: 4px;
  opacity: 1;
  background-color: #FF921D ;
  color: #FFFFFF;
}

input {
  webkit-appearance : none;
  moz-appearance:none;
  appearance:none;
  border: none;
  padding: 0 0 0 15px;
}

input:focus {
  outline:none;
}

#wrap {
  top: 0px;
  left: 0px;
  width: 360px;
  height: 760px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
  border: 1px solid #dddddd;
}
.top{
  display: flex;
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
  display: flex;
  align-items: center;
  justify-content: center;
  top: 24px;
  left: 0px;
  width: 56px;
  height: 56px;
  opacity: 1;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 91px;
  margin-top: 15px;
  top: 39px;
  left: 147px;
  height: 27px;
  color: var(--unnamed-color-333333);
  text-align: center;
  font: normal normal normal 18px/21px Noto Sans KR;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
}

.name_box {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.name {
  top: 96px;
  height: 19px;
  color: var(--unnamed-color-666666);
  text-align: left;
  font: normal normal normal 13px/20px Noto Sans KR;
  letter-spacing: 0px;
  color: #666666;
  opacity: 1;
}

.getName {
  margin-top: 4px;
  top: 119px;
  left: 16px;
  height: 48px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  opacity: 1;
}

.btnConfirm {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #999999;
  top: 274px;
  left: 15px;
  width: 329px;
  height: 48px;
  background: var(---f0f0f0-line-) 0% 0% no-repeat padding-box;
  background: #F0F0F0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
}
</style>
