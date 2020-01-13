<template>
  <b-container fluid class="bg-success">
    <b-container>
      <b-navbar toggleable="sm" type="dark" variant="success">
        <b-navbar-brand :to="{path: '/'}">首页</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{path: '/course',query: {curPage:1,typeId:0}}">全部课程</b-nav-item>
            <b-nav-item :to="{path: '/course',query: {curPage:1,typeId:1}}">基础课程</b-nav-item>
            <b-nav-item :to="{path: '/course',query: {curPage:1,typeId:2}}">核心课程</b-nav-item>
            <b-nav-item :to="{path: '/course',query: {curPage:1,typeId:3}}">进阶课程</b-nav-item>
            <b-nav-item href="#/teacher">名师堂</b-nav-item>
            <b-nav-item to="/address">校区</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>用户</em>
              </template>
              <b-dropdown-item v-if="$global.isLogin == false" :to="{path: '/register'}">注册</b-dropdown-item>
              <b-dropdown-item v-if="$global.isLogin == false" :to="{path: '/login'}">登陆</b-dropdown-item>
              <b-dropdown-item v-if="$global.isLogin == true" :to="{path: '/user_center'}">用户中心</b-dropdown-item>
              <b-dropdown-item v-if="$global.isLogin == true" @click="logout" href="#">退出</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      sessionStorage.removeItem('uid');
      sessionStorage.removeItem('uname');
      location.reload();
    }
  }
}
</script>

<style>

</style>