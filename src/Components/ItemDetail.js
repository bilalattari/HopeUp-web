import React , {Component} from 'react';
import 'antd/dist/antd.css';
import {  Col, Row} from 'antd';
import {  FaShoppingBag , FaImage} from "react-icons/fa";
import {FiPlayCircle} from "react-icons/fi"

function ItemDetail(props) {
    return (
        <Row  className = {'mainContainerManage'} 
        gutter = {24} type = {"flex"} justify = {props.center ? "center" : "start"} style = {{width   :"100%" , border : "0px"}}  >
        <Col md = {5}>
        <Row gutter={12} type="flex" justify="center" align = "middle" >
        <Col span={10} style = {{height : 130 , width : 180 , backgroundColor : 'skyblue' ,
         display : "flex" , justifyContent : "center" , alignItems : "center"}} 
        type="flex" justify="center" >
             {
                 props.classified ? 
                 <FaImage color = {'#fff'} fontSize = {41} />
                 : props.video ? 
                 <FiPlayCircle color = {'#fff'} fontSize = {41} />
                 :
                 <FaShoppingBag color = {'#fff'} fontSize = {41} />
             }
       </Col>
      </Row>
        </Col>
        <Col md = {12}>
        <div style={{ float: 'left', height: 140 }}>
   <div style={{ height: 30, fontSize: 18, paddingTop: 5, color: '#2899fa' }}>
        Title
       </div>
   <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', lineHeight: 1.7, color: '#2899fa' }}>
       Loren Epsem jems |Loren Epsem jems |Loren Epsem jems |Loren Epsem jems
       Loren Epsem jems |Loren Epsem jems |Loren Epsem jems
       </div>
    </div>
    </Col>
    </Row>
    )
}

export default ItemDetail;