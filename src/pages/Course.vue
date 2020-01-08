<template>
  <b-container>
    <b-breadcrumb :items="items" class="bg-transparent"></b-breadcrumb>
    <TypeNav></TypeNav>
    <hr style="borderTop: 1px solid #b2ee86">
    <b-row class="mb-5" v-for="(item, index) in list" :key="index">
      <b-col cols="3">
        <router-link :to="{name: 'CourseDetail', query: {cid: item.cid}}">
          <img :src="require(`../assets/${item.pic}`)" alt="" class="img-fluid">
        </router-link>
      </b-col>
      <b-col cols="5" class="course-desc">
        <h2>
          <router-link :to="{name: 'CourseDetail', query: {cid: item.cid}}">
            {{item.title}}
          </router-link>
        </h2>
        <p>讲师: {{item.tname}}</p>
        <p>课时: {{item.cLength}}</p>
        <p>开课时间: {{item.startTime}}</p>
        <p>上课地点: {{item.address}}<a href="">查看各校区地址</a></p>
      </b-col>
      <b-col cols="2">
        <h2 class="text-danger my-5">￥{{item.price}}.00</h2>
      </b-col>
      <b-col cols="2">
        <router-link :to="{name: 'CourseDetail', query: {cid: item.cid}}" class="btn btn-success my-5">查看详情</router-link>
      </b-col>
    </b-row>
    <!-- 分页导航 -->
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="pageTotal" use-router></b-pagination-nav>
  </b-container>
</template>

<script>
import TypeNav from '../components/TypeNav';
export default {
  name: "Course",
  data() {
    return {
      list: null,
      curPage: 1,
      pageSize: 3,
      total: 0,
      pageTotal: 1,
      typeId: 0,
      items: [
          {
            text: '首页',
            to: {name: 'Home'}
          },
          {
            text: '全部课程',
            active: true
          }
        ]
    }
  },
  methods:{
    //获取课程列表
    getCourseList() {
      this.$axios.get("/course/list", {
        params: {
          curPage: this.curPage,
          typeId: this.typeId
        }
      }).then(res => {
        console.log(res)
        if(res.data.code == 200) {
          this.list = res.data.data.list;
          // this.pageSize = res.data.data.pageSize;
          this.total = res.data.data.total;
          this.pageTotal = res.data.data.pageTotal;
        }
      }).catch(err => {
        console.error(err)
      })
    },
    linkGen(pageNum) {
      return {
        path: `/course?curPage=${pageNum}&typeId=${this.typeId}`
      }
    }
  },
  mounted() {
    this.curPage = this.$route.query.curPage;
    this.typeId = this.$route.query.typeId;
    this.getCourseList();
  },
  components: {
    TypeNav
  }
}
</script>

<style>
.course-desc p{
  margin: 0;
}
.breadcrumb-item + .breadcrumb-item::before{
  content: ">" !important

}
</style>