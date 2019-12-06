import React , {Component} from 'react';
import { FaVolumeMute, FaVolumeOff, FaNintendoSwitch, FaRegArrowAltCircleRight } from "react-icons/fa";
import CenterContainer from '../Components/CenterContainer'
import Container from '../container';
import {Link} from 'react-router-dom'
import Button from '../Components/Buttons'
import Switch from "react-switch";
import {themeColor} from '../Constant/index'
import 'antd/dist/antd.css';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , } from 'antd';
import {  FaUserAlt } from "react-icons/fa";
const InputGroup = Input.Group;

class ForgetPassword extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const styles = {
            inputStyle : {color : themeColor }
        }
        return (
            <Container>
                <CenterContainer>
                <InputGroup size="large" >
                    <div style = {{marginTop : 12 , marginBottom : 12}}>
                <span className = {'slogan loginHeading'}>You Have The Power  </span>
            <span className = {'slogan loginHeading'}> To Choose </span>
                        </div>
          <Row gutter={12} type="flex" justify="center" style = {{marginLeft : 44}}>
            <Col span={17}>
                <span className = {'label'}>Email</span>
              <Input className = {'input'} style = {{color : themeColor  ,  marginBottom : 6}} 
              placeholder = {'Email'}  />
            </Col>
            <Col >
            <FaRegArrowAltCircleRight color = {themeColor} fontSize = {32} style = {{marginTop : 22}} />
            </Col>
            </Row>
            <Row gutter={12} type="flex" justify="center">
            <Col span={15}>
                <span className = {'label'}>Enter Code Sent on Email</span>
              <Input className = {'input'} style = {{color : themeColor  ,  marginBottom : 6}} 
              placeholder = {'Code'}  />
            </Col>
            
            </Row>
            <Row gutter={12} type="flex" justify="center">
            <Col span={15}>
                <span className = {'label'}>New Password</span>
              <Input className = {'input'} style = {{color : themeColor  ,  marginBottom : 6}} 
              placeholder = {'Password'}  />
            </Col>
            </Row>
            <Row gutter={12} type="flex" justify="center">
            <Col span={15}>
                <span className = {'label'}>Password</span>
              <Input className = {'input'} style = {{color : themeColor  ,  marginBottom : 6}} 
              placeholder = {'Password'}  />
            </Col>
            </Row>
        </InputGroup>
        <div style = {{marginTop : 5 , marginBottom : 5}}>
        <Link to = {'/home'}> <Button title = {'Login'} /> </Link>
            </div>
                    </CenterContainer>
            </Container>
        );
    }
}

export default ForgetPassword;
