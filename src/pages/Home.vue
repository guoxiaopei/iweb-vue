<template>
  <b-container fluid class="px-0">
    <Carousel></Carousel>
    <HomeCourse :list="list" hname="最新课程"></HomeCourse>
    <b-container>
      <h1>这里是首页</h1>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </b-container>
  </b-container>
</template>

<script>
import Carousel from "@/components/Carousel";
import HomeCourse from "@/components/HomeCourse";
export default {
  name: "Home",
  data() {
    return {
      list: [],
      countNum: 4
    }
  },
  components: {
    Carousel,
    HomeCourse
  },
  methods: {
    getCourseNew() {
      this.$axios.get("/course/newest", {
        params: {
          countNum: this.countNum
        }
      }).then(res => {
        console.log(res)
        this.list = res.data.data;
      }).catch(err => {
        console.error(err)
      })
    }
  },
  mounted() {
    this.getCourseNew();
  }
}
</script>

<style>
  
</style>