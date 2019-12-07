import React from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { themeColor } from '../Constant';
import {Link} from 'react-router-dom'
import {  FaFlag   ,FaHeart , FaUserAlt , FaShoppingBag ,FaEnvelope , FaImage  } from "react-icons/fa";
import {FiPlayCircle} from "react-icons/fi"
import {  IoIosClose} from "react-icons/io";
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import Header from '../Components/Header'
const { Search } = Input;

function AllClassifieds() {
    const videoData = () => {
        return (
            <Link to = {'/classifiedDetails'} add  = {true}>
            <div style = {{margin : 12 , width  : "320px"}}>
                <div className = {"videodiv"}>
                    <FaImage color = {"#fff"}  fontSize = {41} />
                </div>
                <div className = {"flagDiv"}>
                    <span className = {"title"}>TITLE</span>
                    <div style = {{display : "flex"}}>
                        <FaFlag   fontSize = {13} color ={"blue"} style = {{marginRight : 12}} />
                        <FaHeart   fontSize = {13} color ={"blue"} style = {{marginRight : 12}} />
                        <FaShoppingBag   fontSize = {13} color ={"blue"} style = {{marginRight : 12}} />
                        <FaEnvelope   fontSize = {13} color ={"blue"} style = {{marginRight : 12}} />
                    </div>
                 </div>
                 <div style = {{minHeight : 80 , display : "flex" , alignItems : "center"}}>
                    <span className = {"title"}>Lorem spum kdjhsdak kdas Lorem spum kdjhsdak kdas Lorem spum kdjhsdak kdas
                    Lorem spum kdjhsdak kdas Lorem spum kdjhsdak kdas</span>
                 </div>
                 <div className = {'usernameDiv'}> 
                 <div className = {'userIcon'}>
                    <FaUserAlt style={{ color: '#FFFFFF', fontSize: 20}} />
                </div>
                <span style = {{color : '#2799FA' , marginLeft : 12}}>Username</span>
                 </div>
                </div>
            </Link>
        )
    }
    const styles = {
        mainHeading : { paddingTop: 25, width: '100%', textAlign: 'start',
        paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'},
    }
    return (
        <Container>
            <Header title = {"CLASSIFIEDS"} />
            <div style = {{display : "flex" , justifyContent : "center" , 
            margin : 12 , flexWrap : "wrap" }}>
                {
                    ['1' , '2' , '3', '4', '5' , '6' ].map((data)=> videoData())
                }
                </div>
        </Container>
    );
}

export default AllClassifieds;
