import React , {Component} from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import { themeColor } from '../Constant';
import {  FaUserAlt   ,FaShoppingBag , FaImage , FaCcVisa} from "react-icons/fa";
import {  IoIosClose} from "react-icons/io";
import Order from '../Components/Order'
import LineHeading from '../Components/LineHeading'
import ItemDetail from '../Components/ItemDetail'
const { TextArea } = Input;
class Buy extends Component {
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
                    CHECKOUT
            </div>
            <LineHeading title = {"CART"} />
            <ItemDetail center = {true} />
            <ItemDetail center = {true} />

            <div style = {{display : "flex" , justifyContent : "flex-end"}}>
                <span style = {{fontSize : 44 , color : themeColor , margin : 12 ,
                     fontWeight : "500" , marginRight : 41}}>
                    $5.90</span>
                </div>
            </div>
            <Row gutter={24} type = {'flex'}  justify = {"center"} align = {"center"} >
                <Col md = {12}  style = {{height : "40vh"}}>
            <LineHeading title = {"ADDRESS"} />
            <Row gutter={24} type = {'flex'}  justify = {"center"} align = {"center"}  >
            <Col span={16}>
            <Input style = {{margin  : 10}} md = {8} placeholder = {"Street"} />
            <Input style = {{margin  : 10}} md = {8} placeholder = {"State"} />
            <Input style = {{margin  : 10}} md = {8} placeholder = {"Zipcode"} />
            </Col>
                </Row>
                </Col>
                <Col md = {12}>
            <LineHeading title = {"DELIVERY"} />
            <Row gutter={24} type = {'flex'}  justify = {"center"} align = {"center"}  >
            <Col span={16}>
            <Input style = {{margin  : 10}} md = {8} placeholder = {"Option1"} />
            <Input style = {{margin  : 10}} md = {8} placeholder = {"Option2"} />
            <Input style = {{margin  : 10}} md = {8} placeholder = {"Option3"} />
            </Col>
                </Row>
                </Col>
                </Row>
            <LineHeading title = {"PAYMENT"} />
            <Row gutter={18}  
             type = {'flex'}  justify = {"center"} align = {"center"}  >
                <Col span = {12} className = {'payment-div'} >
                    <div style = {{width : '100%'}}>
                    <Row className = {'paymentRow'}   type = {'flex'} >
                        <Col> <span>Subtotal</span> </Col>
                        <Col> <span>$50</span> </Col>
                    </Row>
                    <Row className = {'paymentRow'}  type = {'flex'} >
                        <Col> <span>Shipping</span> </Col>
                        <Col> <span>$5</span> </Col>
                    </Row>
                    <Row className = {'paymentRow'}  type = {'flex'} >
                        <Col> <span>HopeUp (10%)</span> </Col>
                        <Col> <span>$5</span> </Col>
                    </Row>
                    <Row className = {'paymentTotal'}  type = {'flex'} >
                        <Col> <span>TOTAL</span> </Col>
                        <Col> <span>$60</span> </Col>
                    </Row>
                        </div>
                </Col>
            </Row>           
            <Row gutter={20} style = {{marginTop: 41,}} 
             type = {'flex'} justify = {'center'}   >
                <Col span = {9} >
                <Row>
                <Col span={16}>
                <span className = {'label'} style = {styles.label}>CARD NUMBER</span>
              <Input  className = {'input'} style = {styles.inputStyle} 
              placeholder = {'Card Number'}  />
            </Col>
            <Col span={6} justify = {'center'}>
                <FaCcVisa color = {themeColor} fontSize  = {48}  
                style = {{marginBottom : -51 , marginLeft: 12, }} />
            </Col>
            </Row> 
                </Col>
                <Col span = {7} > 
                <span className = {'label'} style = {styles.label}>CARDHOLDER NAME</span>
              <Input  className = {'input'} style = {styles.inputStyle} 
              placeholder = {'CARDHOLDER NAME'}  />
                </Col>
            </Row>            
             <Row gutter={24}  
             type = {'flex'} style = {{marginLeft: '16%',}} >
            <Col span={4}>
                <span className = {'label'} style = {styles.label}>EXPIRE DATE</span>
              <Input  className = {'input'} style = {{color : themeColor  ,  marginBottom : 12 , height : 40 , 
               marginTop : 4}} 
              placeholder = {'Expire Date'}  />
            </Col>
            <Col span={3}>
              <span className = {'label'} style = {styles.label}>CVV</span>
              <Input  className = {'input'} style = {{color : themeColor  ,  marginBottom : 12 , height : 40 , 
               marginTop : 4}} 
              placeholder = {'CVV'}  />
            </Col>
            </Row>
           <Row gutter={10} type = {'flex'}  style = {{marginLeft: '17%',  marginTop : '27px'}}  >
            <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
              <span className = {'label'} style = {styles.label}>SAVE CARD</span>
          </Checkbox>
            </Row>
            <Row gutter={24} type = {'flex'} style = {{marginLeft: '15%',}}   >
                <Button title = {'PAY SECURE'} width  = {'240px'} />
            </Row>
        </Container>
    );
}
}

export default Buy;
