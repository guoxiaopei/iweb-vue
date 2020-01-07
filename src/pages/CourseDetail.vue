<template>
  <b-container>
    <b-row>
      <b-col cols="6">
        <img :src="img" alt="" class="w-75">
      </b-col>
      <b-col cols="6">
        <h3>{{detail.title}}</h3>
        <ul class="list-unstyled bg-light pl-3 py-3">
          <li>讲师：{{detail.tname}}</li>
          <li>课时：{{detail.cLength}}</li>
          <li>开课时间：{{detail.startTime}}</li>
          <li>上课地点：{{detail.address}}</li>
        </ul>
        <h6>课程价格：{{detail.price}}.00</h6>
        <b-button>加入购物车</b-button>
        <a href="">加入收藏</a>
      </b-col>
    </b-row>
    <h2>课程详情</h2>
    <hr>
    <p v-html="detail.details"></p>
  </b-container>
</template>

<script>
export default {
  name: "CourseDetail",
  data() {
    return {
      detail: {},
      img: ''
    }
  },
  methods: {
    getCourseDetail() {
      this.$axios.get("/course/detail",{
        params: {
          cid: 1
        }
      }).then(res => {
        console.log(res)
        this.detail = res.data.data;
        this.img = require(`../assets/${this.detail.pic}`);
      }).catch(err => {
        console.error(err)
      })
    }
  },
  mounted() {
    this.getCourseDetail()
  }
}
</script>

<style>

</style>