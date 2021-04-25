<template>
  <div class="custom-properties-panel">
    <div class="empty" v-if="selectedElements.length <= 0">请选择一个元素</div>
    <div class="empty" v-else-if="selectedElements.length > 1">只能选择一个元素</div>
    <div v-else>
      <fieldset class="element-item">
        <label>id</label>
      </fieldset>
      <fieldset class="element-item">
        <label>name</label>
        <input v-model="element.name" @change="event => changeField(event, 'name', element.name)"/>
      </fieldset>
      <fieldset class="element-item" v-if="element.type === 'bpmn:Task'">
        <label>食物列表</label>
        <kr-paging
            :dataList="foods"
            :selectedData="element.selectedData"
            :pageSize="100"
            @onChange="onChange($event, element)"
        ></kr-paging>
      </fieldset>
      <fieldset class="element-item"
                v-if="element.type === 'bpmn:SequenceFlow' && element.businessObject.sourceRef.$type === 'bpmn:ExclusiveGateway'">
        <label>营养元素判定</label>
        <el-form v-model="element.conditions" ref="element.conditions">
          <div>
            {{element.conditions}}
          </div>
          <el-form-item
              v-for="(domain, index) in element.conditions"
              :label="'元素' + index"
              :key="index"
              :rules="{required: true, message: '元素不能为空', trigger: 'blur'}">
            <div style="display: flex">
              <el-select v-model="domain.nutrition" @change="onConditionChange(element)" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
              <el-input
                  style="width: 20%; margin-left: 5%"
                  placeholder="元素最小值"
                  v-model="domain.left"
                  clearable>
              </el-input>
              <el-input
                  style="width: 20%; margin-left: 5%"
                  placeholder="元素最大值"
                  v-model="domain.right"
                  clearable>
              </el-input>
              <el-button style="margin-left: 3%" @click.prevent="removeDomain(element, domain)">删除</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button @click="addDomain(element)">新增元素</el-button>
          </el-form-item>
        </el-form>
        <div>
          <label>患者身体状况</label>
          <el-select v-model="element.age" placeholder="请选择" @change="onConditionChange(element)">
            <el-option
                v-for="item in ages"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <div style="display: flex">
            <div><b>性别:</b></div>
            <el-radio style="margin-top: 5px" @change="onConditionChange(element)" v-model="element.sex"
                      label="Sex.MALE">男
            </el-radio>
            <el-radio style="margin-top: 5px" @change="onConditionChange(element)" v-model="element.sex"
                      label="Sex.FEMALE">女
            </el-radio>
          </div>
          <div v-if="element.sex === 'women'">
            <div><b>是否是孕妇:</b></div>
            <el-radio @change="onConditionChange(element)" v-model="element.pregnant" label="true">是
            </el-radio>
            <el-radio @change="onConditionChange(element)" v-model="element.pregnant" label="false">否
            </el-radio>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import {
  ages,
  options,
  foodNames
} from "../../assets/js/condition";

