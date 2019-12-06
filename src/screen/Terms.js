import React , {Component} from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , Checkbox } from 'antd';
import Button from '../Components/Buttons'
import { themeColor } from '../Constant';
import {  FaUserAlt   ,FaShoppingBag , FaImage , FaCcVisa} from "react-icons/fa";
import {  IoIosClose} from "react-icons/io";
import Order from '../Components/Order'

const { TextArea } = Input;
class Terms extends Component {
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
    }
    return (
        <Container>
            <div style = {{width : "100%"}} >
            <div style={styles.mainHeading}>
                    TERMS & CONDITIONS
            </div>
            <div style={{ height: '80vh', width: '90%', margin: '2.5% auto', overflowY : 'scroll',
         border: '2px solid #a7acaf' , backgroundColor : '#fff' , padding : 12 }}>
             <span style = {{color : '#2799FA' , padding : 2}}>Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spLorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsadum lorem spum dit dsad
             Lorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsad Lorem spum lorem spum dit dsadLorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad
             Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad  Lorem spum lorem spum dit dsad
             Lorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad
             Lorem spum lorem spum dit dsadLorem spum lorem spum dit dsad
             Lorem spum lorem spum dit dsad  </span>
             <br />
             <br />
             <span style = {{color : '#2799FA' , padding : 2}}>Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spLorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsadum lorem spum dit dsad
             Lorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsad Lorem spum lorem spum dit dsadLorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad
             Lorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsadLorem spum lorem spum dit dsad Lorem spum lorem spum dit dsadLorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad
             Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad Lorem spum lorem spum dit dsad  Lorem spum lorem spum dit dsad
             Lorem spum lorem spum dit dsad  </span>
            <Button title = {"ACCEPT"} width  = {"240px"} />
            </div>
            </div>
        </Container>
    );
}
}

export default Terms;
