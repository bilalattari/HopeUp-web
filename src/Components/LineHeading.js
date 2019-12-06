import React , {Component} from 'react';
import { themeColor } from '../Constant';

function LineHeading(props) {
    return (
        <div style = {{height : 50 , display : "flex" , justifyContent : "space-between" ,
         alignItems : "center" , width : "98%"}}>
        <span style = {{color : themeColor , fontSize : 25  , marginBottom : 8 , marginLeft : 25 , marginRight  : 25}}>{props.title}</span>
        <span style = {{width : '88%' , border : "0.5px solid blue" }}></span>
        </div>
    )
}

export default LineHeading;