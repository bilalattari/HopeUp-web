import React  from 'react';
import { FaHeart, FaMailBulk, FaBell, FaYoutube, FaHome, FaRegHandshake, FaRegListAlt, FaUserAlt } from "react-icons/fa";

function Buttons(props) {
    return(
        <div  style={{ marginTop: 40, textAlign: 'center'  , margin : 26}}>
        <button className = {'customButton'} style={{  width: props.width ?  props.width   :130 , height: 40, 
        color: '#FFFFFF', cursor : 'pointer' , border: '2px solid #2799fc', 
         fontSize: 15, backgroundColor: '#2799fc', borderRadius: 4 , fontWeight : 'bold' }}>
            {props.title}
         </button>
</div>
    )
}
export default Buttons;
