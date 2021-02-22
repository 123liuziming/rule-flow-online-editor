export var xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="Process_1" isExecutable="false">
    <startEvent id="StartEvent_1y45yut" name="开始">
      <outgoing>SequenceFlow_0axjzmr</outgoing>
    </startEvent>
    <exclusiveGateway id="ExclusiveGateway_0seru6x">
      <incoming>SequenceFlow_0axjzmr</incoming>
      <outgoing>SequenceFlow_0vw1osn</outgoing>
      <outgoing>SequenceFlow_13lt717</outgoing>
    </exclusiveGateway>
    <exclusiveGateway id="ExclusiveGateway_1ibh9ai">
      <incoming>SequenceFlow_13lt717</incoming>
      <outgoing>SequenceFlow_0hs8ylm</outgoing>
    </exclusiveGateway>
    <exclusiveGateway id="ExclusiveGateway_14upckk">
      <incoming>SequenceFlow_0vw1osn</incoming>
      <outgoing>SequenceFlow_0oxkk1r</outgoing>
    </exclusiveGateway>
    <task id="Task_16tnhe6" foods="">
      <incoming>SequenceFlow_0oxkk1r</incoming>
    </task>
    <task id="Task_1gi5p2v" foods="">
      <incoming>SequenceFlow_0hs8ylm</incoming>
    </task>
    <sequenceFlow id="SequenceFlow_0axjzmr" sourceRef="StartEvent_1y45yut" targetRef="ExclusiveGateway_0seru6x" />
    <sequenceFlow id="SequenceFlow_0vw1osn" sourceRef="ExclusiveGateway_0seru6x" targetRef="ExclusiveGateway_14upckk" />
    <sequenceFlow id="SequenceFlow_13lt717" sourceRef="ExclusiveGateway_0seru6x" targetRef="ExclusiveGateway_1ibh9ai" />
    <sequenceFlow id="SequenceFlow_0oxkk1r" sourceRef="ExclusiveGateway_14upckk" targetRef="Task_16tnhe6" />
    <sequenceFlow id="SequenceFlow_0hs8ylm" sourceRef="ExclusiveGateway_1ibh9ai" targetRef="Task_1gi5p2v" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
        <omgdc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="160" y="145" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_0seru6x_di" bpmnElement="ExclusiveGateway_0seru6x" isMarkerVisible="true">
        <omgdc:Bounds x="235" y="95" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_1ibh9ai_di" bpmnElement="ExclusiveGateway_1ibh9ai" isMarkerVisible="true">
        <omgdc:Bounds x="325" y="185" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_14upckk_di" bpmnElement="ExclusiveGateway_14upckk" isMarkerVisible="true">
        <omgdc:Bounds x="325" y="45" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_16tnhe6_di" bpmnElement="Task_16tnhe6">
        <omgdc:Bounds x="460" y="30" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1gi5p2v_di" bpmnElement="Task_1gi5p2v">
        <omgdc:Bounds x="460" y="190" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0axjzmr_di" bpmnElement="SequenceFlow_0axjzmr">
        <omgdi:waypoint x="188" y="120" />
        <omgdi:waypoint x="235" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0vw1osn_di" bpmnElement="SequenceFlow_0vw1osn">
        <omgdi:waypoint x="260" y="95" />
        <omgdi:waypoint x="260" y="70" />
        <omgdi:waypoint x="325" y="70" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="245" y="80" width="62" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_13lt717_di" bpmnElement="SequenceFlow_13lt717">
        <omgdi:waypoint x="260" y="145" />
        <omgdi:waypoint x="260" y="210" />
        <omgdi:waypoint x="325" y="210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0oxkk1r_di" bpmnElement="SequenceFlow_0oxkk1r">
        <omgdi:waypoint x="375" y="70" />
        <omgdi:waypoint x="460" y="70" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0hs8ylm_di" bpmnElement="SequenceFlow_0hs8ylm">
        <omgdi:waypoint x="375" y="210" />
        <omgdi:waypoint x="460" y="210" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`
