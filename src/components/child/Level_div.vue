<template>
  <div>
    <p style="font-size: 14px; color: #333333">{{ title }}</p>
    <div
      style="
        display: flex;
        z-index: 1;
        margin-top: 8px;
        width: 156px;
        height: 8px;
        background-color: #f0f0f0;
        border-radius: 10px;
      "
    >
      <div
        :class="{ first_div: level === 1, last_div: level === 5, mid_div : index !== range-1 }"
        v-for="(level, index) in range"
        style="
          height: 100%;
          width: 30px;
          background-color: #ff921d;
        "
      >
<!--        {{ level }}-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "range"],
  name: "Level_div",
  data() {
    return {
      level: 2,
    };
  },
};
</script>

<style scoped>
p,
span {
  margin: 0;
  padding: 0;
}

.first_div {
  border-radius: 4px 0 0 4px;
}
.mid_div {
  border-right: 1px solid #ffffff;
}

.last_div {
  border-radius: 0 4px 4px 0;
}
</style>
