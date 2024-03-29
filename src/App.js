import React from 'react';
import ChangePicture from './screen/ChangePicture';
import Notification from './screen/Notification';
import Videos from './screen/videos';
import Messages from './screen/messages';
import Landing from './screen/LandingPage'
import SignUp from './screen/SignUp'
import ManageProducts from './screen/ManageProducts'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import { FaInternetExplorer } from 'react-icons/fa';
import Intro from './screen/Intro';
import Login from './screen/Login';
import ForgetPassword from './screen/ForgetPassword';
import Home from './screen/Home';
import ManageVideos from './screen/ManageVideos'
import ManageClassified from './screen/ManageClassifieds';
import RepostClssified from './screen/RepostClassified';
import Orders from './screen/Orders';
import Favourites from './screen/Favourites';
import Checkout from './screen/Checkout';
import Buy from './screen/Buy';
import VideoDetail from './screen/VideoDetail';
import Terms from './screen/Terms'
import UploadItem from './screen/UploadItem'
import Store from './screen/Store';
import StoreDetail from './screen/StoreDetail';
import AddStore from './screen/AddStore';
import Classifieds from './screen/Classifieds';
import AllClassifieds from './screen/ClassifiedsAdds';
import ClassifiedDetail from './screen/ClassifiedDetail';
import CreateAdd from './screen/Createadd';
import ADPayment from './screen/ADpayment'
import AdPosted from './screen/AdPosted';
import BlockWatch from './screen/BlockWatch';
const history = createBrowserHistory()

function App() {
  return (
    <div style={{ width: '100%', height: '49vw' }}>
            <Router history={history}>
      <Switch>
          <Route  exact path="/" ><Landing /> </Route>
          <Route exact path="/changePicture">  <ChangePicture />   </Route>
          <Route exact path="/terms">  <Terms />   </Route>
          <Route exact path="/videos">  <Videos />   </Route>
          <Route exact path="/store">  <Store />   </Route>
          <Route exact path="/storeDetail">  <StoreDetail />   </Route>
          <Route exact path="/classifiedDetails">  <ClassifiedDetail />   </Route>
          <Route exact path="/createadd">  <CreateAdd />   </Route>
          <Route exact path="/adpayment">  <ADPayment/>   </Route>
          <Route exact path="/adds">  <AllClassifieds />   </Route>
          <Route exact path="/classifieds">  <Classifieds />   </Route>
          <Route exact path="/blockwatch">  <BlockWatch />   </Route>
          <Route exact path="/adposted">  <AdPosted />   </Route>
          <Route exact path="/addproduct">  <AddStore />   </Route>
          <Route exact path="/forgetPassword">  <ForgetPassword />   </Route>
          <Route exact path="/repostClssified">  <RepostClssified />   </Route>
          <Route exact path="/upload">  <UploadItem />   </Route>
          <Route exact path="/videoDetail">  <VideoDetail />   </Route>
          <Route exact path="/orders">  <Orders />   </Route>
          <Route exact path="/checkout">  <Checkout />   </Route>
          <Route exact path="/favourites">  <Favourites />   </Route>
          <Route exact path="/buy">  <Buy />   </Route>
          <Route exact path="/home">  <Home />   </Route>
          <Route exact path="/login">  <Login/>   </Route>
          <Route exact path="/manageProducts">  <ManageProducts/>   </Route>
          <Route exact path="/manageClassified">  <ManageClassified/>   </Route>
          <Route exact path="/createaccount">  <SignUp />   </Route>
          <Route exact path="/intro">  <Intro />   </Route>
          <Route exact path="/notification">  <Notification />   </Route>
          <Route exact path="/manageVideos">  <ManageVideos />   </Route>
          <Route exact path="/messages">  <Messages />   </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
