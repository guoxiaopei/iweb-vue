<template>
  <b-container>
    <b-row>
      <b-col cols="7">
        <b-form @submit="onSubmit" class="w-50 my-5 mx-auto">
          <b-form-group
            id="input-group-1"
            label="用户名/手机号:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.uname"
              required
              placeholder="Enter 用户名or手机号"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="密码:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.upwd"
              required
              placeholder="Enter 密码"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="checked" id="checkboxes-4">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary" :disabled="isDo">登陆</b-button>
        </b-form>
      </b-col>
      <b-col cols="5">

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import qs from "qs";
export default {
  name: "Login",
  data () {
    return {
      form: {
          uname: '',
          upwd: '',
      },
      checked: []
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      console.log(JSON.stringify(this.form))
      console.log(qs.stringify(this.form))
      console.log(this.checked);
      if(!this.form.uname) {
        alert('用户名不能为空')
        return;
      }
      if(!this.form.upwd) {
        alert('密码不能为空')
        return;
      }
      this.$axios.post("/user/login", qs.stringify(this.form)).then(res => {
        if(res.data.code == 200) {
          sessionStorage.uid = res.data.data.uid;
          sessionStorage.uname = res.data.data.uname;
          alert("登陆成功");
          this.$router.push("/");
          location.reload();
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  computed: {
    isDo() {
      return this.checked[0] !== "me";
    }
  }
}
</script>

<style>

</style>