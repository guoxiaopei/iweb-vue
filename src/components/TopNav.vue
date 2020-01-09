<template>
  <b-container>
    <b-row>
      <b-col cols="2">
        <img :src="require('@/assets/logo.png')" alt="">
      </b-col>
      <b-col cols="8">
        <b-form-input id="input-default" placeholder="课程搜索"></b-form-input>
        <b-button variant="success">
          <em id="search"></em>
        </b-button>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TopNav"

}
</script>

<style>

</style>