import React , {Component} from 'react';
import Container from '../container';
import 'antd/dist/antd.css';
import Button from '../Components/Buttons'
import LineHeading from '../Components/LineHeading'
import ItemDetail from '../Components/ItemDetail'
import {Link} from 'react-router-dom'
class Checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked : false,
            disabled : false
        }
    }
render () {
    const styles = {
        mainHeading : { paddingTop: 25, width: '100%', textAlign: 'start',
        paddingLeft: 25, color: '#2899fa', fontSize: 22, fontWeight : 'bold'},
    }
    return (
        <Container>
            <div style = {{width : "100%"}} >
            <div style={styles.mainHeading}>
                    CHECKOUT
            </div>
            <LineHeading title = {"CART"} />
            <ItemDetail />
            <ItemDetail />

            <div style = {{display : "flex" , justifyContent : "flex-end"}}>
            <Link to = {"/buy"}> <Button title = {"Buy Now"} /> </Link>
                </div>
            </div>
        </Container>
    );
}
}

export default Checkout;
