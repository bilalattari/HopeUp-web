import React , {Component} from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import {FiPlayCircle} from "react-icons/fi"
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import { themeColor } from '../Constant';
import {  FaUserAlt   ,FaShoppingBag , FaImage , FaCcVisa} from "react-icons/fa";
import {  IoIosClose} from "react-icons/io";


const { TextArea } = Input;
class BlockWatch extends Component {
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
                    <span style = {{fontSize : 22}} className = {"slogan"}>BLOCK WATCH</span>
                    </div>
                    <div style = {{margin : 41}}>
            <Row gutter = {24} type = {'flex'} justify = {'center'}    >
                <Col lg = {12} style = {{backgroundColor : "#fff" , height : '70vh' , paddingTop : 51}}>
                <div className = {"videodiv"} style = {{width : '80%' , height : '60%' , marginLeft : "10%"}}>
                    <FiPlayCircle color = {"#fff"}  fontSize = {63} />
                </div>
                </Col>
                <Col lg = {8} style = {{backgroundColor : "#fff" , height : '70vh' , paddingTop : 51}}>
                <Row gutter = {24} type = {'flex'} justify = {'center'}    >
                    <span className = {"title"}>STEPS TO SETUP NEIGHBOURHOOD WATCH</span>
                </Row>
                <div style = {{display : "flex", justifyContent : "center" , width : "100%" , marginTop : 18}}>
                <div>
                <div className = {'homeIcons'} style = {{alignItems : "flex-start"  }} >
                <span className = {"title"}>1.</span>
                <span className = {"title"}>Lorem spum jaksdn Lorem spum jaksdn Lorem spum  </span>
                </div>
                <div className = {'homeIcons'} style = {{alignItems : "flex-start" , }} >
                <span className = {"title"}>2.</span>
                <span className = {"title"}>Lorem spum jaksdn Lorem spum jaksdn Lorem spum </span>
                </div>
                <div className = {'homeIcons'} style = {{alignItems : "flex-start" , }} >
                <span className = {"title"}>3.</span>
                <span className = {"title"}>Lorem spum jaksdn Lorem spum jaksdn Lorem spum </span>
                </div>
                <div className = {'homeIcons'} style = {{alignItems : "flex-start" , }} >
                <span className = {"title"}>4.</span>
                <span className = {"title"}>Lorem spum jaksdn Lorem spum jaksdn Lorem spum </span>
                </div>
                </div>
                </div>

                </Col>
                </Row>
                        </div>
               
            </div>
        </Container>
    );
}
}

export default BlockWatch;
