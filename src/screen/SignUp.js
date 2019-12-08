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

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = { checked: false , notification : false };
        this.handleChange = this.handleChange.bind(this);
    
    }
    handleChange(checked) {
        this.setState({ checked });
      }
    render(){
        const styles = {
            inputStyle : {color : themeColor }
        }
        return (
            <Container leftbar = {true} icons = {true}>
                <CenterContainer>
                <InputGroup size="large" >
                <Row gutter={12} type="flex" justify="center">
            <Col span={10} style = {{height : 120 , width : 120 , backgroundColor : 'skyblue' , 
            marginBottom : 24}} type="flex" justify="center" align = "center">
                <FaUserAlt color = {'#fff'} fontSize = {41} style = {{marginTop : 32}} />
            </Col>
          </Row>
          <Row gutter={12} type="flex" justify="center">
            <Col span={11}>
              <Input className = {'input'} style = {styles.inputStyle} placeholder = {'First Name'}  />
            </Col>
            <Col span={11}>
              <Input className = {'input'} style = {styles.inputStyle} placeholder = {'Last Name'}  />
            </Col>
          </Row>
          <Row gutter={12} type="flex" justify="center">
            <Col span={22}>
              <Input className = {'input'} style = {{color : themeColor  , marginTop : 12 , marginBottom : 12}} 
              placeholder = {'Email Address'}  />
            </Col>
            </Row>
            <Row gutter={12} type="flex" justify="center">
            <Col span={11}>
              <Input type = {'password'} className = {'input'} style = {styles.inputStyle} placeholder = {'Password'}  />
            </Col>
            <Col span={11}>
              <Input type = {'password'} className = {'input'} style = {styles.inputStyle} placeholder = {'Verify Password'}  />
            </Col>
          </Row>
          <Row gutter={12} type="flex" justify="center">
            <Col span={22}>
              <Input className = {'input'} style = {{color : themeColor  , marginTop : 12 , marginBottom : 12}} 
              placeholder = {'Username'}  />
            </Col>
            </Row>
        </InputGroup>
        <Link to = {'/intro'}>    <Button title = {'Create'} /> </Link>
                    </CenterContainer>
            </Container>
        );
    }
}

export default SignUp;
