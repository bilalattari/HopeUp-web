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

function VideoDetail() {
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
                <Row gutter = {24} type = {'flex'} justify = 'center'  style = {{margin : 8 }} >
                 <Col lg = {15} style = {{ height : '90vh' , padding : 12}}>
                 <div className = {"videodiv"} style = {{width : '100%' , height : '70%'}}>
                    <FiPlayCircle color = {"#fff"}  fontSize = {41} />
                </div>
                <div className = {"flagDiv"} style = {{ height : 60}}>
                    <span className = {"title"}>VIDEO TITLE</span>
                    <div style = {{display : "flex"}}>
                        <FaFlag   fontSize = {13} color ={"blue"} style = {{marginRight : 12}} />
                        <FaHeart   fontSize = {13} color ={"blue"} style = {{marginRight : 12}} />
                    </div>
                 </div>
                </Col>
                <Col lg = {8} style = {{ height : '90vh'}}> 
                <div className = {'usernameDiv'} style = {{width : '100%' , height : 80}}> 
                 <div className = {'userIcon'}>
                    <FaUserAlt style={{ color: '#FFFFFF', fontSize: 20}} />
                </div>
                <span style = {{color : '#2799FA' , marginLeft : 12 , fontWeight :'bold'}}>Username</span>
                 </div>
                 <span className = {"commentsHeading"}>Comments</span>
                
                {
                    ['1' , '2' , '3', '4', '5' , '6' ].map((data)=>
                    <div className = {'usernameDiv commentDiv'} style = {{width : '100%' , backgroundColor : "#fff"}}> 
                    <div className = {'userIcon'} style = {{borderRadius : 0}}>
                       <FaUserAlt style={{ color: '#FFFFFF', fontSize: 20}} />
                   </div>
                   <div style = {{paddingLeft : 12 , width : "85%"} }>
                   <span style = {{color : '#2799FA' ,  display : "flex" }}> Lorem spum deif Lorem spum deif Lorem spum deif </span>
                       </div>
                    </div>)
                }
                </Col>
                </Row>
        </Container>
    );
}

export default VideoDetail;
