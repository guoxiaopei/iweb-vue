<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h2 class="d-flex justify-content-between page-header my-3">
          <span>{{hname}}</span>
          <router-link :to="{name: 'Course', query: {curPage:1,typeId:0}}">更多</router-link>
        </h2>
      </b-col>
      <b-col sm="6" md="3" v-for="(item,i) of list" :key="i">
        <router-link :to="{name: 'CourseDetail', query: {cid: item.cid}}">
          <img :src="require('../assets/' + item.pic)" alt="" class="w-100 my-3">
        </router-link>
        <router-link :to="{name: 'CourseDetail', query: {cid: item.cid}}">
          <h6>{{item.title}}</h6>
        </router-link>
        <div>讲师：{{item.tname}}</div>
        <h5 class="text-danger">￥{{item.price}}</h5>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HomeCourse",
  data() {
    return {

    }
  },
  props: {
    list: null,
    hname: ""
  }
}
</script>

<style>
.page-header{
  border-bottom: 2px solid #dddddd;
}
</style>