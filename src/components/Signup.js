import React, {Component} from 'react';
import axios from 'axios';
import { selectCountry} from '../api/Get'
// import Post from './Post';

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
        //   .then((response) => {
        //     //   console.log(response.json())
        //     return response.json();
        //   })
        //   .then(data => {//
        //     console.log(data.country[0])
        //     let countryFromApi = data.map(country => {
        //       return {value: country, display: country}
        //     });


        //     this.setState({
        //       country: [{value: '', display: '(Select your Country)'}].concat(countryFromApi)
        //     });
        //   }).catch(error => {
        //     // console.log(error);
        //   });
         
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

         axios.post('http://127.0.0.1:8000/accounts/signup',user)
        .then(res => { console.log(res.data)})
        .catch(err => console.log(err))
    };

    render(){

        return(
            <div align="center">

                <h1>Signup</h1>
                <form onSubmit={this.handleOnSubmit}>
                  
                        username : <input type='text' name='username' onChange={this.handleChange}/> <br/><br/>
                        password : <input type='text' name='password' onChange={this.handleChange}/><br/><br/>
                        email :<input type='text' name='email' onChange={this.handleChange}/><br/><br/>
                        phone : <input type='text' name='phone' onChange={this.handleChange}/><br/><br/>
                        Country : 
                         <select>
                        {this.state.country.map((country) => <option key={country.value} value={country.value}>{country.display}</option>)}
                         </select>
                         <button>Sign Up</button>
                </form>

            </div>
          
        )
    }
}


export default Signup;