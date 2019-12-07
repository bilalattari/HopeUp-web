import React , {Component} from 'react';
import { FaYoutube  , FaTruckMoving , FaBell } from "react-icons/fa";
import CenterContainer from '../Components/CenterContainer'
import Container from '../container';
import {Link} from 'react-router-dom'
import Button from '../Components/Buttons'
import {themeColor} from '../Constant/index'
import 'antd/dist/antd.css';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , } from 'antd';
import {AiOutlineFile , AiOutlineProfile , FaImage } from 'react-icons/ai' 
const InputGroup = Input.Group;

class Classifieds extends Component {
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
                <Row type = {'flex'} justify = {'center'} style = {{marginTop : '16%'}}>
                <Col span={14}>
               <Input  className = {'input'} style = {{color : themeColor  ,  marginTop : 12 , height : 50}} 
                placeholder = {'What are you looking for?'}  />
                </Col>
                    </Row>
                <Row type = {'flex'} justify = {'center'}>
                <Col span={14}>
               <Input  className = {'input'} type = {'numeric'} style = {{color : themeColor  ,  marginTop : 12 , height : 50}} 
                placeholder = {'Zip code'}  />
                </Col>
                </Row>
                <Row type = {'flex'} justify = {'center'}>
                <Col span={24}>
                    <Link to = {'/adds'}>
                    <Button title = {"SEARCH"} width = {'180px'} />
                    </Link>
                </Col>
                </Row>
                    </CenterContainer>
            </Container>
        );
    }
}

export default Classifieds;
