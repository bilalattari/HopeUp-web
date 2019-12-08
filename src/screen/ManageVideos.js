import React from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import { Input, Col, Row,  } from 'antd';
function ManageVideos() {
    const videoData = () => {
        return (

            <Row gutter = {24} style = {{width   :"100%" , padding : '12px'}}  >
                <Col md = {5}>
                    <video src="https://youtu.be/UdMecqvWfkM" width="100%" height="130" controls>
                    </video>
                </Col>
                <Col md = {14}>
                <div style={{ float: 'left', height: 140 }}>
           <div style={{ height: 30, fontSize: 18, paddingTop: 5, color: '#2899fa' }}>
               Video Title
               </div>
           <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', lineHeight: 1.7, color: '#2899fa' }}>
               Loren Epsem jems |Loren Epsem jems |Loren Epsem jems |Loren Epsem jems
               Loren Epsem jems |Loren Epsem jems |Loren Epsem jems |Loren Epsem jems
               </div>
            </div>

                </Col>
                <Col md = {2}>
                    <Button title = {"DELETE"} />
                </Col>
                </Row>
        )
    }
    return (
        <Container>
            <div style = {{width : "100%"}} >
                <div style={{ paddingTop: 25, width: '100%', textAlign: 'start',
                 paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'}}>
                    MANAGE VIDEOS
                </div>
                
                    {videoData()}
                    {videoData()}
                    {videoData()}
                    {videoData()}
                    {videoData()}
            </div>
        </Container>
    );
}

export default ManageVideos;
