import React  from 'react';

function BesideLogo(props) {
    return(
        <div style = {{margin : 12}}>
            <img style = {{height : 200 , width : 200}} src = {require('../assets/images/logohope.png')} />
            <img style = {{ width : 300 , marginBottom : 60 , marginLeft : 15}} src = {require('../assets/images/hopeText.png')} />
            </div>
    )
}
export default BesideLogo;
