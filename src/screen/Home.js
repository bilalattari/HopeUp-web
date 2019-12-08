import React , {Component} from 'react';
import { FaYoutube  , FaTruckMoving , FaBell } from "react-icons/fa";
import CenterContainer from '../Components/CenterContainer'
import Container from '../container';
import {Link} from 'react-router-dom'
import Switch from "react-switch";
import {themeColor} from '../Constant/index'
import 'antd/dist/antd.css';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , } from 'antd';
import {  FaUserAlt , FaHeadphones } from "react-icons/fa";
import {GiMedicinePills } from 'react-icons/gi' 
import {AiOutlineFile , AiOutlineProfile , FaImage  , } from 'react-icons/ai' 
const InputGroup = Input.Group;

class Home extends Component {
    constructor(props){
        super(props)
    }

    manageFields = () => {
        return(
            <Link>
            <Row gutter={12} type="flex" justify="center" style  = {{margin  : 2}} >
                  <Col  md = {2}>
                <FaYoutube color = {themeColor} fontSize = {25}  style = {{marginTop : 4}} />
                  </Col>
                  <Col md = {8}>
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 20 ,}}>Manage Videos</span>
                  </Col>
              </Row> </Link>
        )
    }
    render(){
        const styles = {
            inputStyle : {color : themeColor }
        }
        return (
            <Container>
                <CenterContainer>
                <Row gutter={12} type="flex" justify="center" style = {{marginTop : 25}}>
                <Col span={10} style = {{height : 120 , width : 120 , backgroundColor : 'skyblue' , 
                 marginBottom : 6}} type="flex" justify="center" align = "center">
                <FaUserAlt color = {'#fff'} fontSize = {41} style = {{marginTop : 32}} />
               </Col>
              </Row>
              <div style = {{display : "flex", justifyContent : "center"}}>
                <div>
              <Link to = {"/manageVideos"}>
                <div className = {'homeIcons'} >
                <FaYoutube color = {themeColor} fontSize = {25}  style = {{width : '63px'}} />
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Manage Videos</span>
                </div>
               </Link> 
              <Link to = {"/manageProducts"}>
              <div className = {'homeIcons'} > 
                <GiMedicinePills color = {themeColor} fontSize = {25}  style = {{width : '63px'}} />
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Manage Products</span>
                </div>
               </Link> 
              <Link to = {"/manageClassified"}>
              <div className = {'homeIcons'} >
                <AiOutlineFile color = {themeColor} fontSize = {25}  style = {{width : '63px'}} />
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Manage Classifieds</span>
                </div>
               </Link>
               <Link to = {"/manageVibes"}>
              <div className = {'homeIcons'} >
                <FaHeadphones color = {themeColor} fontSize = {25}  style = {{width : '63px'}} />
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Manage Vibes</span>
                </div>
               </Link> 
              <Link to = {"/orders"}>
              <div className = {'homeIcons'} >
                <FaTruckMoving color = {themeColor} fontSize = {25}  style = {{width : '63px'}} />
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Orders</span>
                </div>
               </Link> 
              <Link to = {"/notification"}>
              <div className = {'homeIcons'} >
                <FaBell color = {themeColor} fontSize = {25}  style = {{width : '63px'}} />
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Notifications</span>
                </div>
               </Link> 
              <Link to = {"/terms"}>
              <div className = {'homeIcons'} >
                <AiOutlineProfile color = {themeColor} fontSize = {25}  style = {{width : '63px'}} />
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Terms & Conditions</span>
                </div>
               </Link> 
                  </div>
                </div>
                    </CenterContainer>
            </Container>
        );
    }
}

export default Home;
