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

const history = createBrowserHistory()

function App() {
  return (
    <div style={{ width: '100%', height: '49vw' }}>
            <Router history={history}>
      <Switch>
      <Route  exact path="/" >
            <Landing />
          </Route>
          <Route exact path="/changePicture">
            <ChangePicture />
          </Route>
          <Route exact path="/forgetPassword">
            <ForgetPassword />
          </Route>
          <Route exact path="/repostClssified">
            <RepostClssified />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/favourites">
            <Favourites />
          </Route>
          <Route exact path="/buy">
            <Buy />
          </Route>
          
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/manageProducts">
            <ManageProducts/>
          </Route>
          <Route exact path="/manageClassified">
            <ManageClassified/>
          </Route>
          
          <Route exact path="/createaccount">
            <SignUp />
          </Route>
          <Route exact path="/intro">
            <Intro />
          </Route>
          <Route exact path="/notification">
            <Notification />
          </Route>
          <Route exact path="/manageVideos">
            <ManageVideos />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
