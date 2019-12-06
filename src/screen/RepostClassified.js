import React , {Component} from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import { themeColor } from '../Constant';
import {  FaUserAlt   ,FaShoppingBag , FaImage , FaCcVisa} from "react-icons/fa";
import {  IoIosClose} from "react-icons/io";


const { TextArea } = Input;
class RepostClssified extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked : false,
            disabled : false
        }
    }
    onChange = e => {
        console.log('checked = ', e.target.checked);
        this.setState({
          checked: e.target.checked,
        });
      };
render () {
    const styles = {
        mainHeading : { paddingTop: 25, width: '100%', textAlign: 'start',
        paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'},
        imageContainer : {height : 100 , width : '80%' , backgroundColor : 'skyblue' , 
        marginBottom : 6},
        tagIcon : {marginBottom : -4 , cursor : 'pointer'},
        inputStyle : {color : themeColor  ,  marginBottom : 12 , height : 40,marginTop : 4},
        label : {fontWeight : 'bold' , fontSize : 10 , color : themeColor },
    }
    return (
        <Container>
            <div style = {{width : "100%"}} >
            <div style={styles.mainHeading}>
                    REPOST CLASSIFIED
                </div>
            <Row gutter = {24} type = {'flex'} justify = 'center'  style = {{margin : 8 }} >
                <Col lg = {10} style = {{backgroundColor : "#fff" , height : '80vh' , padding : 12  ,
                 borderRight : 'blue 1px solid'}}>
                     <Row gutter={12} type="flex" justify="center" >
                <Col span={10} style = {styles.imageContainer} type="flex" justify="center" align = "center">
                <FaImage color = {'#fff'} fontSize = {45} style = {{marginTop : 25}} />
               </Col>
              </Row>
              <Row gutter={24} type="flex" justify="center">
            <Col span={20}>
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
            <Row gutter={24} type="flex" justify="center">
            <Col span={20} style = {{marginTop : '12px'}}>
            <span className = {'label'} >Tags</span>
            <div className = {'bigTagsDiv'}>
                        <div className = {'tag'}>
                           {
                               ['1','2','3','4' ,'5'].map((val)=>
                               <div className = {'tagClass'} >
                                   <IoIosClose color = {themeColor}  fontSize = {17} 
                                   style = {styles.tagIcon}/>
                                   <span className = {'tags'} >123456</span>
                                   </div> 
                                )
                           }
                            </div>
                    </div>
            </Col>
            </Row>
                </Col>
                <Col lg = {10} style = {{backgroundColor : "#fff" , height : '80vh' , padding : 12}}> 
                <Row gutter = {24} type = {'flex'} justify = 'center' >
                    <span style = {{fontSize : '41px' , fontWeight : 'bold' , color : themeColor }}>$5.00</span>
                </Row>
                <Row gutter={24} type="flex" justify="center">
            <Col span={16}>
                <span className = {'label'} style = {styles.label}>CARD NUMBER</span>
              <Input  className = {'input'} style = {styles.inputStyle} 
              placeholder = {'Card Number'}  />
            </Col>
            <Col span={6} justify = {'center'}>
                <FaCcVisa color = {themeColor} fontSize  = {50}  style = {{marginBottom : -51 }} />
            </Col>
            </Row>
            <Row gutter={24} type="flex" justify="center" style = {{marginTop : '27px'}}>
            <Col span={22}>
                <span className = {'label'} style = {styles.label}>CARDHOLDER NAME</span>
              <Input  className = {'input'} style = {styles.inputStyle} 
              placeholder = {'CARDHOLDER NAME'}  />
            </Col>
            </Row>
            <Row gutter={10} type = {'flex'}  style = {{marginLeft : '14px' , marginTop : '27px'}} >
            <Col span={6}>
                <span className = {'label'} style = {styles.label}>EXPIRE DATE</span>
              <Input  className = {'input'} style = {{color : themeColor  ,  marginBottom : 12 , height : 40 , 
               marginTop : 4}} 
              placeholder = {'Expire Date'}  />
            </Col>
            <Col span={6}>
              <span className = {'label'} style = {styles.label}>CVV</span>
              <Input  className = {'input'} style = {{color : themeColor  ,  marginBottom : 12 , height : 40 , 
               marginTop : 4}} 
              placeholder = {'CVV'}  />
            </Col>
            </Row>
            <Row gutter={10} type = {'flex'}  style = {{marginLeft : '21px' , marginTop : '27px'}}  >
            <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
              <span className = {'label'} style = {styles.label}>SAVE CARD</span>
          </Checkbox>
            </Row>
            <Row gutter={24} type = {'flex'}  justify = {'center'} >
                <Button title = {'PAY SECURE'} width  = {'300px'} />
            </Row>
                </Col>
                </Row>
               
            </div>
        </Container>
    );
}
}

export default RepostClssified;
