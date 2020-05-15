import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';

import Home from './Home';
import EditProfile from './EditProfile';
import { Logout } from './Logout';

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
                <Link to="/editprofile">Edit Profile</Link>
                </li>
  
                <li>
                <Link to="/logout">Logout</Link>
                </li>
  
              </ul>
            </div>
            
            <Switch>

              <Route exact path="/" >
                <Home/>
              </Route> 
 
              <Route path="/editprofile">
                <EditProfile />
              </Route>
  
              <Route path="/logout">
                <Logout />
              </Route>

            </Switch>
          
          </Router>
         
  
      );
    }
  }