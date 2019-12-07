import React , {Component} from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import {Link} from 'react-router-dom'
import { Input, Col, Row, Checkbox } from 'antd';
import { themeColor } from '../Constant';
import {  FaUserAlt   ,FaShoppingBag , FaImage , FaCcVisa} from "react-icons/fa";


const { TextArea } = Input;
class AdPayment extends Component {
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
            <div style = {{padding : 25 , backgroundColor : "#fff"}}>
                    <span style = {{fontSize : 22}} className = {"slogan"}>CLASSIFIED AD PAYMENT</span>
                    </div>
                    <div style = {{margin : 41}}>
            <Row gutter = {24} type = {'flex'} justify = {'center'}    >
                <Col lg = {22} style = {{backgroundColor : "#fff" , height : '70vh' , paddingTop : 51}}>
                <Row gutter={24} type="flex" justify="center">
                    <Col md= {10}>
            <Col span={18}>
                <span className = {'label'} style = {styles.label}>CARD NUMBER</span>
              <Input  className = {'input'} style = {styles.inputStyle} 
              placeholder = {'Card Number'}  />
            </Col>
            <Col span={6} justify = {'center'}>
                <FaCcVisa color = {themeColor} fontSize  = {50}  style = {{marginBottom : -51 }} />
            </Col>
             </Col>
            <Col md= {10}>
            <Col span={18}>
                <span className = {'label'} style = {styles.label}>CARDHOLDER NAME</span>
              <Input  className = {'input'} style = {styles.inputStyle} 
              placeholder = {'CARDHOLDER NAME'}  />
            </Col>
             </Col>
            </Row>
            <Row gutter={6}  type="flex"  style = {{marginTop : '27px' , marginLeft : '9.2%'}}>
            <Col span={4}>
                <span className = {'label'} style = {styles.label}>EXPIRE DATE</span>
              <Input  className = {'input'} style = {{color : themeColor  ,  marginBottom : 12 , height : 40 , 
               marginTop : 4}} 
              placeholder = {'Expire Date'}  />
            </Col>
            <Col span={4}>
              <span className = {'label'} style = {styles.label}>CVV</span>
              <Input  className = {'input'} style = {{color : themeColor  ,  marginBottom : 12 , height : 40 , 
               marginTop : 4}} 
              placeholder = {'CVV'}  />
            </Col>
            </Row>
            <Row gutter={6}  type="flex"  style = {{marginTop : '27px' , marginLeft : '9.2%'}}>
            <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
              <span className = {'label'} style = {styles.label}>SAVE CARD</span>
          </Checkbox>
            </Row>
            <Row gutter={24} type = {'flex'}  justify = {'center'} >
                <Link to  = {'/adposted'}>
                <Button title = {'PAY SECURE'} width  = {'300px'} />
                </Link>
            </Row>
                </Col>
                </Row>
                        </div>
               
            </div>
        </Container>
    );
}
}

export default AdPayment;
