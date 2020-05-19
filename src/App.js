import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import ResetPasswordConfirm from './components/ResetPasswordConfirm';
import EditProfile from './components/EditProfile';
import { Logout } from './components/Logout';
import SocialLogin from './components/SocialButton';

export default class App extends Component {
  render() {
    return (
        

        <Router>
          <div>
            <ul>
            <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/signup">SignUp</Link>
              </li>
              <li>
              <Link to="/login">Login</Link>
              </li>
              
              <Link to="/resetpassword"></Link>          
              <Link to="/resetpassword-confirm"></Link>
              <Link to="/editprofile"></Link>
              <Link to="/logout"></Link>
              <li> <Link to="/sociallogin">Login with facebook/Google</Link></li>
             

            </ul>
          </div>
          
          <Switch>
            <Route exact path="/" >
              <Home/>
            </Route> 

            <Route path="/signup" >
              <Signup />
            </Route>

             <Route path="/login" >
              <Login />
            </Route> 

            <Route path="/resetpassword">
              <ResetPassword />
            </Route>
            <Route path="/resetpassword-confirm">
              <ResetPasswordConfirm />
            </Route>

            <Route path="/editprofile">
              <EditProfile />
            </Route>

            <Route path="/logout">
              <Logout />
            </Route>

            <Route path="/sociallogin">
              <SocialLogin />
            </Route>

          </Switch>
        
        </Router>
       

    );
  }
}


