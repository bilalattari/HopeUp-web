import React from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { themeColor } from '../Constant';
import {  FaFlag   ,FaHeart , FaPlusCircle } from "react-icons/fa";
import {FiPlayCircle ,} from "react-icons/fi"
import {  IoIosClose} from "react-icons/io";
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import Header from '../Components/Header'
const {  TextArea } = Input;
 
function AddStore() {
    const styles = {
        mainHeading : { paddingTop: 25, width: '100%', textAlign: 'start',
        paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'},
    }
    return (
        <Container>
            <div style = {{display : "flex" , justifyContent : "center" , 
            margin : 12 , flexWrap : "wrap" }}>
                </div>
                <div style = {{padding : 15 , backgroundColor : "#fff"}}>
                    <span style = {{fontSize : 22}} className = {"slogan"}>BECOME A SELLER</span>
                    <span style = {{fontSize : 22}} className = {"slogan"}>ON HOPEUP</span>
                    </div>

                <Row gutter = {24} type = {'flex'} justify = 'center'   >
                 <Col lg = {12} style = {{ height : '80vh' , padding : 12}}>
                 <div className = {"videodiv"} style = {{width : '75%' , height : '50%'}}>
                    <FaPlusCircle color = {'blue'}  fontSize = {50} />
                </div>
                </Col>
                <Col lg = {10} style = {{ minHeight : '80vh' , backgroundColor : "#fff" , marginTop : 12}}>
                <Row gutter = {24} type = {'flex'} justify = 'center'   >
                <Col span={20} style = {{marginTop : 41}}>
                <span className = {'label'}>Title</span>
              <Input  className = {'input'} style = {{color : themeColor  ,  marginBottom : 12 , height : 40}}
              placeholder = {'Title'}  />
            </Col>
                    </Row>
                    <Row gutter={24} type="flex" justify="center">
            <Col span={20}>
                <span className = {'label'}>Description</span>
                <TextArea placeholder="Description" allowClear style = {{height : '120px'}}  />
            </Col>
            </Row>
                    <Row gutter = {24} type = {'flex'} justify = 'center'    >
            <Col span={20} style = {{marginTop : '12px'}}>
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
                         style = {{margin : 8 , marginTop : 6 }}>
                            <Button title = {"CANCEL"} />
                            <Button title = {"POST"} />
                        </Row>
                </Col>
                </Row>
        </Container>
    );
}

export default AddStore;
