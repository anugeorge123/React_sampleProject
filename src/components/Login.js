import React from "react";
import axios from 'axios';
import {API_PATH} from '../config';

import { Button ,Row, Form,Input} from "antd";
import "antd/dist/antd.css";

import Dashboard from './HomePage';
const FormItem = Form.Item;
const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

const role = localStorage.getItem('user_role')      
console.log("Role",role)

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
      if(role==='Admin')
            {
                window.location="/adminDashboard"
            }
            else{
                window.location="/myprofile"
            }
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
                       console.log("user role",res.data['user_role'])
                      if (res.data['user_role'] === "Admin")
                      {
                        
                        localStorage.setItem('user_role', res.data['user_role']);
                           window.location="/adminDashboard"
                      }
                      else{
                        // const role="Partner";
                        localStorage.setItem('user_role', res.data['user_role']);
                         
                        window.location="/myprofile"
                      }
            
          }
          }

          console.log("response data",res.data);
       
       })
        .catch(err => console.log("error",err))
    };

    render(){

      return(
          <div>
              <Form >

              <FormItem {...tailLayout}>
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br>
               </FormItem>

              <FormItem {...tailLayout}>
              <h1>Login</h1>
               </FormItem>

            <FormItem {...layout} label="USERNAME">           
              <Input type='text' name='username' onChange={this.handleChange} placeholder="Username" style={{ width: 400 }} size="large"/> 
            </FormItem>

            
             <FormItem {...layout} label="PASSWORD">
             <Input type='password' name='password' onChange={this.handleChange} placeholder="Password" style={{ width: 400 }} size="large"/><br/><br/>
              </FormItem>

              <FormItem {...tailLayout}>
              <Button type="primary"  onClick={this.handleSubmit}>Login</Button>
                       <a href="/resetpassword">{' '}Forgot password?</a>  
              </FormItem>
            
                
              </Form>

          </div>
        
      )
  }
}

export default Login;
