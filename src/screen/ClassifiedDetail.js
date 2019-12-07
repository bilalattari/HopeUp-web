import React from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { themeColor } from '../Constant';
import {  FaFlag   ,FaHeart , FaUserAlt  , FaShoppingBag , FaEnvelope , FaImage} from "react-icons/fa";
import {FiPlayCircle} from "react-icons/fi"
import {  IoIosClose} from "react-icons/io";
import { Input, Col, Row,  } from 'antd';
import Header from '../Components/Header'
const { Search } = Input;

function ClassifiedDetail() {
    const styles = {
        mainHeading : { paddingTop: 25, width: '100%', textAlign: 'start',
        paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'},
    }
    return (
        <Container>
            <Header title = {"CLASSIFIEDS"} add  = {true} />
            <div style = {{display : "flex" , justifyContent : "center" , 
            margin : 12 , flexWrap : "wrap" }}>
                </div>
                <Row gutter = {24} type = {'flex'} justify = 'center'  style = {{margin : 8 }} >
                 <Col lg = {15} style = {{ height : '90vh' , padding : 12}}>
                 <div className = {"videodiv"} style = {{width : '100%' , height : '60%'}}>
                    <FaImage color = {"#fff"}  fontSize = {63} />
                </div>
                <div className = {"flagDiv"} style = {{ height : 60}}>
                    <span className = {"title"}  style={{fontSize : 18}}>TITLE</span>
                 </div>
                 <div style = {{minHeight : 65 , display : "flex" , alignItems : "center" , backgroundColor : "#fff"}}>
                    <span className = {"title"} >Lorem spum kdjhsdak kdas Lorem spum Lorem spum kdjhsdak kdas Lorem spum kdjhsdak kdas Lorem spum kdjhsdak kdas
                    Lorem spum kdjhsdak kdas Lorem spum kdjhsdak kdas</span>
                 </div>
                </Col>
                <Col lg = {8} style = {{ height : '90vh'}}> 
                <div className = {'usernameDiv'} style = {{width : '100%' , height : 80}}> 
                 <div className = {'userIcon'}>
                    <FaUserAlt style={{ color: '#FFFFFF', fontSize: 20}} />
                </div>
                <span style = {{color : '#2799FA' , marginLeft : 12 , fontWeight :'bold'}}>Username</span>
                 </div>
                 <div className = {'iconRow'}>
                     <FaEnvelope fontSize = {22}color = {'#2799FA'}/> 
                     <span className = {'title'} style = {{fontSize : 18}}>Message</span>
                 </div>
                 <div className = {'iconRow'}>
                     <FaHeart fontSize = {22}color = {'#2799FA'}/> 
                     <span className = {'title'} style = {{fontSize : 18}}>SAVE</span>
                 </div>
                 <div className = {'iconRow'}>
                     <FaFlag fontSize = {22} color = {'#2799FA'}/> 
                     <span className = {'title'} style = {{fontSize : 18}}>Flag</span>
                 </div>
                </Col>
                </Row>
        </Container>
    );
}

export default ClassifiedDetail;
