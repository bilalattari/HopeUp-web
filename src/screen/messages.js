
import React from 'react';
import {  FaArrowRight } from "react-icons/fa";

import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import { themeColor } from '../Constant';
import {  FaUserAlt   ,FaShoppingBag , FaImage , FaCcVisa} from "react-icons/fa";
import {  IoIosClose} from "react-icons/io";
import Container from '../container';
const { Search } = Input;

function Messages() {

    const chatName = () => {
        return (
            <Row gutter = {24} mt = {4} type = {'flex'} justify = {"center"} 
            align = {"middle"} style = {{height : 70 , borderBottom : "1px solid skyblue", 
            cursor : "pointer"}}>
            <Col span = {4}>
                <div style={{ width: 45,  height: 45,  display : "flex" , justifyContent :"center", 
                 alignItems: 'center', backgroundColor: '#2899fa'  , borderRadius : 2}}>
                    <FaUserAlt style={{ color: '#FFFFFF', fontSize: 20}} />
                </div>
            </Col>
            <Col span = {15}>
                <div style={{   height: 50,  display : "flex" , alignItems: 'center' }}>
                <span>Username</span>
                </div>
            </Col>
            <Col span = {3}>
                <div style={{   height: 50,  display : "flex" , alignItems: 'center' }}>
                <span>2d</span>
                </div>
            </Col>
            </Row>
        )
    }

    const chatDataRight = () => {
        return (
            <div style={{ width: '60%', display: 'flex', margin: '10px 5px 10px 40%', alignItems: 'center' }}>
                <div style={{ width: '83%', textAlign: 'right', backgroundColor: '#FFFFFF',
                 color:'#2899fa',padding: '10px' }}>
                Lorem spum dir dsa das d adsasd  das d adsasd
                 das d adsasd das d adsasd

                </div>
                <div style={{ width: 42, marginLeft: '3%', marginRight: '4%', height: 40, borderRadius : 2,
                 float: 'left',display : 'flex' , justifyContent : 'center',  alignItems: 'center',
                  backgroundColor: '#2899fa' }}>
                    <FaUserAlt style={{ color: '#FFFFFF', fontSize: 16, }} />
                </div>
            </div>
        )
    }

    const chatDataLeft = () => {
        return (
            <div style={{ width: '60%', display: 'flex', margin: '10px 5px', alignItems: 'center' }}>
                <div style={{ width: 42, marginLeft: '5%', marginRight: '2%', height: 40, borderRadius : 2,
                 float: 'left', display : 'flex' , justifyContent : 'center',  alignItems: 'center', backgroundColor: '#2899fa' }}>
                    <FaUserAlt style={{ color: '#FFFFFF', fontSize: 16, }} />
                </div>
                <div style={{ width: '83%', backgroundColor: '#2899fa', color:'#FFFFFF', padding: '10px' }}>
                Lorem spum dir dsa das d adsasd
                </div>
            </div>
        )
    }

    const newDayMessage = () => {
        return(
            <div style={{width: '100%', padding: '20px 0px', textAlign: 'center', color: '#2899fa'}}>
                Monday 10:41 am
            </div>
        )
    }

const styles = {
        mainHeading : { paddingTop: 25, width: '100%', textAlign: 'start',
        paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'},
    }
    return (
        <Container>
            <div style={{ width: '100%', }}>
                <div style={{ paddingTop: '2%', width: '96%', height: '8%', textAlign: 'start', paddingLeft: '4%', color: '#2899fa', fontSize: 22, fontWeight: 'bold', backgroundColor: '#f1f8ff' }}>
                    MASSAGES
                </div>
                <Row gutter = {24} type = {'flex'} justify = 'center'  style = {{margin : 8 }} >
                 <Col lg = {8} style = {{backgroundColor : "#fff" , height : '90vh' , padding : 12  ,
                  borderRight : 'blue 1px solid' ,  overflowY: 'scroll'}}>
                  <Row gutter = {24}>
                  <Col span = {24}>
                  <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style = {{height : 40 , color : themeColor }}
    />
                  </Col>
                  {chatName()}
                  {chatName()}
                  {chatName()}
                  {chatName()}
                  </Row>
                </Col>
                <Col lg = {14} style = {{backgroundColor : "#D5EBFF" , height : '90vh' , 
                 overflowY: 'scroll'}}> 
                 {chatDataRight()}
                 {chatDataLeft()}
                 {chatDataRight()}
                 {chatDataLeft()}
                 <div style = {{position : "absolute" , bottom : 0 , width : "100%" , left : 0,}}>
                <Row type = {'flex'} align = {"bottom"}>
                <Col lg = {24} >
                 <div style={{ width: '100%', height: 50, borderTop: '1px solid #2899fa', textAlign: 'right' , overflow : "hidden" }}>
                            <input style={{ width: '100%', height: '95%', border: '0px', float: 'left' , paddingLeft:  12, }}
                            placeholder = {"Say Something"} />
                            <FaArrowRight style={{ color: '#2799fc', fontSize: 22,position : "absolute" , 
                            top: 13 , right : 12  }} />
                        </div>
                </Col>
                </Row>
                 </div>
                </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Messages;
