<template>
  <div class="div1">
    <h2>可视化饮食规则编辑系统</h2>
    <div>
      <el-input placeholder="账号" v-model="account"></el-input>
      <el-input style="margin-top: 3%" placeholder="密码" v-model="password" show-password></el-input>
    </div>
    <el-button style="margin-top: 5%" type="primary" plain @click="login(account, password)">登录</el-button>
  </div>
</template>

<script>
import state from "../assets/js/MyStorage.js"
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: ""
    }
  },
  mounted() {
    let item = state.getItem("login");
    if (item) {
      this.$router.push({path:'/Index',query: {id : item.value}})
    }
  },
  methods: {
    login(account, password) {
      this.$axios.get(`api/App/LoginServlet`, {
        params: {
          loginname: account,
          password: password
        }
      }).then(res => {
          if (res.data[0]['log-stat'] !== 0) {
            state.setItem({name : "login", value : account, expires: new Date().getTime() + 3600 * 1000 * 24});
            this.$router.push({path:'/Index'})
          }
      })
    }
  }
}
</script>

<style scoped>
.div1 {
  margin: 30vh auto 0;
  width: 20%;
}
</style>