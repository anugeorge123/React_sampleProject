import React from "react";
import axios from 'axios';
import {API_PATH} from '../config';

import { Button ,  Form, Input} from "antd";
import "antd/dist/antd.css";
const FormItem = Form.Item;
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

class ResetPassword extends React.Component {

  constructor(){
    super();
    this.state = {
        email : ''       
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)   

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
            email : this.state.email                     
        };

        const endpoint = 'accounts/resetpassword/'
        axios.post(API_PATH.concat(endpoint), user)
        .then(res => {
          if (res.data['status']===200)
          {
            console.log(res.data,"actual data")
          }

          console.log("response data",res.data);
       
       })
        .catch(err => console.log("eroorrrr",err))
    };
    render(){

        return(
            <div>
                
                <Form>
                <FormItem {...tailLayout}  >
                    <h1>Forgot Password?</h1>
                    </FormItem>

                    <FormItem {...layout} label="Email" >
                    <Input  name='email' onChange={this.handleChange} style={{ width: 400 }} placeholder="Enter your email here" size="large"/> 
                    </FormItem>

                    <FormItem {...tailLayout}  >
                    <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
                    </FormItem>

        
                       
                </Form>
  
            </div>
          
        )
    }
  }
  
  export default ResetPassword;
  
