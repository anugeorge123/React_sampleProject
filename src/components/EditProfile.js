import React from "react";
import { getData,createData } from "../utils/API";

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
            <a href="/logout">Logout</a>
              <h1>Edit Profile</h1>
              <form>                       
                      username : <input type='text' value = {this.state.username} name='username' onChange={this.handleChange}/> <br/><br/>
                      email : <input type='text' value = {this.state.email} name='email' onChange={this.handleChange}/><br/><br/>
                      phone : <input type='text' value = {this.state.phone} name='phone' onChange={this.handleChange}/><br/><br/>
                      country : <input type='text' value = {this.state.country} name='country' onChange={this.handleChange}/><br/><br/>
                      state : <input type='text' value = {this.state.state} name='state' onChange={this.handleChange}/><br/><br/>
                      city : <input type='text' value = {this.state.city} name='city' onChange={this.handleChange}/><br/><br/>

                       <button onClick={this.handleSubmit}>Update</button>
                       
              </form>

          </div>
        
      )
  }
}

export default EditProfile;


