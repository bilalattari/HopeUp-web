import React , {Component} from 'react';
import { FaYoutube  , FaTruckMoving , FaBell } from "react-icons/fa";
import CenterContainer from '../Components/CenterContainer'
import Container from '../container';
import {Link} from 'react-router-dom'
import Switch from "react-switch";
import {themeColor} from '../Constant/index'
import 'antd/dist/antd.css';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader , } from 'antd';
import {  FaUserAlt } from "react-icons/fa";
import {GiMedicinePills } from 'react-icons/gi' 
import {AiOutlineFile , AiOutlineProfile , FaImage } from 'react-icons/ai' 
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
              
              <Link to = {"/manageVideos"}>
              <Row gutter={12} type="flex" justify="center" style  = {{margin  : 5 , marginTop : 26}} >
                  <Col  md = {2}>
                <FaYoutube color = {themeColor} fontSize = {25}  style = {{marginTop : 4}} />
                  </Col>
                  <Col md = {8}>
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Manage Videos</span>
                  </Col>
              </Row>
               </Link> 
              <Link to = {"/manageProducts"}>
              <Row gutter={12} type="flex" justify="center" style  = {{margin  : 5}} >
                  <Col  md = {2}>
                <GiMedicinePills color = {themeColor} fontSize = {25}  style = {{marginTop : 4}} />
                  </Col>
                  <Col md = {8}>
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Manage Products</span>
                  </Col>
              </Row>
               </Link> 
              <Link to = {"/manageClassified"}>
              <Row gutter={12} type="flex" justify="center" style  = {{margin  : 5}} >
                  <Col  md = {2}>
                <AiOutlineFile color = {themeColor} fontSize = {25}  style = {{marginTop : 4}} />
                  </Col>
                  <Col md = {10}>
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Manage Classifieds</span>
                  </Col>
              </Row>
               </Link> 
              <Link to = {"/orders"}>
              <Row gutter={12} type="flex" justify="center" style  = {{margin  : 5}} >
                  <Col  md = {2}>
                <FaTruckMoving color = {themeColor} fontSize = {25}  style = {{marginTop : 4}} />
                  </Col>
                  <Col md = {8}>
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Orders</span>
                  </Col>
              </Row>
               </Link> 
              <Link to = {"/notification"}>
              <Row gutter={12} type="flex" justify="center" style  = {{margin  : 5}} >
                  <Col  md = {2}>
                <FaBell color = {themeColor} fontSize = {25}  style = {{marginTop : 4}} />
                  </Col>
                  <Col md = {8}>
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Notifications</span>
                  </Col>
              </Row>
               </Link> 
              <Link to = {"/terms"}>
              <Row gutter={12} type="flex" justify="center" style  = {{margin  : 5 , }} >
                  <Col  md = {2} style = {{marginLeft : 41}}>
                <AiOutlineProfile color = {themeColor} fontSize = {25}  style = {{marginTop : 4}} />
                  </Col>
                  <Col md = {10}>
                <span style = {{color : themeColor , textAlign : 'center' ,
                fontSize : 18}}>Terms & Conditions</span>
                  </Col>
              </Row>
               </Link> 
                    </CenterContainer>
            </Container>
        );
    }
}

export default Home;
