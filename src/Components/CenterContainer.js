import React from 'react';
import { FaHeart, FaMailBulk, FaBell, FaYoutube, FaHome, FaRegHandshake, FaRegListAlt, FaUserAlt } from "react-icons/fa";

function CenterContainer(props) {
    return(
        <div style={{ height: '90%', width: '50%', margin: '2.5% auto',
         border: '2px solid #a7acaf' , backgroundColor : '#fff' , padding : 12 }}>
            {props.children}
        </div>
    )
}
export default CenterContainer;
