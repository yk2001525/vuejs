<template>
  <div class="wrapper" ref="aaaa">
    <ul class="content">
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  created() {
    //需要有东西保存它
    // this.scroll = new BScroll(this.$refs.aaaa,{
    // })
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {
      console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 2000);
    });
  },
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;

  overflow: hidden;
  /* overflow-y:scroll; */
}
</style>
