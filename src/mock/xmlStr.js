
export default {xmlStr : `
   <?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="Process_1" isExecutable="false">
    <startEvent id="StartEvent_1y45yut" name="开始">
      <outgoing>SequenceFlow_1k8r5d8</outgoing>
    </startEvent>
    <exclusiveGateway id="ExclusiveGateway_1efrt3x">
      <incoming>SequenceFlow_1k8r5d8</incoming>
      <outgoing>SequenceFlow_09zmw44</outgoing>
      <outgoing>SequenceFlow_02y9kct</outgoing>
    </exclusiveGateway>
    <exclusiveGateway id="ExclusiveGateway_0zqj6zo">
      <incoming>SequenceFlow_09zmw44</incoming>
      <outgoing>SequenceFlow_1gvnxw2</outgoing>
      <outgoing>SequenceFlow_0jvxdm7</outgoing>
    </exclusiveGateway>
    <exclusiveGateway id="ExclusiveGateway_0y2ztfz">
      <incoming>SequenceFlow_02y9kct</incoming>
      <outgoing>SequenceFlow_0nqx5bg</outgoing>
      <outgoing>SequenceFlow_0we4f62</outgoing>
    </exclusiveGateway>
    <sequenceFlow id="SequenceFlow_1k8r5d8" sourceRef="StartEvent_1y45yut" targetRef="ExclusiveGateway_1efrt3x" />
    <sequenceFlow id="SequenceFlow_09zmw44" name="性别判定 判定元素:" sourceRef="ExclusiveGateway_1efrt3x" targetRef="ExclusiveGateway_0zqj6zo" conditionSex="Sex.MALE" />
    <sequenceFlow id="SequenceFlow_02y9kct" name="性别判定 判定元素:" sourceRef="ExclusiveGateway_1efrt3x" targetRef="ExclusiveGateway_0y2ztfz" conditionSex="Sex.FEMALE" />
    <task id="Task_17gbcq4" foods="[object Object],[object Object]" foodIdxs="4,5">
      <incoming>SequenceFlow_1gvnxw2</incoming>
    </task>
    <task id="Task_1t56fdr" foods="[object Object]" foodIdxs="72">
      <incoming>SequenceFlow_0jvxdm7</incoming>
    </task>
    <task id="Task_1p68mh2" foods="[object Object]" foodIdxs="99">
      <incoming>SequenceFlow_0nqx5bg</incoming>
    </task>
    <task id="Task_0pn09o9" foods="[object Object]" foodIdxs="100">
      <incoming>SequenceFlow_0we4f62</incoming>
    </task>
    <sequenceFlow id="SequenceFlow_1gvnxw2" name=" 年龄判定 判定元素:" sourceRef="ExclusiveGateway_0zqj6zo" targetRef="Task_17gbcq4" conditionNutrition="水,User.water &#62; 50 &#38;&#38; User.water &#60; 80" conditionAge="User.age &#38;#62; 18" />
    <sequenceFlow id="SequenceFlow_0jvxdm7" name=" 年龄判定 判定元素:" sourceRef="ExclusiveGateway_0zqj6zo" targetRef="Task_1t56fdr" conditionNutrition="水,User.water &#60; 10" conditionAge="User.age &#38;#62; 1 &#38;#38;&#38;#38; User.age &#38;#60; 2" />
    <sequenceFlow id="SequenceFlow_0nqx5bg" name=" 年龄判定 判定元素:" sourceRef="ExclusiveGateway_0y2ztfz" targetRef="Task_1p68mh2" conditionNutrition="水,User.water &#60; 10" conditionAge="User.age &#38;#62; 2 &#38;#38;&#38;#38; User.age &#38;#60; 3" />
    <sequenceFlow id="SequenceFlow_0we4f62" name=" 年龄判定 判定元素:" sourceRef="ExclusiveGateway_0y2ztfz" targetRef="Task_0pn09o9" conditionNutrition="水,User.water &#60; 10" conditionAge="User.age &#38;#62; 3 &#38;#38;&#38;#38; User.age &#38;#60; 4" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
        <omgdc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="160" y="145" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_1efrt3x_di" bpmnElement="ExclusiveGateway_1efrt3x" isMarkerVisible="true">
        <omgdc:Bounds x="255" y="105" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_0zqj6zo_di" bpmnElement="ExclusiveGateway_0zqj6zo" isMarkerVisible="true">
        <omgdc:Bounds x="375" y="45" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_0y2ztfz_di" bpmnElement="ExclusiveGateway_0y2ztfz" isMarkerVisible="true">
        <omgdc:Bounds x="375" y="205" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1k8r5d8_di" bpmnElement="SequenceFlow_1k8r5d8">
        <omgdi:waypoint x="188" y="120" />
        <omgdi:waypoint x="222" y="120" />
        <omgdi:waypoint x="222" y="130" />
        <omgdi:waypoint x="255" y="130" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_09zmw44_di" bpmnElement="SequenceFlow_09zmw44">
        <omgdi:waypoint x="280" y="105" />
        <omgdi:waypoint x="280" y="70" />
        <omgdi:waypoint x="375" y="70" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="271" y="85" width="48" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_02y9kct_di" bpmnElement="SequenceFlow_02y9kct">
        <omgdi:waypoint x="280" y="155" />
        <omgdi:waypoint x="280" y="230" />
        <omgdi:waypoint x="375" y="230" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="271" y="190" width="48" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_17gbcq4_di" bpmnElement="Task_17gbcq4">
        <omgdc:Bounds x="500" y="30" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1t56fdr_di" bpmnElement="Task_1t56fdr">
        <omgdc:Bounds x="500" y="140" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1p68mh2_di" bpmnElement="Task_1p68mh2">
        <omgdc:Bounds x="500" y="270" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0pn09o9_di" bpmnElement="Task_0pn09o9">
        <omgdc:Bounds x="500" y="410" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1gvnxw2_di" bpmnElement="SequenceFlow_1gvnxw2">
        <omgdi:waypoint x="425" y="70" />
        <omgdi:waypoint x="500" y="70" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="423" y="52" width="81" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0jvxdm7_di" bpmnElement="SequenceFlow_0jvxdm7">
        <omgdi:waypoint x="400" y="95" />
        <omgdi:waypoint x="400" y="180" />
        <omgdi:waypoint x="500" y="180" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="375" y="135" width="81" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0nqx5bg_di" bpmnElement="SequenceFlow_0nqx5bg">
        <omgdi:waypoint x="400" y="255" />
        <omgdi:waypoint x="400" y="310" />
        <omgdi:waypoint x="500" y="310" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="375" y="280" width="81" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0we4f62_di" bpmnElement="SequenceFlow_0we4f62">
        <omgdi:waypoint x="400" y="255" />
        <omgdi:waypoint x="400" y="470" />
        <omgdi:waypoint x="500" y="470" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="375" y="360" width="81" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
`}
