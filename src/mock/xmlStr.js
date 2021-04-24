
export default {xmlStr : `
   <?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="Process_1" isExecutable="false">
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