export default {
  name: 'PropertiesView',
  props: {
    modeler: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      foods: foodNames,
      props: {multiple: true},
      ages: ages,
      options: options,
      nodeName: "",
      selectedElements: [],
      // key是element,value是选中的元素
      selectedMap: null,
      element: null,
      eventType: '',
      taskType: '',
    }
  },
  created() {
    this.init();
  },

  methods: {
    addDomain(element) {
      if (!element.conditions) {
        this.$set(element, "conditions", []);
      }
      this.$set(element.conditions, element.conditions.length, {nutrition: '', left: "-INF", right: "INF"});
      //element.conditions.push({nutrition: '', range: [0, 10]});
      this.onConditionChange(element);
    },
    removeDomain(element, item) {
      var index = element.conditions.indexOf(item)
      if (index !== -1) {
        element.conditions.splice(index, 1)
      }
      this.onConditionChange(element);
    },
    onChange(val, element) {
      console.log(element);
      element.selectedData = []
      for (let i = 0; i < val.length; ++i) {
        element.selectedData.push(this.foods[val[i] - 1]);
      }
      this.changeField(null, "foods", element.selectedData);
      this.changeField(null, "foodIdxs", val);
      console.log('已选中：', val)
      console.log(element);
    },
    onConditionChange(element) {
      console.log("condition change ", element);
      this.changeField(null, "conditionAge", element.age);
      this.changeField(null, "conditionSex", element.sex);
      this.changeField(null, "conditionNutrition", JSON.stringify(element.conditions));
    },
    clear() {
      let classes = [
        'bpmn-icon-intermediate-event-none',
        'bpmn-icon-screw-wrench',
      ];
      for (let i = 0; i < classes.length; ++i) {
        let x = document.getElementsByClassName(classes[i]);
        for (let j = 0; j < x.length; ++j) {
          x[j].style.display = 'none';
        }
      }
    },
    init() {
      const {modeler} = this
      modeler.on('selection.changed', e => {
        this.selectedElements = e.newSelection
        this.element = e.newSelection[0];
        console.log("element changed", this.element);
        console.log(this.xmlStr.xmlStr);
        if (this.element) {
          if (!this.element.sex && this.element.businessObject.$attrs.conditionSex) {
            this.element.sex = this.element.businessObject.$attrs.conditionSex;
          }
          if (!this.element.age && this.element.businessObject.$attrs.conditionAge) {
            this.element.age = this.element.businessObject.$attrs.conditionAge;
          }
          if (!this.element.conditions && this.element.businessObject.$attrs.conditionNutrition) {
            this.$set(this.element, "conditions", JSON.parse(this.element.businessObject.$attrs.conditionNutrition.replaceAll("&#34;", "")));
          }
          if (!this.element.selectedData && this.element.businessObject.$attrs.foodIdxs) {
            let indexs = this.element.businessObject.$attrs.foodIdxs.split(",");
            let objects = [];
            for (let index of indexs) {
              objects.push(foodNames[parseInt(index) - 1]);
            }
            this.element.selectedData = objects;
          }
          this.setDefaultProperties();
          this.clear();
        }
      });
      modeler.on('element.changed', e => {
        const {element} = e
        const {element: currentElement} = this
        if (!currentElement) {
          return
        }
        // update panel, if currently selected element changed
        if (element.id === currentElement.id) {
          this.element = element
        }
        this.clear();
      })
    },
    setDefaultProperties() {
      const {element} = this
      if (element) {
        const {type, businessObject} = element
        const {name} = businessObject
        if (this.verifyIsEvent(type)) {
          this.eventType = businessObject.eventDefinitions ? businessObject.eventDefinitions[0]['$type'] : ''
        } else if (this.verifyIsTask(type)) {
          this.taskType = type
        }
        element['name'] = name
      }
    },
    verifyIsEvent(type) {
      return type.includes('Event')
    },
    verifyIsTask(type) {
      return type.includes('Task')
    },
    /**
     * 改变控件触发的事件
     * @param { Object } input的Event
     * @param { String } 要修改的属性的名称
     */
    changeField(event, type, value) {
      this.element[type] = value
      let properties = {}
      properties[type] = value
      if (type === 'color') {
        this.onChangeColor(value)
      }
      this.updateProperties(properties)
    },
    updateName(name) {
      const {modeler, element} = this
      const modeling = modeler.get('modeling')
      modeling.updateLabel(element, name)
    },
    onChangeColor(color) {
      console.log(color)
      const {modeler, element} = this
      const modeling = this.modeler.get('modeling')
      modeling.setColor(element, {
        fill: null,
        stroke: color
      })
    },
    changeEventType(event) {
      console.log(event)
      const {modeler, element} = this
      const value = event.target.value
      const bpmnReplace = modeler.get('bpmnReplace')
      this.eventType = value
      bpmnReplace.replaceElement(element, {
        type: element.businessObject.$type,
        eventDefinitionType: value
      })
    },
    changeTaskType(event) {
      console.log(event)
      const {modeler, element} = this
      const value = event.target.value
      const bpmnReplace = modeler.get('bpmnReplace')
      bpmnReplace.replaceElement(element, {
        type: value
      })
    },
    /**
     * 更新元素属性
     * @param { Object } 要更新的属性, 例如 { name: '' }
     */
    updateProperties(properties) {
      const {modeler, element} = this
      const modeling = modeler.get('modeling')
      modeling.updateProperties(element, properties)
    }
  },
  computed: {
    isEvent() {
      const {element} = this
      return this.verifyIsEvent(element.type)
    },
    isTask() {
      const {element} = this
      return this.verifyIsTask(element.type)
    }
  }
}
</script>

<style scoped>
.custom-properties-panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
  background-color: #fff9f9;
  border-color: rgba(0, 0, 0, 0.09);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  padding: 20px;
}

.empty {
  height: 200px;
  line-height: 200px;
  font-weight: 700;
}

.element-item {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid;
  border-color: darkorange;
  border-radius: 8px;
}

.element-item:first-child {
  margin-top: 0;
}

.custom-properties-panel input,
.custom-properties-panel textarea {
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
  outline: none;
}

.custom-properties-panel input:focus,
.custom-properties-panel button:focus,
.custom-properties-panel textarea:focus,
.custom-properties-panel [contenteditable]:focus {
  border-color: rgb(239, 112, 96);
  box-shadow: 0 0 1px 2px rgb(239, 112, 96, 0.2);
}

.custom-properties-panel label {
  font-weight: bold;
}

.custom-properties-panel label:after {
  content: ': ';
}

.custom-properties-panel button + button {
  margin-left: 10px;
}
</style>
