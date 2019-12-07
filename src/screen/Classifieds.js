import React , {Component} from 'react';
import { FaYoutube  , FaTruckMoving , FaBell } from "react-icons/fa";
import CenterContainer from '../Components/CenterContainer'
import Container from '../container';
import {Link} from 'react-router-dom'
import Switch from "react-switch";
import {themeColor} from '../Constant/index'
import 'antd/dist/antd.css';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , } from 'antd';
import {  FaUserAlt } from "react-icons/fa";
import {GiMedicinePills } from 'react-icons/gi' 
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
                    </CenterContainer>
            </Container>
        );
    }
}

export default Classifieds;
