import React from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { themeColor } from '../Constant';
import {  FaFlag   ,FaHeart , FaUserAlt } from "react-icons/fa";
import {FiPlayCircle} from "react-icons/fi"
import {  IoIosClose} from "react-icons/io";
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import Header from '../Components/Header'
const { Search } = Input;

function UploadItem() {
    const styles = {
        mainHeading : { paddingTop: 25, width: '100%', textAlign: 'start',
        paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'},
    }
    return (
        <Container>
            <Header title = {"VIDEOS"} />
            <div style = {{display : "flex" , justifyContent : "center" , 
            margin : 12 , flexWrap : "wrap" }}>
                </div>
                <div style = {{padding : 15 , backgroundColor : "#fff"}}>
                    <span style = {{fontSize : 22}} className = {"slogan"}>Uploaded videos should upbuild,</span>
                    <span style = {{fontSize : 22}} className = {"slogan"}>inspire and breed hope</span>
                    </div>

                <Row gutter = {24} type = {'flex'} justify = 'center'  style = {{margin : 8 }} >
                 <Col lg = {12} style = {{ height : '90vh' , padding : 12}}>
                 <div className = {"videodiv"} style = {{width : '100%' , height : '45%'}}>
                    <FiPlayCircle color = {"#fff"}  fontSize = {63} />
                </div>
                </Col>
                <Col lg = {12} style = {{ height : '90vh' , backgroundColor : "#fff"}}> 
                </Col>
                </Row>
        </Container>
    );
}

export default UploadItem;
