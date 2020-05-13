import React, {Component} from 'react';
import axios from 'axios';
import {selectCountry} from '../utils/Network'

class Signup extends Component{

    constructor(){

        super();
        this.state = {
            username : '',
            password :'',
            email : '',
            phone :'',
            country : [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    componentDidMount() {
          selectCountry()
            .then(res =>{
                if(res.status === 200)
                {
                        console.log(res.data.data[0]["countryName"]);
                        let x = res.data.data;
                        console.log(x[0]["countryName"])


                this.setState({ 
                    country : x.map( (country, index ) => <option key={index} value={country.countryName} > {country.countryName}</option>)
                        });
                }
                else{
                    console.log("error");
                }
            })

            .catch(error =>{
                console.log("ERROR",error)
            })   
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
            email : this.state.email,
            phone : this.state.phone,
            country : this.state.country,
            
        };
        console.log("ffcjgchghgh",user)
         axios.post('http://127.0.0.1:8000/accounts/signup',user)
        .then(res => { console.log(res.data)})
        .catch(err => console.log(err))
    };

    render(){

        return(
            <div>
                <h1>Signup</h1>
                <form>
                        username : <input type='text' name='username' onChange={this.handleChange}/> <br/><br/>
                        password : <input type='text' name='password' onChange={this.handleChange}/><br/><br/>
                        email :<input type='text' name='email' onChange={this.handleChange}/><br/><br/>
                        phone : <input type='text' name='phone' onChange={this.handleChange}/><br/><br/>
                        Country : 
                         <select>
                         {this.state.country}
                         </select>                                        
                         <button onClick={this.handleSubmit}>Sign Up</button>
                </form>

            </div>
          
        )
    }
}


export default Signup;