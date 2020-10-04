<template>
  <div class="container" style="display: flex; justify-content: center; align-items: center">
  <div id="wrap">
    <div class="header_box" style="position: relative">
      <div style="width: 24px; height: 24px; margin: 16px; font-size:17px; font-weight: lighter; color: #666666"><img src="../assets/ico_right.png"></div>
      <div style="display: flex;"><img src="../assets/logo_top.png"> </div>
      <div style="width: 24px; height: 24px; margin: 16px;"><img style="width: 100%; height: 100%" src="../assets/ico_cart@2x.png" @click="goCart()"></div>
    </div>
<!--    <topBox isBack='' :title="'주문목록'" :right="'카트'" ></topBox>-->


    <!-- 여기에서부터 content영역-->
    <div class="img_box">

    </div>
    <div class="content">
      <div class="clk_box">
        <span style="color: #FF921D; font-weight: bold;">∨</span></div>
      <div class="dec_box">
        <select v-model="opt1" style="height: 100%; width: 100%; padding-left: 16px;">
          <option v-for="kgList in kg">
            {{kgList}}
          </option>
        </select>
      </div>
      <div class="dec_box" style=" margin-top: 8px">
        <select v-model="opt2" style="width: 100%; padding-left: 16px; height: 100%;">
          <option v-for="sizeList in size" :value="sizeList">
            {{sizeList.size}}

          </option>
        </select>
      </div>

      <!--옵션값 나타나는 div -->
      <div class="selected_box" v-if="(opt2 && opt1) !== null">
        <div style="margin-top: 20px; margin-left: 16px; height: 20px; text-align: left;
                    font-size: 14px; color: #4D5256; opacity: 1;">민규농장 한라봉  {{opt1}} / {{opt2.size}}</div>
        <div style="display: flex; justify-content: space-between; margin-top: 8px">
          <div id="two" style="display: flex">
            <div @click="isPlus(false)" class="min">-</div>
            <div class="num" value="cont">{{cont}}</div>
            <div @click="isPlus(true)" class="plus" style="margin: 0; border-radius: 0px 2px 2px 0px;" >+</div>
          </div>
          <div style="display: flex; margin-right: 16px">
            <div style="margin-right: 8px; font-size: 18px; font-weight: bold; color: #4D5256;">{{opt2.price.toLocaleString()}}원</div>
            <div @click="makeNull()" style="display:flex; justify-content: center; align-items: center; top: 588px; left: 303px; width: 24px; height: 24px; color: #878D91">X</div>
          </div>
        </div>
      </div>


      <!--총 상품금액 div-->
      <div class="bill_box">
        <div style="display: flex; justify-content: center; margin-left :16px; align-items: center; color: #4D5256;"><span>총상품금액</span></div>
        <div style="display: flex; justify-content: center; margin-right : 15px; align-items: center; color: #FF921D;">{{getTotalPrice.toLocaleString()}}원</div>
      </div>
      <div class="bottom_box"> <div class="btn_cart" @click="goCart()">장바구니</div> <div class="btn_buy">바로구매</div></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "beforeCart2",
  data () {
    return {
      totalPrice : 0,
      opt1 : '5kg(무게)',
      opt2 : null,
      cont : 1,
      kg : ['5kg(무게)','2kg', '3kg', '5kg', '10kg'],
      size : [{size : '크기'},{size : '소과', price : 30000},{size : '중과', price : 35000},{size : '대과', price : 40000}]
    }
  },
  computed : {
    getTotalPrice () {
      if (this.opt2 !== null) {
        this.totalPrice=this.opt2.price*this.cont;
        return this.totalPrice;
      } else {
        return this.totalPrice=0;
      }

    }
  },
  methods : {
    goCart () {
      this.$router.push({path : 'emptyCart'})
    },

    makeNull () {
      //this.opt1 = null;
      this.opt2 = null;
    },
    isPlus (plus) {
      if (plus) {
        this.cont += 1;
      } else {
        this.cont -= 1;
        if (this.cont===0) {
          alert("최소수량은 1개");
          this.cont = 1;
        }
      }
    }
  }

}
</script>

