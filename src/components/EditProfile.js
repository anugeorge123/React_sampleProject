import React from "react";
import { getData,createData } from "../utils/API";

import { Button , Form, Input, Select} from "antd";
import "antd/dist/antd.css";
const FormItem = Form.Item;

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};


class EditProfile extends React.Component {

  constructor(){
    super();
    this.state = {
        username : '',
        email :'',
        phone :'',
        country : '',
        state :'',
        city :''
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadProfile = this.loadProfile.bind(this) ;  

    const headers = {
      'Authorization': `Token ${localStorage.getItem('token')?localStorage.getItem('token'):''}`, 
  }
  console.log("headerssssssssss",headers['Authorization'])
  if (headers['Authorization']==="Token ")
      {
        alert("Please login")
        window.location="/login"
      }
  else{
      console.log("login")
     
      
  }


    }
componentDidMount(){
 this.loadProfile(); 
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

loadProfile = (e)=>
{
    const endpoint = 'accounts/editprofile/'
     getData(endpoint)
       .then(res =>{
          console.log("log",res.data['email'])

          this.setState({username : res.data['username']});
          this.setState({email : res.data['email']});
          this.setState({phone : res.data['phone']});
          this.setState({country : res.data['country']});
          this.setState({state : res.data['state']});
          this.setState({city : res.data['city']});

     })

    

.catch(err => console.log("eroorrrr",err));
}
   

handleSubmit = (e)=>
{
     e.preventDefault();
     const user = {
            username : this.state.username,
            email : this.state.email,
            phone : this.state.phone,
            country :this.state.country,
            state : this.state.state,
            city :this.state.city
                      
        };

        const endpoint = 'accounts/editprofile/'

        createData(endpoint,user)
        .then(res =>{
           console.log("response",res);
      })

    };

    render(){

      return(
          <div>
            
          


              
              <Form>   

              <FormItem {...tailLayout}>
                <h1>Edit Profile</h1> 
                </FormItem>

                <FormItem {...layout} label = "Username" >
                  <Input value = {this.state.username} onChange={this.handleChange} style={{ width: 300 }} name="username" size="large"/>
                </FormItem>

                <FormItem {...layout} label = "Email" >
                  <Input value = {this.state.email} onChange={this.handleChange} style={{ width: 300 }} name="email" size="large"/>
                </FormItem>

                <FormItem {...layout} label = "Phone" >
                  <Input value = {this.state.phone} onChange={this.handleChange} style={{ width: 300 }} name="phone" size="large"/>
                </FormItem>

                <FormItem {...layout} label = "Country" >
         
                  <Input value = {this.state.country} onChange={this.handleChange} style={{ width: 400 }} name="country" size="large"/>
                </FormItem>

                <FormItem {...layout} label = "State" >
        
                  <Input value = {this.state.state} onChange={this.handleChange} style={{ width: 400 }} name="state" size="large"/>
                </FormItem>

                <FormItem {...layout} label = "City" >
             
                  <Input value = {this.state.city} onChange={this.handleChange} style={{ width: 400 }} name="city" size="large"/>
                </FormItem>

                <FormItem {...tailLayout} >
                <Button type="primary" onClick={this.handleSubmit}>Update</Button>
                </FormItem>


                      {/* username : <Input type='text' value = {this.state.username} name='username' onChange={this.handleChange}style={{ width: 400 }}/> <br/><br/>
                      email : <Input type='text' value = {this.state.email} name='email' onChange={this.handleChange}style={{ width: 400 }}/><br/><br/>
                      phone : <Input type='text' value = {this.state.phone} name='phone' onChange={this.handleChange}style={{ width: 400 }}/><br/><br/>
                      country : <Input type='text' value = {this.state.country} name='country' onChange={this.handleChange}style={{ width: 400 }}/><br/><br/>
                      state : <Input type='text' value = {this.state.state} name='state' onChange={this.handleChange}style={{ width: 400 }}/><br/><br/>
                      city : <Input type='text' value = {this.state.city} name='city' onChange={this.handleChange}style={{ width: 400 }}  /><br/><br/> */}

                       {/* <Button type="primary" onClick={this.handleSubmit}>Update</Button> */}
                       
              </Form>

          </div>
        
      )
  }
}

export default EditProfile;


