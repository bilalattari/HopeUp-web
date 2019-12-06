import React from 'react';
import Container from '../container';

function Videos() {
    const videoData = () => {
        return (
            <div style={{ paddingTop: 40, paddingBottom: 40, width: '100%', height: 140, borderBottom: '2px solid #2899fa', backgroundColor: '#f1f8ff' }}>
                <div style={{ width: '25%', paddingRight: '2%', float: 'left' }}>
                    <video src="https://youtu.be/UdMecqvWfkM" width="100%" height="130" controls>
                    </video>
                </div>
                <div style={{ width: '70%', height: 140, float: 'left' }}>
                    <div style={{ width: '80%', float: 'left', height: 140 }}>
                        <div style={{ height: 30, fontSize: 18, paddingTop: 5, color: '#2899fa' }}>
                            Video Title
                            </div>
                        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', lineHeight: 1.7, color: '#2899fa' }}>
                            Loren Epsem jems |Loren Epsem jems |Loren Epsem jems |Loren Epsem jems
                            Loren Epsem jems |Loren Epsem jems |Loren Epsem jems |Loren Epsem jems
                            Loren Epsem jems |Loren Epsem jems |Loren Epsem jems
                            </div>
                    </div>
                    <div style={{ width: '20%', height: 140, textAlign: 'center', float: 'left' }}>
                        <button style={{ margin: '50px auto', width: 90, height: 30, color: '#FFFFFF', border: '2px solid #2899fa', fontSize: 12, backgroundColor: '#2899fa', borderRadius: 2, cursor: 'pointer' }}>
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Container>
            <div style={{ height: '100%', width: '95%' }}>
                <div style={{ paddingTop: 25, width: '100%', textAlign: 'start', paddingLeft: 50, color: '#2899fa', fontSize: 22, backgroundColor: '#f1f8ff' }}>
                    MANAGE VIDEOS
                </div>
                <div style={{ overflowY: 'scroll', paddingLeft: 50, width: '100%', height: '88%' }}>
                    {videoData()}
                    {videoData()}
                    {videoData()}
                    {videoData()}
                    {videoData()}
                </div>
            </div>
        </Container>
    );
}

export default Videos;
