import React from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , } from 'antd';
import { themeColor } from '../Constant';
import {  FaUserAlt   ,FaShoppingBag , FaImage} from "react-icons/fa";
import {Link} from 'react-router-dom'
function ManageClassified() {
    const classifiedData = () => {
        return (
            <Row className = {'mainContainerManage'} gutter = {24} style = {{ minHeight : 120, width   :"100%"}}  >
                <Col md = {5}>
                <Row gutter={12} type="flex" justify="center" >
                <Col span={10} style = {{height : 130 , width : '90%' , backgroundColor : 'skyblue' , 
                 marginBottom : 6}} type="flex" justify="center" align = "center">
                <FaImage color = {'#fff'} fontSize = {45} style = {{marginTop : 32}} />
               </Col>
              </Row>
                </Col>
                <Col md = {13}>
                <div style={{ float: 'left', height: 140 }}>
           <div style={{ height: 30, fontSize: 18, paddingTop: 5, color: '#2899fa' }}>
                Title
               </div>
           <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', lineHeight: 1.7, color: '#2899fa' }}>
               Loren Epsem jems |Loren Epsem jems |Loren Epsem jems |Loren Epsem jems
               Loren Epsem jems |Loren Epsem jems |Loren Epsem jems |Loren Epsem jems
               </div>
            </div>

                </Col>
                <Col md = {5} style = {{marginRight : 12}}>
                    <div className = {'tagsDiv'}>
                            <span className = {'tagsHeading'}>Tags</span>
                        <div className = {'tag'}>
                           {
                               ['1','2','3','4' ,'5'].map((val)=> 
                                <span className = {'tagValue'} >123456</span>)
                           }
                            </div>
                    </div>
                    <Row gutter = {24} style = {{marginRight : 15}}> 
                        <Col md = {10} style = {{marginRight : 15}}> 
                    <Link to = {"/repostClssified"}> <Button width  = {90}  title = {"REPOST"} /> </Link>
                        </Col>
                        <Col md = {10} style = {{marginRight : 15}}> 
                    <Button width  = {90}  title = {"DELETE"} />
                        </Col>
                    </Row>
                </Col>
                </Row>
        )
    }
    return (
        <Container>
            <div style = {{width : "100%"}} >
            <div style={{ paddingTop: 25, width: '100%', textAlign: 'start',
                 paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'}}>
                    MANAGE CLASSIFIEDS
                </div>
                    {classifiedData()}
                    {classifiedData()}
                    {classifiedData()}
                    {classifiedData()}
                    {classifiedData()}
            </div>
        </Container>
    );
}

export default ManageClassified;