<style scoped>

@font-face{
  font-family:"Noto Sans KR";
  src : url("../../static/fonts/NotoSansKR-Regular.otf");
}


/*input 박스를 클릭 했을떄 나오는 테두리 색상 없애기*/
select:focus {outline:none;}

 /* Select box 스타일 초기화 */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-style: none;
  background-color: #F7F7F7;
  background: url("../assets/ico_chevron_down.png") no-repeat 95% 50%;
  border-radius: 4px;
  opacity: 1;
  color: #4D5256;
}

/* IE 에서 Select box 화살표 제거 */
select::-ms-expand { display: none; }

/* 버튼 css 초기화 */
button{
  background: inherit;
  border:none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
}

#wrap{
  width: 360px;
  background-color: antiquewhite;
}
.header_box{
  width: 360px;
  height: 56px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000029;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img_box{
  left: 0px;
  width: 360px;
  height: 400px;
  background: transparent url('../assets/trans.jpg') 80% 30% no-repeat padding-box;
  background-size: cover;
  opacity: 1;
}

/* 아래 화살표 div*/
.clk_box{
  top: 278px;
  left: 148px;
  width: 64px;
  height: 24px;
  border-radius: 4px 4px 0px 0px;
  opacity: 1;
  border : 1px solid #E1E1E1;
}

.content{
  position: absolute;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  /*justify-content: center;*/
  top: 477px;
  width: 360px;
  /*height: 283px;*/
  border: 1px solid var(---e1e1e1-line-);
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
}

/* 선택한 제품명, 가격, 수량 나오는 곳*/
.selected_box{
  margin-top: 8px;
  top: 537px;
  left: 20px;
  width: 323px;
  height: 96px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid var(---e1e1e1-line-);
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #E1E1E1;
  opacity: 1;
}

/* 선택박스 css */
.dec_box{
  width: 328px;
  height: 54px;
  background: #F7F7F7 0% 0% no-repeat padding-box;
  border: 1px solid #CED3D6;
  border-radius: 4px;
  opacity: 1;
  color: #E1E1E1;
}
/* 총 상품금액 css */
.bill_box{
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  top: 641px;
  left: 0px;
  width: 359px;
  height: 47px;
  background: #F7F7F7 0% 0% no-repeat padding-box;
  opacity: 1;
}
/* 하단 버튼 2개 엄마 div css */
.bottom_box{
  display: flex;
  justify-content: space-between;
  height: 72px;
  margin-top: 16px;
  font-size: 18px;
  text-align: center;
}
/* 장바구니 버튼 css */
.btn_cart{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  top: 704px;
  left: 4px;
  width: 174px;
  height: 52px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-ff921d);
  background: #FFFFFF 0% 0% no-repeat padding-box;
  color: #FF921D;
  border: 1px solid #FF921D;
  border-radius: 5px;
  opacity: 1;
}
/* 바로구매버튼 css */
.btn_buy{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  top: 704px;
  left: 182px;
  width: 174px;
  height: 52px;
  background: var(--unnamed-color-ff921d) 0% 0% no-repeat padding-box;
  background: #FF921D 0% 0% no-repeat padding-box;
  color: #FFFFFF;
  border-radius: 5px;
  opacity: 1;
}
/* 수량 클릭 버튼 css */
div.plus, div.min{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  top: 585px;
  width: 28px;
  height: 28px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  color: #4D5256;
  border: 1px solid #CED3D6;
  border-radius: 2px 0px 0px 2px;
  opacity: 1;
}
/* 숫자 나오는 부분 css */
.num{
  top: 585px;
  left: 64px;
  width: 36px;
  height: 28px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  font-size: 14px;
  color: #4D5256;
  border: 1px solid #CED3D6;
  opacity: 1;
}
</style>
