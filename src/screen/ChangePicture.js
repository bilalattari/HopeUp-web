import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import CenterContainer from '../Components/CenterContainer'
import Container from '../container';
import Buttons from '../Components/Buttons'
function ChangePicture() {
    return (
        <Container>
            <CenterContainer>
                <div style={{ marginTop: 80, width: '100%', textAlign: 'center', color: '#2799fc', fontSize: 18 }}>
                    Change Picture
                </div>
                <div style={{ marginTop: 40, width: '100%', textAlign: 'center' }}>
                    <div style={{ width: 150, height: 150, margin: '0px auto', backgroundColor: '#99d0fe' }}>
                        <FaUserAlt style={{ color: '#2799fc', fontSize: 55, paddingTop: 45 }} />
                    </div>
                </div>
                <Buttons title = {'Upload'} />
                </CenterContainer>
        </Container>
    );
}

export default ChangePicture;
