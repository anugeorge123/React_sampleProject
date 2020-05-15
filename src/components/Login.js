import React from "react";
import axios from 'axios';
import {API_PATH} from '../config';

class Login extends React.Component {

  constructor(){
    super();
    this.state = {
        username : '',
        password :'',
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)   

    const headers = {
      'Authorization': `Token ${localStorage.getItem('token')?localStorage.getItem('token'):''}`, 
  }
  console.log("headerssssssssss",headers['Authorization'])
  if (headers['Authorization']==="Token ")
      {
      console.log("logout")
      }
  else{
      console.log("login")
      alert("you are already logged in")
      window.location="/editprofile"
      
  }


}
handleChange(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    handleSubmit = (e)=>
    {
        e.preventDefault();
        const user = {
            username : this.state.username,
            password : this.state.password,
                      
        };

        const endpoint = 'accounts/login/'
        axios.post(API_PATH.concat(endpoint), user)
        .then(res => {
          if (res.data['status']===200)
          {
            console.log(res.data['token'],"token")
            localStorage.setItem('token', res.data['token']);
             if (res.data['message'] === 'Success'){
            alert("welcome");
             window.location="/editprofile"
          }
          }

          console.log("response data",res.data);
       
       })
        .catch(err => console.log("error",err))
    };

    render(){

      return(
          <div>
              <h1>Login</h1>
              <form>
                      username : <input type='text' name='username' onChange={this.handleChange}/> <br/><br/>
                      password : <input type='text' name='password' onChange={this.handleChange}/><br/><br/>
                                                        
                       <button onClick={this.handleSubmit}>Login</button>
                        <a href="/resetpassword">forgot password</a>
                         
              </form>

          </div>
        
      )
  }
}

export default Login;
