import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import CenterContainer from '../Components/CenterContainer'
import Container from '../container';
import {Link} from 'react-router-dom'
import BesideLogo  from '../Components/BesideLogo'
import Buttons from '../Components/Buttons'
import {themeColor} from '../Constant/index'
function Landing() {
    return (
        <Container leftbar = {true}>
        <div style={{display : 'flex' , justifyContent : 'center'}}>
            <BesideLogo />
        </div>
        <span className = {'slogan'}>You Have The Power  </span>
            <span className = {'slogan'}> To Choose </span>

            <div style={{display : 'flex' , justifyContent : 'center' , marginTop : '3%'}}>
           <Link to = {'/changePicture'}> <Buttons title = {'LOGIN'} /></Link>
           <Link to = {'/createaccount'}> <Buttons title = {'SIGN UP'} /></Link>
        </div>
        </Container>
    );
}

export default Landing;
