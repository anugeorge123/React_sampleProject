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

          </Switch>
        
        </Router>
       

    );
  }
}


