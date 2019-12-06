import React , {Component} from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import { themeColor } from '../Constant';
import {  FaUserAlt   ,FaShoppingBag , FaImage , FaCcVisa} from "react-icons/fa";

function Order(props) {
    return (
            <div gutter = {24} type = {'flex'} justify = 'center'  style = {{margin : 8 }} >
                     <Row gutter = {20} type = {"flex"} justify = {"center"}>
                         <Col md = {4}>
                             <FaImage fontSize = {56} color = {themeColor} />
                         </Col>
                         <Col md = {11} 
                         type = {"flex"} justify = {"center"} className = {"orderTitle"}>
                             <span className = {"orderDesc"}>{props.title}</span>
                         </Col>
                         <Col md = {4} style = {{marginLeft : 12}} className = {"orderTitle"}>
                             <span className = {"orderDesc"}>{props.qty}</span>
                         </Col>
                    </Row>
                    <Row gutter = {20} type = {"flex"} justify = {"center"}>
                         <Col lg = {20} 
                         type = {"flex"} justify = {"center"}
                         className = {"orderTitle"}
                         style = {{ minHeight : 120 ,width : "78%" , alignItems : 'flex-start' }}>
                             <span className = {"orderDesc"} style = {{marginTop : 12}}>
                                 {props.description}</span>
                         </Col>
                    </Row>
                </div>
    )
}

export default Order;