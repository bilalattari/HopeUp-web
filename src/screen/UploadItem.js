import React from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { themeColor } from '../Constant';
import {  FaFlag   ,FaHeart , FaPlusCircle } from "react-icons/fa";
import {AiFillPlusCircle ,} from "react-icons/ai"
import {  IoIosClose} from "react-icons/io";
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import Header from '../Components/Header'
const { Search } = Input;

function UploadItem() {
    const styles = {
        mainHeading : { paddingTop: 25, width: '100%', textAlign: 'start',
        paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'},
    }
    return (
        <Container>
            <Header title = {"VIDEOS"} />
            <div style = {{display : "flex" , justifyContent : "center" ,  flexWrap : "wrap" }}>
                </div>
                <div style = {{padding : 15 , backgroundColor : "#fff"}}>
                    <span style = {{fontSize : 22}} className = {"slogan"}>Uploaded videos should upbuild,</span>
                    <span style = {{fontSize : 22}} className = {"slogan"}>inspire and breed hope</span>
                    </div>

                <Row gutter = {24} type = {'flex'} justify = 'center'  style = {{margin : 8 }} >
                 <Col lg = {12} style = {{ height : '80vh' , padding : 12}}>
                 <div className = {"videodiv"} style = {{width : '80%' , height : '45%'}}>
                    <AiFillPlusCircle color = {'blue'}  fontSize = {50} />
                </div>
                </Col>
                <Col lg = {10} style = {{ height : '80vh' , backgroundColor : "#fff"}}>
                <Row gutter = {24} type = {'flex'} justify = 'center'  style = {{margin : 8 }} >
                <Col span={22} style = {{marginTop : 41}}>
                <span className = {'label'}>Title</span>
              <Input  className = {'input'} style = {{color : themeColor  ,  marginBottom : 12 , height : 40}}
              placeholder = {'Title'}  />
            </Col>
                    </Row>
                    <Row gutter = {24} type = {'flex'} justify = 'center'   style = {{margin : 8 }} >
            <Col span={22} style = {{marginTop : '12px'}}>
            <span className = {'label'} >Tags</span>
            <div className = {'bigTagsDiv'}>
                        <div className = {'tag'}>
                           {
                               ['1','2','3','4' ,'5'].map((val)=>
                               <div className = {'tagClass'} >
                                   <IoIosClose color = {themeColor}  fontSize = {17} 
                                   style = {{marginBottom : -4 , cursor : 'pointer'}}/>
                                   <span className = {'tags'} >123456</span>
                                   </div> 
                                )
                           }
                            </div>
                    </div>
            </Col>
                        </Row>
                        <Row gutter = {24} type = {'flex'} justify = 'center'
                         style = {{margin : 8 , marginTop : 25 }}>
                            <Button title = {"CANCEL"} />
                            <Button title = {"POST"} />
                        </Row>
                </Col>
                </Row>
        </Container>
    );
}

export default UploadItem;
