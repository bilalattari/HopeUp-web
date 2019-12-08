import React from 'react';
import { FaHeart, FaMailBulk, FaBell, FaYoutube, FaHome, FaRegHandshake, FaRegListAlt, FaUserAlt } from "react-icons/fa";
import {FiYoutube} from 'react-icons/fi'

import { Layout } from 'antd';
import {Link} from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;
function Container(props) {

    const styles = {
        container: {
            height: '100%'
        },
        header: {display : "flex" , justifyContent : 'space-between' , 
        alignItems : "center" , backgroundColor : '#99d0fe' ,},
        sidebar: {
            width: '15%', height: '100%', backgroundColor: '#2799fc', float: 'left'
        },
        sidebarIconDiv: {
            width: '100%', height: 90, textAlign: 'center'
        },
        sidebarIcons: {
            color: '#FFFFFF', fontSize: 55,  cursor: 'pointer'
        },
        body: {
            width: '85%', height: '100%', backgroundColor: '#f1f8ff', float: 'left'
        }
    }
    return (
        <Layout>
        <Layout>
        <Header style = {styles.header}>
        <div >
                <img src={require('../assets/images/hope.png')} 
                    style={{  width: 57, height: 57 }} />
                </div>
                {
                    !props.icons ?
                <div  style={{ height : '100%' }}
                >
                    <Link to = {"/favourites"}>  
                    <FaHeart style={{ color: '#FFFFFF', fontSize: 22, marginRight : 7,    cursor: 'pointer'  }} />
                    </Link>
                    <Link to = {"/checkout"}>
                    <FaMailBulk style={{ color: '#FFFFFF', fontSize: 22, marginRight : 7,    cursor: 'pointer' }} />
                    </Link>  
                    <FaBell style={{ color: '#FFFFFF', fontSize: 22,     cursor: 'pointer' }} />
                </div>
                :
                null
                }
        </Header>
        </Layout>
        <Layout>
            {
                !props.leftbar ? 
          <Sider breakpoint = {'md'}  style = {{backgroundColor : 'blue'}} width = {"160"}>
              <div style = {{marginTop : '45%'}}>
                    <div style={{ ...styles.sidebarIconDiv }}>
                    <Link to = {"/videos"}>    <FiYoutube style={styles.sidebarIcons} /> </Link>
                     </div>
                     <div style={styles.sidebarIconDiv}>
                      <Link to = {"/store"}>   <FaRegHandshake style={styles.sidebarIcons} /> </Link>
                     </div>
                     <div style={styles.sidebarIconDiv}>
                       <Link to = {'/classifieds'}>  <FaRegListAlt style={styles.sidebarIcons} /> </Link>
                     </div>
                     <div style={styles.sidebarIconDiv}>
                     <Link to = {'/blockwatch'}> <FaHome style={styles.sidebarIcons} /> </Link>
                     </div>
                     <div style={styles.sidebarIconDiv}>
                       <Link to = {"/home"}>  <FaUserAlt style={styles.sidebarIcons} /> </Link>
                     </div>
                 </div>
          </Sider>
          :
          null
            }
          <Content style={{
              background: '#eef5fc',
              minHeight: '90vh',
            }}>{props.children}</Content>
      </Layout>
  </Layout>
    );
}

export default Container;