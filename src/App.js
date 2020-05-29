import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { Logout } from './components/Logout';
import SocialLogin from './components/SocialButton';
import HomePage from './components/HomePage';
import Myprofile from './components/Myprofile';
import ForgotpasswordLoad from './components/ForgotpasswordLoad';
import ResetPasswordConfirmLoad from './components/ResetpasswordConfirmLoad';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import AddNewRecordLoad from './components/AddNewRecordLoad';

export default class App extends Component {
 
  render() {
    return (
        
        <Router>
          <div>
            <ul>

              <Link to="/"></Link>
              <Link to="/signup"></Link>
              <Link to="/login"></Link>
              <Link to="/resetpassword"></Link>          
              <Link to="/resetpassword-confirm"></Link>
              <Link to="/editprofile"></Link>
              <Link to="/logout"></Link>
              <Link to="/sociallogin"></Link>
              <Link to="/home"></Link>
              <Link to="/profile"></Link>     
              <Link to="/adminDashboard"></Link>
              <Link to="/addNewRecordLoad"></Link>
              <Link to="/addNewRecord"></Link>
            </ul>
          </div>
          
          <Switch>
            <Route exact path="/" >
            <HomePage />
            </Route> 

            <Route path="/signup" >
              <Signup />
            </Route>

             <Route path="/login" >
              <Login />
            </Route> 

            <Route path="/resetpassword">
              < ForgotpasswordLoad/>
            </Route>
            <Route path="/resetpassword-confirm">
              <ResetPasswordConfirmLoad />
            </Route>

            <Route path="/logout">
              <Logout />
            </Route>

            <Route path="/sociallogin">
              <SocialLogin />
            </Route>

            <Route path="/myprofile">
              <Myprofile />
             </Route> 

            <PrivateRoute component={AdminDashboard} path="/adminDashboard" exact />

            <Route path="/addNewRecord">
              <AddNewRecordLoad />
             </Route> 
          
          </Switch>
        
        </Router>
       

    );
  }
}


