<template>
  <div style="padding: 16px 16px 8px 16px">
    <div
      style="
        top: 96px;
        left: 16px;
        height: 19px;
        color: var(--unnamed-color-666666);
        text-align: left;
        font-size: 13px;
        letter-spacing: 0px;
        color: #666666;
        opacity: 1;
      "
    >
      {{title}}
    </div>
    <div
      style="
        margin-top: 4px;
        top: 119px;
        left: 16px;
        height: 48px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #dddddd;
        border-radius: 4px;
        opacity: 1;
      "
    ><input type="text" v-model="textData" @input="setData"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textData : ''
    }
  },
  methods : {
    setData () {
      this.$emit('setData', this.textData )
    }
  },
  name: "MidBox_name",
  props : [ "title" ],
};
</script>

<style scoped></style>
