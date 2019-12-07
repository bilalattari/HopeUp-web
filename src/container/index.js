import React from 'react';
import { FaHeart, FaMailBulk, FaBell, FaYoutube, FaHome, FaRegHandshake, FaRegListAlt, FaUserAlt } from "react-icons/fa";
import { Layout } from 'antd';
import {Link} from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;
function Container(props) {

    const styles = {
        container: {
            height: '100%'
        },
        header: {
            backgroundColor: '#99d0fe'
        },
        sidebar: {
            width: '15%', height: '100%', backgroundColor: '#2799fc', float: 'left'
        },
        sidebarIconDiv: {
            width: '100%', height: 80, textAlign: 'center'
        },
        sidebarIcons: {
            color: '#FFFFFF', fontSize: 45,  cursor: 'pointer'
        },
        body: {
            width: '85%', height: '100%', backgroundColor: '#f1f8ff', float: 'left'
        }
    }
    return (
        <Layout>
        <Layout>
        <Header style = {styles.header}>
        <div style={{ width: '50%', height: '100%', float: 'left', textAlign: 'left' }}>
                     <img src={require('../assets/images/hope.png')} 
                    style={{  width: 57, height: 57 }} />
                </div>
                <div style={{ width: '50%', height: '100%', float: 'left', textAlign: 'right'}}>
                    <Link to = {"/favourites"}>  
                    <FaHeart style={{ color: '#FFFFFF', fontSize: 24, alignSelf  : 'center',  cursor: 'pointer'  }} />
                    </Link>
                    <Link to = {"/checkout"}>
                    <FaMailBulk style={{ color: '#FFFFFF', fontSize: 24, alignSelf  : 'center',  cursor: 'pointer' }} />
                        </Link>  
                    <FaBell style={{ color: '#FFFFFF', fontSize: 24, alignSelf  : 'center',  cursor: 'pointer' }} />
                </div>
        </Header>
        </Layout>
        <Layout>
          <Sider breakpoint = {'md'}  style = {{backgroundColor : 'blue'}} width = {"160"}>
              <div>
                    <div style={{ ...styles.sidebarIconDiv, paddingTop: 20 }}>
                    <Link to = {"/videos"}>    <FaYoutube style={styles.sidebarIcons} /> </Link>
                     </div>
                     <div style={styles.sidebarIconDiv}>
                      <Link to = {"/store"}>   <FaRegHandshake style={styles.sidebarIcons} /> </Link>
                     </div>
                     <div style={styles.sidebarIconDiv}>
                       <Link to = {'/classifieds'}>  <FaRegListAlt style={styles.sidebarIcons} /> </Link>
                     </div>
                     <div style={styles.sidebarIconDiv}>
                         <FaHome style={styles.sidebarIcons} />
                     </div>
                     <div style={styles.sidebarIconDiv}>
                         <FaUserAlt style={styles.sidebarIcons} />
                     </div>
                 </div>
          </Sider>
          <Content style={{
              background: '#eef5fc',
              minHeight: '90vh',
            }}>{props.children}</Content>
      </Layout>
  </Layout>
    );
}

export default Container;