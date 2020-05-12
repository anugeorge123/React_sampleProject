import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';


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
            </ul>
          </div>
          
          <Switch>
            <Route exact path="/" >
              <Home/>
            </Route> 

            <Route path="/signup" >
              <Signup />
            </Route> 

          </Switch>
        
        </Router>
       

    );
  }
}


