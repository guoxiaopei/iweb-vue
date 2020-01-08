<template>
  <b-container>
    <h5 class="mt-5 text-center">新用户注册</h5>
    <hr>
    <div  class="w-25 my-5 mx-auto">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="邮箱:"
          label-for="input-1"
          :description="unameinfo"
        >
          <b-form-input
            id="input-1"
            v-model="form.uname"
            type="email"
            required
            placeholder="点这里 输入 email"
            @blur="checkUname"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="手机号:"
          label-for="input-2"
          :description="phoneinfo"
        >
          <b-form-input
            id="input-2"
            v-model="form.phone"
            required
            placeholder="Enter Phone 手机号"
            @blur="checkPhone"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="密码:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.upwd"
            required
            placeholder="输入密码"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="重复密码:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.upwd2"
            required
            placeholder="再次输入密码"
          ></b-form-input>
        </b-form-group>
        <div class="text-center">
          <b-button type="submit" variant="primary">注册</b-button>
          <b-button type="reset" variant="danger" class="ml-5">重置</b-button>
        </div>
      </b-form>
    </div>
  </b-container>
</template>

<script>
  import qs from 'qs';

  export default {
    name: "Register",
    data() {
      return {
        form: {
          uname: '',
          phone: '',
          upwd: '',
          upwd2: ''
        },
        show: true,
        unameinfo: '请输入用户名，最少6位',
        phoneinfo: '请输入手机号码'
      }
    },
    methods: {
      goRegister() {
        this.$axios.post("/user/register",qs.stringify(this.form)).then(res => {
          console.log(res)
          if(res.data.code == 200) {
            //将注册用户的uid和uname赋值到session中
            sessionStorage.uid = res.data.data.uid;
            sessionStorage.uname = res.data.data.uname;
            alert("恭喜，注册成功")
            history.go(-1);
          }
        }).catch(err => {
          console.error(err)
        })
      },
      checkUname() {
        if(!this.form.uname) {
          this.unameinfo = '用户名不能为空';
        } else if(this.form.uname.length < 6) {
          this.unameinfo = '长度不合格，最少6位'
        } else {
          this.$axios.post("/user/check_uname", qs.stringify({uname: this.form.uname})).then(res => {
            console.log(res)
            if(res.data.code == 301) {
              this.unameinfo = '用户名已存在！！！！！！！！'
            }
            if(res.data.code == 200) {
              this.unameinfo = '用户名可以使用'
            }
          }).catch(err => {
            console.log(err)
          })
        }
      },
      checkPhone() {
        if(!this.form.phone) {
          this.phoneinfo = 'phone不能为空';
        } else if(this.form.phone.length != 11) {
          this.phoneinfo = '长度不合格'
        } else {
          this.$axios.post("/user/check_phone", qs.stringify({phone: this.form.phone})).then(res => {
            console.log(res)
            if(res.data.code == 301) {
              this.phoneinfo = 'phone已存在！！！！！！！！'
            }
            if(res.data.code == 200) {
              this.phoneinfo = 'phone可以注册'
            }
          }).catch(err => {
            console.log(err)
          })
        }
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        this.goRegister();
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.uname = ''
        this.form.phone = ''
        this.form.upwd = ''
        this.form.upwd2 = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>

</style>