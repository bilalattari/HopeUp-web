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
class Favourites extends Component {
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
                    FAVOURITES
            </div>
            <LineHeading title = {"STORE"} />
            <ItemDetail />
            <ItemDetail />
            <LineHeading title = {"CLASSIFIEDS"} />
            <ItemDetail />
            </div>
        </Container>
    );
}
}

export default Favourites;
