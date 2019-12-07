import React , {Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Col, Row,  } from 'antd';
import { themeColor } from '../Constant';
import { FaPlusCircle,} from "react-icons/fa";
import {Link} from 'react-router-dom'
const { Search } = Input;

function Header(props) {
    return (
        <Row gutter= {24} type = {"flex"} justify = {"center"} align = {"middle"} style = {{minHeight : 80 , backgroundColor : "#fff"}} >
                <Col md = {4}  > 
                <span className = {"headerTitle"}>{props.title}</span>
                </Col>
                <Col md = {12}  > 
                <Search
                placeholder="Search"
                onSearch={value => console.log(value)}
                style = {{height : 41 , color : themeColor , border : "1px solid #2799FA" , borderRadius : 5 }}
                  />
                </Col>
                <Col md = {6}>
                    <Link to = {props.store ? "/addproduct" : props.add ? "/createadd" :  "/upload"}>
                    <FaPlusCircle  fontSize  = {36} color = {"#2799FA"}  style = {{marginLeft : "30%"}} />
                    </Link>
                </Col>
                </Row>
    )
}

export default Header;