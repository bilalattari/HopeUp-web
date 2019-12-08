import React from 'react';
import { FaHeart, FaMailBulk, FaBell, FaYoutube, FaHome, FaRegHandshake, FaRegListAlt, FaUserAlt } from "react-icons/fa";

function CenterContainer(props) {
    return(
        <div className = {'centerContainer'} style={{ }}>
            {props.children}
        </div>
    )
}
export default CenterContainer;
