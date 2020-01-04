<template>
  <b-container>
    <b-row class="my-5" v-for="(t,i) of teacherlist" :key="i">
      <b-col lg="2" md="3" sm="4">
        <img :src="require('../assets/' + t.tpic)" alt="" class="img-fluid">
      </b-col>
      <b-col lg="10" md="9" sm="8">
        <h3>{{t.tname}}<span>{{t.maincourse}}</span></h3>
        <dl>
            <dt>工作经历：</dt>
            <dd>{{t.experience}}</dd>
        </dl>
        <dl>
            <dt>授课风格：</dt>
            <dd>{{t.style}}</dd>
        </dl>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Teacher",
  data() {
    return {
      teacherlist: []
    }
  },
  methods: {
    getTeachers() {
      //通过axios调用node接口
      this.$axios.get("/teacher/list").then(res => {
        // var arr = res.data.data;
        // for(var i=0; i<arr.length;i++) {
        //   arr[i].tpic = require("../assets/"+ arr[i].tpic);
        // }
        // this.teacherlist = arr;
        this.teacherlist = res.data.data;
      }).catch(err => {
        console.error(err)
      })
    }
  },
  mounted() {
    //组件挂载时，调用getTeachers
    this.getTeachers();
  }
}
</script>

<style>

</style>