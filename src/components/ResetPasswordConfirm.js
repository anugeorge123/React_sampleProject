import React from "react";
import { getData,createData } from "../utils/API";

class ResetPasswordConfirm extends React.Component {

  constructor(){
    super();
    this.state = {
        password : '',
        token:''  
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)   
}
componentDidMount()
{
  this.getToken(); 
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

getToken()
{
  const endpoint = 'accounts/password-reset-confirm/'
  getData(endpoint)
  .then(res => {
    if (res.data['status']===200)
    {
      console.log(res.data,"get data")
    }
    console.log("response data",res.data['token']);
    this.setState({
      token : res.data['token']
  });
  });

}
    handleSubmit = (e)=>
    {
        e.preventDefault();
        const user = {
            password : this.state.password  ,
            token : this.state.token                   
        };

        const endpoint = 'accounts/password-reset-confirm/'

    createData(endpoint,user)
    .then(res => {
      if (res.data['status']===200)
      {
        console.log(res.data,"post data")
      }
      console.log("final data",res.data);
   
   })
    .catch(err => console.log("eroorrrr",err))

    }

    render(){

        return(
            <div>
                <h1>Reset Password</h1>
                <form>
                        Password : <input type='text' name='password' onChange={this.handleChange}/> <br/><br/> 
                        <input type='text'hidden name='token'value={this.state.token} onChange={this.handleChange}/> <br/><br/> 
                         
                        <button onClick={this.handleSubmit}>Submit</button>
                </form>
  
            </div>
          
        )
    }
  }
  
  export default ResetPasswordConfirm;