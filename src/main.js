import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import krryTransfer from 'krry-transfer'
import xmlStr from './mock/xmlStr'
Vue.config.productionTip = false
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.xmlStr = xmlStr;
Vue.use(krryTransfer)
    // 以下为bpmn工作流绘图工具的样式
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css' // 右边工具栏样式
// import 'bpmn-js-in-color/colors/color-picker.css'
import './styles/bpmn-properties-theme-red.css'
// import './styles/bpmn-properties-theme-blue.css'
// import './styles/bpmn-properties-theme-black.css'
import './styles/bpmn-custom-color.css'

Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
