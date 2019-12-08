import React , {Component} from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import { themeColor } from '../Constant';
import {  FaUserAlt   ,FaShoppingBag , FaImage , FaCcVisa} from "react-icons/fa";
import {  IoIosClose} from "react-icons/io";


const { TextArea } = Input;
class Adposted extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked : false,
            disabled : false
        }
    }
render () {
    const styles = {
        mainHeading : { paddingTop: 25, width: '100%', textAlign: 'start',
        paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'},
    }
    return (
        <Container>
            <div style = {{width : "100%"}} >
            <div style = {{padding : 25 , backgroundColor : "#fff"}}>
                    <span style = {{fontSize : 22}} className = {"slogan"}>CLASSIFIED POSTED SUCCESSFULLY!</span>
                    </div>
                    <div style = {{margin : 41}}>
            <Row gutter = {24} type = {'flex'} justify = {'center'}    >
                <Col lg = {22} style = {{backgroundColor : "#fff" , height : '70vh' , paddingTop : 51}}>
                <Row gutter={24} type="flex" justify="center">
                <span style = {{fontSize : 18}} className = {"slogan"}>CLASSIFIED AD POSTED</span>
                </Row>
                <Row gutter={24} type="flex" justify="center">
                <span style = {{fontSize : 18}} className = {"slogan"}>SUCCESSFULLY!</span>
                </Row>
                <Row gutter={24} type="flex" justify="center" style = {{margin : 24}}>
                <span style = {{fontSize : 14}} className = {"slogan"}>AD will be up for 3 weeks</span>
                </Row>
                <Row gutter={24} type="flex" justify="center" style = {{marginTop : 41}}>
                    <Button title= {'POST AGAIN'} width = {'300px'} />
                </Row>
                </Col>
                </Row>
                        </div>
               
            </div>
        </Container>
    );
}
}

export default Adposted;
