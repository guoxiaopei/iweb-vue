<template>
  <b-container class="p-4 bg-light mb-3">
    <span>课程等级：</span>
    <router-link :class="typeId == 0 ? 'btn  btn-success mx-3' : 'btn mx-3'" :to="{name: 'Course',query: {curPage:1,typeId: 0}}">不限</router-link>
    <router-link :class="typeId == item.tpid ? 'btn  btn-success mx-3' : 'btn mx-3'" :to="{name: 'Course',query: {curPage:1,typeId: item.tpid}}" v-for="(item, index) in list" :key="index">{{item.tpname}}</router-link>
  </b-container>
</template>

<script>
export default {
 name: "TypeNav",
 data() {
   return {
     list: [],
     typeId: 0
   }
 },
 methods: {
   getCourseType() {
     this.$axios.get("/type").then(res => {
       console.log(res)
       if(res.data.code == 200) {
         this.list = res.data.data;
       }
     }).catch(err => {
       console.log(err)
     })
   }
 },
 mounted() {
   this.typeId = this.$route.query.typeId;
   this.getCourseType();
 }
}
</script>

<style>

</style>