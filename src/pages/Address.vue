<template>
  <b-container>
    <b-row v-for="(l,i) of list" :key="i" class="my-5">
      <b-col cols="3">
        <div class="location"></div>
      </b-col>
      <b-col cols="9">
        <div>
          <h5>{{l.xname}}</h5>
          <p>{{l.address}}</p>
          <p>{{l.hottell}}</p>
          <p>{{l.zipcode}}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Address",
  data() {
    return {
      list: []
    }
  },
  methods: {
    location() {
      this.list = [
        {
          xname: "北京中关村中心",
          address: "校区地址：北京市海淀区北三环西路甲18号（大钟寺附近）中鼎大厦B座7层",
          hottell: "咨询电话：010-62130963",
          zipcode: "邮编：100098"
        },
        {
          xname: "北京天坛中心",
          address: "校区地址：北京市崇文区珠市口东大街6号珍贝大厦西侧3层达内科技",
          hottell: "咨询电话：010-67028668",
          zipcode: "邮编：100050"
        },
        {
          xname: "北京广渠门中心",
          address: "校区地址：北京市东城区广渠门东广渠家园25号楼启达大厦一层",
          hottell: "咨询电话：15321130620",
          zipcode: "邮编：100010"
        },
        {
          xname: "北京清华园中心",
          address: "校区地址：北京市海淀区花园路小关街120号万盛商务会馆A区三层",
          hottell: "咨询电话：010-82676916",
          zipcode: "邮编：100088"
        }
      ]
    }
  },
  mounted() {
    this.location();
  }
}
</script>

<style>
.location{
  width: 31px;
  height: 47px;
  background: url(~@/assets/images/iconlist.png) no-repeat 0 -530px;
  margin: 40px auto;
}
</style>