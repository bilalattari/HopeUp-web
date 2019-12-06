import React from 'react';
import { FaUserAlt , FaRegPlayCircle , FaPlayCircle } from "react-icons/fa";
import {MdPlayCircleOutline} from 'react-icons/md'
import CenterContainer from '../Components/CenterContainer'
import Container from '../container';
import {Link} from 'react-router-dom'
import BesideLogo  from '../Components/BesideLogo'
import Buttons from '../Components/Buttons'
import {themeColor} from '../Constant/index'
import 'antd/dist/antd.css';
import '../App.css'
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , } from 'antd';
function Intro() {
    return (
        <Container leftbar = {true}>
            <div style = {{margin : 25}}>
             <span className = {'slogan'}>You Have The Power  </span>
            <span className = {'slogan'}> To Choose </span>
            </div>
            <Row gutter={12} type="flex" justify="center">
            <Col span={22} style = {{height : 300 , width : 420 , backgroundColor : 'skyblue' }} type="flex" justify="center" align = "center">
                <MdPlayCircleOutline color = {'#fff'} fontSize = {110} style = {{marginTop : '20%' , cursor : 'pointer' }} />
            </Col>
          </Row>
            <div style={{display : 'flex' , justifyContent : 'center' }}>
           <Link to = {'/login'}> <Buttons width = {180} title = {'Welcome to Hope Up'} /></Link>
        </div>
        </Container>
    );
}

export default Intro;
