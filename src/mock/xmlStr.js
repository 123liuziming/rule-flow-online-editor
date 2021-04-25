
export default {xmlStr : `
 <?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="Process_1" isExecutable="false">
    <startEvent id="StartEvent_0hom1ks">
      <outgoing>SequenceFlow_0idhu6i</outgoing>
    </startEvent>
    <exclusiveGateway id="ExclusiveGateway_1vrbxuw">
      <incoming>SequenceFlow_0idhu6i</incoming>
      <outgoing>SequenceFlow_0j35out</outgoing>
      <outgoing>SequenceFlow_1n3twlp</outgoing>
    </exclusiveGateway>
    <task id="Task_1v60i5e" foods="[object Object],[object Object]" foodIdxs="3,4">
      <incoming>SequenceFlow_0j35out</incoming>
    </task>
    <task id="Task_0q44499" foods="[object Object]" foodIdxs="8">
      <incoming>SequenceFlow_1n3twlp</incoming>
    </task>
    <sequenceFlow id="SequenceFlow_0idhu6i" sourceRef="StartEvent_0hom1ks" targetRef="ExclusiveGateway_1vrbxuw" />
    <sequenceFlow id="SequenceFlow_0j35out" sourceRef="ExclusiveGateway_1vrbxuw" targetRef="Task_1v60i5e" conditionNutrition="[{&#34;nutrition&#34;:&#34;fat&#34;,&#34;range&#34;:[0,10]},{&#34;nutrition&#34;:&#34;fiber&#34;,&#34;range&#34;:[0,10]}]" />
    <sequenceFlow id="SequenceFlow_1n3twlp" sourceRef="ExclusiveGateway_1vrbxuw" targetRef="Task_0q44499" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_1y45yut_di">
        <omgdc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="160" y="145" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_1efrt3x_di" isMarkerVisible="true">
        <omgdc:Bounds x="255" y="105" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_0zqj6zo_di" isMarkerVisible="true">
        <omgdc:Bounds x="375" y="45" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_0y2ztfz_di" isMarkerVisible="true">
        <omgdc:Bounds x="375" y="205" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1k8r5d8_di">
        <omgdi:waypoint x="188" y="120" />
        <omgdi:waypoint x="222" y="120" />
        <omgdi:waypoint x="222" y="130" />
        <omgdi:waypoint x="255" y="130" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_09zmw44_di">
        <omgdi:waypoint x="280" y="105" />
        <omgdi:waypoint x="280" y="70" />
        <omgdi:waypoint x="375" y="70" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="271" y="85" width="48" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_02y9kct_di">
        <omgdi:waypoint x="280" y="155" />
        <omgdi:waypoint x="280" y="230" />
        <omgdi:waypoint x="375" y="230" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="271" y="190" width="48" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_17gbcq4_di">
        <omgdc:Bounds x="500" y="30" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1t56fdr_di">
        <omgdc:Bounds x="500" y="140" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1p68mh2_di">
        <omgdc:Bounds x="500" y="270" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0pn09o9_di">
        <omgdc:Bounds x="500" y="410" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1gvnxw2_di">
        <omgdi:waypoint x="425" y="70" />
        <omgdi:waypoint x="500" y="70" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="423" y="52" width="81" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0jvxdm7_di">
        <omgdi:waypoint x="400" y="95" />
        <omgdi:waypoint x="400" y="180" />
        <omgdi:waypoint x="500" y="180" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="375" y="135" width="81" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0nqx5bg_di">
        <omgdi:waypoint x="400" y="255" />
        <omgdi:waypoint x="400" y="310" />
        <omgdi:waypoint x="500" y="310" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="375" y="280" width="81" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0we4f62_di">
        <omgdi:waypoint x="400" y="255" />
        <omgdi:waypoint x="400" y="470" />
        <omgdi:waypoint x="500" y="470" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="375" y="360" width="81" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_0hom1ks_di" bpmnElement="StartEvent_0hom1ks">
        <omgdc:Bounds x="172" y="222" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_1vrbxuw_di" bpmnElement="ExclusiveGateway_1vrbxuw" isMarkerVisible="true">
        <omgdc:Bounds x="265" y="215" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1v60i5e_di" bpmnElement="Task_1v60i5e">
        <omgdc:Bounds x="430" y="140" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0q44499_di" bpmnElement="Task_0q44499">
        <omgdc:Bounds x="430" y="290" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0idhu6i_di" bpmnElement="SequenceFlow_0idhu6i">
        <omgdi:waypoint x="208" y="240" />
        <omgdi:waypoint x="265" y="240" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0j35out_di" bpmnElement="SequenceFlow_0j35out">
        <omgdi:waypoint x="290" y="215" />
        <omgdi:waypoint x="290" y="180" />
        <omgdi:waypoint x="430" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1n3twlp_di" bpmnElement="SequenceFlow_1n3twlp">
        <omgdi:waypoint x="290" y="265" />
        <omgdi:waypoint x="290" y="360" />
        <omgdi:waypoint x="430" y="360" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>

`}
