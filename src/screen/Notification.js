import React , {Component} from 'react';
import { FaVolumeMute, FaVolumeOff, FaNintendoSwitch, FaMobileAlt } from "react-icons/fa";
import CenterContainer from '../Components/CenterContainer'
import Container from '../container';
import Button from '../Components/Buttons'
import Switch from "react-switch";

class Notification extends Component {
    constructor(props){
        super(props)
        this.state = { checked: true , notification : false };
        this.handleChange = this.handleChange.bind(this);
    
    }
    handleChange(checked) {
        this.setState({ checked });
      }
    render(){
        return (
            <Container>
                <CenterContainer>
                    <div style={{ marginTop: 40, fontSize: 24, fontWeight: 'bold', width: '100%', textAlign: 'center', color: '#2799fc' }}>
                        Notification
                    </div>
                    <div style={{ marginTop: 30, width: '100%', textAlign: 'center' }}>
                        <div className = {'notifRow'} >
                            <div className = {'title'} style = {{ fontSize : 14}}>SOUND</div>
                            <div >
                                <FaVolumeOff style={{ color: '#2799fc', fontSize: 22, marginRight : 7,    cursor: 'pointer'  }} />
                                <FaVolumeMute style={{ color: '#2799fc', fontSize: 22, marginRight : 7,    cursor: 'pointer'  }} />
                                <FaMobileAlt style={{ color: '#2799fc', fontSize: 22, marginRight : 7,    cursor: 'pointer'  }} />
                            </div>
                        </div>
                        <div className = {'notifRow'} >
                        <div className = {'title'} style = {{ fontSize : 14}}>PUSH NOTIFICATION</div>
                            <div >
                            <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon = {false} checkedIcon = {false} onColor = {'#2799fc'} />
                            </div>
                        </div>
                        <div className = {'notifRow'} >
                        <div className = {'title'} style = {{ fontSize : 14}}>EMAIL NOTIFICATION</div>
                            <div >
                            <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon = {false} checkedIcon = {false} onColor = {'#2799fc'} />
                            </div>
                        </div>
                    </div>
                    <Button title = {'Save'} />
                    </CenterContainer>
            </Container>
        );
    }
}

export default Notification;
