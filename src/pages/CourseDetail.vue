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
        <div>
          课程价格：
          <h5 class="text-danger d-inline-block mb-3">￥{{detail.price}}.00</h5>
        </div>
        <router-link to="" class="btn btn-warning text-white">
          <em class="icon-cart"></em>
          加入购物车
        </router-link>
        <a class="btn btn-secondary ml-3" href="">加入收藏</a>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <h2><span>课程详情</span></h2>
        <hr>
        <div v-html="detail.details"></div>
      </b-col>
    </b-row>
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
          cid: this.$route.query.cid
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
.icon-cart {
    display: inline-block;
    vertical-align: middle;
    width:19px;
    height: 14px;
    background: url(../assets/images/iconlist.png) no-repeat 0 -210px;
    margin-right: 9px;
    margin-top:-4px;
}
</style>