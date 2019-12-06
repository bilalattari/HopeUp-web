import React , {Component} from 'react';
import { FaVolumeMute, FaVolumeOff, FaNintendoSwitch, FaMobileAlt } from "react-icons/fa";
import CenterContainer from '../Components/CenterContainer'
import Container from '../container';
import Button from '../Components/Buttons'
import Switch from "react-switch";

class Notification extends Component {
    constructor(props){
        super(props)
        this.state = { checked: false , notification : false };
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
                    <div style={{ marginTop: 70, width: '100%', textAlign: 'center' }}>
                        <div style={{ width: '100%', height: 40, marginTop: 30, marginBottom: 20, borderBottom: '2px solid #2799fc' }}>
                            <div style={{ width: '35%', textAlign: 'start', paddingLeft: '15%', float: 'left', color: '#2799fc' }}>BOUND</div>
                            <div style={{ width: '30%', textAlign: 'right', paddingRight: '20%', float: 'left' }}>
                                <FaVolumeOff style={{ color: '#2799fc', fontSize: 22, paddingRight: 10, cursor: 'pointer'  }} />
                                <FaVolumeMute style={{ color: '#2799fc', fontSize: 22, paddingRight: 10, cursor: 'pointer' }} />
                                <FaMobileAlt style={{ color: '#2799fc', fontSize: 22, paddingRight: 10, cursor: 'pointer' }} />
                            </div>
                        </div>
                        <div style={{ width: '100%', height: 40, marginTop: 30, marginBottom: 20, borderBottom: '2px solid #2799fc' }}>
                            <div style={{ width: '35%', textAlign: 'start', paddingLeft: '15%', float: 'left', color: '#2799fc' }}>PUSH NOTIFICATION</div>
                            <div style={{ width: '30%', textAlign: 'right', paddingRight: '20%', float: 'left' }}>
                            <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon = {false} checkedIcon = {false} onColor = {'#2799fc'} />
                            </div>
                        </div>
                        <div style={{ width: '100%', height: 40, marginTop: 30, marginBottom: 20, borderBottom: '2px solid #2799fc' }}>
                            <div style={{ width: '35%', textAlign: 'start', paddingLeft: '15%', float: 'left', color: '#2799fc' }}>EMAIL NOTIFICATION</div>
                            <div style={{ width: '30%', textAlign: 'right', paddingRight: '20%', float: 'left' }}>
                            <Switch onChange={()=> this.setState({notification : !this.state.notification})} checked={this.state.notification} uncheckedIcon = {false} checkedIcon = {false} onColor = {'#2799fc'} />
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
