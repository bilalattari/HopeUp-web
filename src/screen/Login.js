import React , {Component} from 'react';
import { FaVolumeMute, FaVolumeOff, FaNintendoSwitch, FaMobileAlt } from "react-icons/fa";
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

class Login extends Component {
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
                    <div style = {{marginTop : 25 , marginBottom : 25}}>
                <span className = {'slogan loginHeading'}>You Have The Power  </span>
            <span className = {'slogan loginHeading'}> To Choose </span>
                        </div>
          <Row gutter={12} type="flex" justify="center">
            <Col span={18}>
                <span className = {'label'}>Email</span>
              <Input className = {'input'} style = {{color : themeColor  ,  marginBottom : 12}} 
              placeholder = {'Username'}  />
            </Col>
            </Row>
            <Row gutter={12} type="flex" justify="center">
            <Col span={18}>
                <span className = {'label'}>Password</span>
              <Input className = {'input'} style = {{color : themeColor  ,  marginBottom : 12}} 
              placeholder = {'Password'}  />
            </Col>
            </Row>
        </InputGroup>
        <div style = {{marginTop : 25 , marginBottom : 25}}>
        <Link to = {'/home'}> <Button title = {'Login'} /> </Link>
        <Link to = {'/forgetPassword'} className = {'link'}>Forget Password  </Link>
            </div>
                    </CenterContainer>
            </Container>
        );
    }
}

export default Login;
