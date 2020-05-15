import React from "react";
import axios from 'axios';
import {API_PATH} from '../config';

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
                <h1>Forgot Password</h1>
                <form>
                        Email : <input type='text' name='email' onChange={this.handleChange}/> <br/><br/>        
                         <button onClick={this.handleSubmit}>Submit</button>
                </form>
  
            </div>
          
        )
    }
  }
  
  export default ResetPassword;
  
