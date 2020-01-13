<template>
  <b-container>
    <b-row>
      <b-col cols="3">
        <b-list-group>
          <b-list-group-item active>用户中心</b-list-group-item>
          <b-list-group-item :to="{path: '/'}">我的课程</b-list-group-item>
          <b-list-group-item>我的收藏</b-list-group-item>
          <b-list-group-item>个人资料</b-list-group-item>
          <b-list-group-item>修改密码</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="9">
        <h4>{{uname}} 欢迎你，请坐吧！</h4>

        <h3 class="page-header py-3">我的课程</h3>
        <b-row>
          <b-col cols="4" v-for="(item, index) in orderList" :key="index">
            <router-link :to="{name: 'course_detail', query: {cid: item.cid}}">
              <img src="" alt="">
            </router-link>

          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Center',
  data () {
    return {
      uname: sessionStorage.getItem('uname'),
      orderList: []
    }
  },
  methods: {
    getOrderList() {
      this.$axios.post('/order/list', qs.stringify({
        
      }))
    }
  }

}
</script>

<style>

</style>