<template>
  <b-container class="header">
    <h1 class="logo"><a href="index.html"></a></h1>
        <div class="h_right">
            <div class="search">
                <input type="text" placeholder="课程搜索"/><button type="button"></button>
            </div>
            <div class="h_cart">
                <a href="cart.html"><em class="icon-cart"></em>我的购物车(<strong id="cart_sum">{{list.length}}</strong>)<em class="icon-arrows"></em></a>
                <div class="cart_dropdown">
                    <h3 v-show="!$global.isLogin">请登录后查看您的购物车</h3>
                    <h3 v-show="$global.isLogin && list.length == 0">您的购物车为空~</h3>
                    <ul class="list-unstyled" v-show="$global.isLogin">
                        <li class="clearfloat" v-for="(item, index) in list" :key="index">
                            <router-link :to="{name: 'CourseDetail', query: {cid: item.courseId}}">
                              <img :src="require(`../assets/${item.pic}`)" alt=""/>
                            </router-link>
                            <dl>
                                <dt><a href="">HTML零基础入门零基础入门零基础入门</a></dt>
                                <dd>¥{{item.price}}.00 <span>x {{item.count}}</span></dd>
                            </dl>
                            <em class="icon-remove" @click="remove(item.ctid, index)"></em>
                        </li>
                    </ul>
                    <div class="sum clearfloat" v-show="$global.isLogin">
                        <p>共计：<span>¥{{count}}.00</span></p>
                        <router-link :to="{name: 'Cart'}">去结算</router-link>
                    </div>
                </div>
            </div>
        </div>
  </b-container>
</template>

<script>
import qs from 'qs'
export default {
  name: "TopNav",
  data () {
    return {
      list: []
    }
  },
  methods: {
    getCart () {
      this.$axios.post("/cart/list", qs.stringify({
        uid: sessionStorage.getItem('uid')
      })).then(res => {
        console.log(res)
        this.list = res.data.data;
      }).catch(err => {
        console.log(err)
      })
    },
    remove (id, i) {
      console.log(id, i)
      this.$axios.post('/cart/delete', qs.stringify({
        ctid: id
      })).then(res => {
        console.log(res)
        if(res.data.code == 200) {
          this.list.splice(i,1)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getCart();
  },
  computed: {
    count() {
      var num=0;
      for(var i=0; i<this.list.length; i++) {
        num += this.list[i].price;
      }
      return num;
    }
  }

}
</script>

<style>
.header {
    height: 90px;
    background: #fff;
    font-size: 12px;
}
a {
    color:#555;
    text-decoration: none;
}
a:hover {
    color:#f30;
    text-decoration: none;
}
.logo {
    width: 84px;
    height: 41px;
    background: url(~@/assets/logo.png) no-repeat 0 0;
    float: left;
    margin-top: 21px;
}
.logo>a {
    display: block;
    height: 100%;
}
.h_right {
    float: right;
    margin-top:29px;
}
.search {
    float: left;
}
.search input {
    vertical-align: top;
    box-sizing: border-box;
    width: 430px;
    height: 32px;
    border:1px solid #ccc;
    border-right: none;
    padding-left: 10px;
}
.search button {
    vertical-align: top;
    width: 50px;
    height: 32px;
    background: #57bc4c url(~@/assets/images/iconlist.png) no-repeat 14px -175px;
    border:none;
}
.search button:hover {
    background-color: #4aaf3f;
}
.h_cart {
    float: left;
    margin-left: 20px;
    position: relative;
}
.h_cart>a {
    display: block;
    box-sizing: border-box;
    width:140px;
    height: 32px;
    line-height: 30px;
    border:1px solid #ddd;
    padding-left:9px;
    background: #f9f9f9;
    position: relative;
    z-index: 801;
}
.h_cart:hover>a {
    color:#555;
    background: #fff;
    border-bottom: 0;
}
.icon-cart {
    display: inline-block;
    vertical-align: middle;
    width:19px;
    height: 14px;
    background: url(~@/assets/images/iconlist.png) no-repeat 0 -210px;
    margin-right: 9px;
    margin-top:-4px;
}
.icon-arrows {
    display: inline-block;
    vertical-align: middle;
    border:4px solid transparent;
    border-top-color:#57bc4c ;
    margin-left:9px;
    margin-top:2px;
    transition: all .3s;
    transform-origin:center 2px;
}
.h_cart:hover .cart_dropdown {
    display: block;
}
.h_cart:hover .icon-arrows {
    transform: rotate(180deg);
}

.cart_dropdown {
    position: absolute;
    top:31px;
    right: 0;
    width: 260px;
    background: #fff;
    border:1px solid #ddd;
    display: none;
    z-index: 800;
}
.cart_dropdown>h3 {
    font-size: 16px;
    text-align: center;
    font-weight: lighter;
    padding: 30px 0;
}
.cart_dropdown ul li {
    padding: 16px 0 16px 10px;
    border-bottom: 1px dotted #ddd;
    height: 70px;
}
.cart_dropdown ul li>a,.cart_dropdown ul li>dl {
    float: left;
}
.cart_dropdown ul li>a>img {
    display: block;
    width: 60px;
    height: 38px;
}
.cart_dropdown ul li>dl {
    line-height: 20px;
    margin-left:15px;
}
.cart_dropdown ul li>dl dt {
    width: 140px;
    overflow: hidden; /*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    white-space: nowrap;/*强制不换行*/
}
.cart_dropdown ul li>dl dd {
    color:#f63;
}
.cart_dropdown ul li>dl dd span {
    color: #ccc;
}
.cart_dropdown ul li>em {
    float: right;
    margin:12px 8px 0 0;
    width: 14px;
    height: 14px;
    background:url(~@/assets/images/iconlist.png) no-repeat 0 -460px;
}
.cart_dropdown ul li>em:hover {
    cursor: pointer;
    background-position: 0 -480px;
}
.cart_dropdown .sum {
    padding: 16px 10px;
}
.cart_dropdown .sum p {
    float: left;
    font-size: 13px;
    font-weight: bold;
    line-height: 30px;
}
.cart_dropdown .sum p span {
    color: #f63;
}
.cart_dropdown .sum a {
    float: right;
    width: 60px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    background: #f63;
}
.cart_dropdown .sum a:hover {
    background: #ff774a;
}
</style>