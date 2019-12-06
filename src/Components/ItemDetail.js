import React , {Component} from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import { themeColor } from '../Constant';
import {  FaUserAlt   ,FaShoppingBag , FaImage , FaCcVisa} from "react-icons/fa";

function ItemDetail(props) {
    return (
        <Row  className = {'mainContainerManage'} 
        gutter = {24} type = {"flex"} justify = {props.center ? "center" : "start"} style = {{width   :"100%" , border : "0px"}}  >
        <Col md = {5}>
        <Row gutter={12} type="flex" justify="center" >
        <Col span={10} style = {{height : 130 , width : 180 , backgroundColor : 'skyblue' , 
         marginBottom : 6}} type="flex" justify="center" align = "center">
        <FaShoppingBag color = {'#fff'} fontSize = {41} style = {{marginTop : 32}} />
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