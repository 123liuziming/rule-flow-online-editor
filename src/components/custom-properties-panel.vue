<template>
  <div class="containers" ref="content">
    <div class="canvas" ref="canvas"></div>
    <properties-view v-if="bpmnModeler" :modeler="bpmnModeler"></properties-view>
    <div style="text-align: center">
      <el-button type="primary" @click="uploadDrl">上传</el-button>
    </div>
    <el-button class="select_top_button" type="danger" @click="exit">退出系统</el-button>
  </div>
</template>

<script>
// 引入相关的依赖
// import BpmnViewer from 'bpmn-js'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import PropertiesView from './custom-properties-panel/PropertiesView'
import state from "../assets/js/MyStorage"

export default {
  name: '',
  components: {
    PropertiesView
  },
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    if (!state.getItem("login")) {
      this.exit();
    }
    this.init();
    this.clear();
  },
  data() {
    return {
      // bpmn建模器
      bpmnModeler: null,
      container: null,
      canvas: null,
      xml: "",
      ruleName: ""
    }
  },
  // 方法集合
  methods: {
    exit() {
      state.clear();
      this.$router.push('/');
    },
    uploadDrl() {
      try {
        console.log("xml");
        console.log(this.xml);
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(this.xml, "text/xml");
        let sequences = xmlDoc.getElementsByTagName("sequenceFlow");
        let gateWayAttribute = new Map();
        for (let i = 0; i < sequences.length; ++i) {
          let key = sequences[i].getAttribute("sourceRef") + "," + sequences[i].getAttribute("targetRef");
          gateWayAttribute.set(key, sequences[i]);
        }
        // 限定开始节点只有一个
        let startNode = xmlDoc.getElementsByTagName("startEvent")[0];
        let tasks = xmlDoc.getElementsByTagName("task");
        let taskAttribute = new Map();
        for (let i = 0; i < tasks.length; ++i) {
          taskAttribute.set(tasks[i].getAttribute("id"), tasks[i]);
        }
        let edges = xmlDoc.getElementsByTagName("sequenceFlow");
        console.log("edges", edges);
        let linkedMap = new Map();
        for (let i = 0; i < edges.length; ++i) {
          let edge = edges[i];
          let from = edge.getAttribute("sourceRef");
          let to = edge.getAttribute("targetRef");
          if (!linkedMap.has(from)) {
            linkedMap.set(from, []);
          }
          let val = linkedMap.get(from);
          val.push(to);
          linkedMap.set(from, val);
        }
        console.log("linked map ", linkedMap);
        let result = [];
        this.dfs(linkedMap, result, [], startNode.getAttribute("id"));
        let ruleName = this.ruleName = this.$route.query.ruleName;
        let script = this.generateDrlScript(ruleName, result, gateWayAttribute, taskAttribute);
        let data = new FormData();
        data.append('droolStr', script);
        data.append('id', ruleName);
        data.append("xml", this.xml);
        data.append("account", state.getItem("login"));
        this.$axios.post(`drools/drl/upload`, data).then(res => {
          this.$notify({
            title: '成功',
            message: '成功添加规则',
            type: 'success'
          });
        })
      } catch (e) {
        this.$notify.error({
          title: '错误',
          message: '规则有误'
        });
      }
    },

    generateDrlScript(ruleName, graph, gateWayAttribute, taskAttribute) {
      let drlStr = "package droolRule\nimport com.lzm.health.constant.Sex;\n" +
          "import com.lzm.health.model.User;\n";
      console.log(graph);
      let result = new String(drlStr);
      for (let i = 0; i < graph.length; ++i) {
        result += this.generateConditions(graph[i], gateWayAttribute, taskAttribute, state.getItem("login") + "_" + ruleName + "_" + i);
      }
      return result;
    },
    replaceXml(str) {
      str = str.replaceAll(/,/g, "&&")
          .replaceAll(/&#38;&#38;/g, "&&")
          .replaceAll(/&#62;/g, ">")
          .replaceAll(/&#60;/g, "<")
          .replaceAll(/User/g, "$user");
      return str;
    },
    generateConditions(edges, gateWayAttribute, taskAttribute, ruleName) {
      console.log(gateWayAttribute, taskAttribute);
      let result = "rule" + "\"" + ruleName + "\"\nwhen\n$user:User(";
      console.log("edges " + edges)
      for (let i = 1; i < edges.length - 1; ++i) {
        let key = edges[i] + "," + edges[i + 1];
        let val = gateWayAttribute.get(key);
        let ageCondition = val.getAttribute("conditionAge");
        if (ageCondition) {
          ageCondition = this.replaceXml(ageCondition)
        }
        let sexCondition = val.getAttribute("conditionSex");
        if (sexCondition) {
          sexCondition = this.replaceXml(sexCondition);
        }
        try {
          var conditionJson = JSON.parse(val.getAttribute("conditionNutrition").replaceAll("&#34;", ""));
        } catch (e) {
          conditionJson = null;
        }
        let nutritionCondition = "";
        if (conditionJson) {
          for (let condition of conditionJson) {
            let nutrition = condition["nutrition"];
            if (nutrition === "") {
              continue;
            }
            let left = condition["left"];
            let right = condition["right"];
            if (left === '-INF' && right === 'INF') {
              continue;
            }
            if (left !== "-INF") {
              nutritionCondition += ("$user." + nutrition)
              nutritionCondition += (" >= " + left + " && ");
            }
            if (right !== "INF") {
              nutritionCondition += ("$user." + nutrition)
              nutritionCondition += (" <= " + right + " && ");
            }
          }
        }
        if (nutritionCondition) {
          nutritionCondition = this.replaceXml(nutritionCondition);
          if (nutritionCondition.endsWith(" && ")) {
            nutritionCondition = nutritionCondition.slice(0, -4);
          }
        }

        try {
          var bioJson = JSON.parse(val.getAttribute("conditionBio").replaceAll("&#34;", ""));
        } catch (e) {
          conditionJson = null;
        }
        let bioCondition = "";
        if (bioJson) {
          for (let condition of bioJson) {
            let nutrition = condition["nutrition"];
            if (nutrition === "") {
              continue;
            }
            let left = condition["left"];
            let right = condition["right"];
            if (left === '-INF' && right === 'INF') {
              continue;
            }
            if (left !== "-INF") {
              bioCondition += ("$user." + nutrition)
              bioCondition += (" >= " + left + " && ");
            }
            if (right !== "INF") {
              bioCondition += ("$user." + nutrition)
              bioCondition += (" <= " + right + " && ");
            }
          }
        }
        if (bioCondition) {
          bioCondition = this.replaceXml(bioCondition);
          if (bioCondition.endsWith(" && ")) {
            bioCondition = bioCondition.slice(0, -4);
          }
        }


        if (ageCondition) {
          result += (ageCondition + " && ");
        }
        if (sexCondition && sexCondition.length) {
          result += ("$user.sex==" + sexCondition + " && ");
        }
        if (nutritionCondition && nutritionCondition.length) {
          result += (nutritionCondition + " && ");
        }
        if (bioCondition && bioCondition.length) {
          result += (bioCondition + " && ");
        }
        console.log("condition is below ");
        console.log(nutritionCondition);
      }
      if (result.endsWith(" && ")) {
        result = result.slice(0, -4);
      }
      result += ")\nthen\n$user.setFoods(\"" + taskAttribute.get(edges[edges.length - 1]).getAttribute("foodIdxs") + "\");\nend\n";
      //result = result("User", "$user");
      return result;
    },
    dfs(linkedMap, result, tmp, current) {
      if (!linkedMap.has(current)) {
        tmp.push(current);
        result.push([...tmp]);
        tmp.pop();
        return;
      }
      let tos = linkedMap.get(current);
      for (let i = 0; i < tos.length; ++i) {
        let to = tos[i];
        tmp.push(current);
        this.dfs(linkedMap, result, tmp, to);
        tmp.pop();
      }
    },
    clear() {
      let classes = [
        'bpmn-icon-lasso-tool',
        'bpmn-icon-space-tool',
        'bpmn-icon-intermediate-event-none',
        'bpmn-icon-subprocess-expanded',
        'bpmn-icon-data-object',
        'bpmn-icon-participant',
        'bpmn-icon-group',
        'bpmn-icon-data-store',
        'bpmn-icon-intermediate-event-none',
        'bpmn-icon-end-event-none'
      ];
      for (let i = 0; i < classes.length; ++i) {
        let x = document.getElementsByClassName(classes[i]);
        for (let j = 0; j < x.length; ++j) {
          x[j].style.display = 'none';
        }
      }
    },
    init() {
      // 获取到属性ref为“content”的dom节点
      this.container = this.$refs.content
      // 获取到属性ref为“canvas”的dom节点
      const canvas = this.$refs.canvas
      // 建模
      this.bpmnModeler = new BpmnModeler({
        container: canvas
      })
      this.createNewDiagram()
    },
    importXml() {
      this.bpmnModeler.importXML(this.xmlStr.xmlStr, err => {
        if (err) {
          // console.error(err)
        } else {
          // 这里是成功之后的回调, 可以在这里做一系列事情
          this.xml = this.xmlStr.xmlStr;
          this.success();
        }
      })
    },
    createNewDiagram() {
      // 将字符串转换成图显示出来
      console.log("xml is :" + this.xmlStr.xmlStr);
      if (this.xmlStr.xmlStr !== '') {
        this.xml = this.xmlStr.xmlStr;
        this.importXml();
      }
      else {
        this.$axios.get(`drools/drl/bpmns`, {
          params: {
            id: state.getItem("login") + "_" + this.$route.query.ruleName
          }
        }).then(res => {
          if (res.data !== "fail") {
            this.xmlStr.xmlStr = res.data;
            console.log("xml is :" + this.xmlStr.xmlStr);
            this.importXml();
          }
          else {
            this.$router.push({path: '/Index'})
          }
        })
      }
    },
    success() {
      // 给图绑定事件，当图有发生改变就会触发这个事件
      const that = this
      this.bpmnModeler.on('commandStack.changed', function () {
        that.saveDiagram(function (err, xml) {
          console.log(xml);
          that.xml = xml;
          that.xmlStr.xmlStr = xml;
          let edits = document.getElementsByClassName('djs-direct-editing-content')
          for (let i = 0; i < edits.length; ++i) {
            edits[i].style.display = "none"
          }
        })
      })
    },
    // 下载为bpmn格式,done是个函数，调用的时候传入的
    saveDiagram(done) {
      // 把传入的done再传给bpmn原型的saveXML函数调用
      this.bpmnModeler.saveXML({format: true}, function (err, xml) {
        done(err, xml)
      })
    }
  },
  // 计算属性
  computed: {}
}
</script>

<style scoped>
.containers {
  background-color: #ffffff;
  width: 100%;
  height: calc(100vh - 52px);
}

.canvas {
  width: 100%;
  height: 100%;
}

.panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
}

.select_top_button {
  position: fixed; /*固定位置*/
  z-index: 99; /*设置优先级显示，保证不会被覆盖*/
  right: 5px;
  bottom: 5px;
}
</style>
