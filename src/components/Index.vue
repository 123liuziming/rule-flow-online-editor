<template>
  <div class="content">
    <h2>规则列表</h2>
    <el-card shadow="always" v-for="item in items" :key="item.name" style="margin-top: 10px; text-align: center;">
      <span @click="editRules(item)"><b>{{ item.name.split("_")[1] }}</b></span>
      <el-button @click="deleteRule(item)" style="float: right;" size="mini" type="danger" icon="el-icon-delete"></el-button>
    </el-card>
    <div v-if="items.length === 0">
      此用户还未定义规则，点击左下角按钮新建规则吧！
    </div>
    <el-button class="select_top_button" type="danger" @click="exit">退出系统</el-button>
    <el-button class="select_left_button" @click="addRules">添加规则</el-button>


    <el-dialog title="规则编辑" :visible.sync="dialogFormVisible">
      <el-input v-model="ruleName" placeholder="请输入规则名称"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitRules">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import state from "../assets/js/MyStorage.js"

export default {
  name: "Index",
  created() {
    let that = this;
    this.$axios.get(`drools/drl/all`, {
      params: {
        account: state.getItem("login")
      }
    }).then(res => {
      that.items = res.data;
      console.log(that.items);
    })
  },
  mounted() {
    if (!state.getItem("login")) {
      this.exit();
    }
  },
  data() {
    return {
      items: [],
      dialogFormVisible: false,
      ruleName: ""
    }
  },
  methods: {
    deleteRule(item) {
      let data = new FormData();
      data.append('id', item.name);
      this.$axios.post(`drools/drl/delete`, data).then(res => {
          if (res.data) {
            let index = this.items.indexOf(item)
            if (index !== -1) {
              this.items.splice(index, 1)
            }
            this.$notify({
              title: '成功',
              message: '成功删除规则',
              type: 'success'
            });
          }
      })
    },
    addRules() {
      this.dialogFormVisible = true;
    },
    submitRules() {
      this.dialogFormVisible = false;
      this.xmlStr.xmlStr = this.xmlStr.xmlOrigin;
      this.$router.push({path: '/Editor', query: {ruleName: this.ruleName}});
    },
    editRules(item) {
      this.$axios.get(`drools/drl/bpmns`, {
        params: {
          id: item.name
        }
      }).then(res => {
        this.xmlStr.xmlStr = res.data;
        this.$router.push({path: '/Editor', query: {ruleName: item.name.split("_")[1]}})
      })
    },
    exit() {
      state.clear();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.content {
  margin: 10vh auto 0;
  width: 80vw;
}

.select_top_button {
  position: fixed; /*固定位置*/
  z-index: 99; /*设置优先级显示，保证不会被覆盖*/
  right: 5px;
  bottom: 5px;
}

.select_left_button {
  position: fixed; /*固定位置*/
  z-index: 99; /*设置优先级显示，保证不会被覆盖*/
  left: 5px;
  bottom: 5px;
}
</style>
