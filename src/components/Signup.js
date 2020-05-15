import React, {Component} from 'react';
import {selectCountry,selectState, selectCity} from '../utils/Network'
import {createUser} from '../utils/API';

class Signup extends Component{

    constructor(){

        super();
        this.state = {
            username : '',
            password :'',
            email : '',
            phone :'',
            country : [],
            state :[],
            city:[],
            selectValue:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    componentDidMount() {
          selectCountry()
            .then(res =>{
                if(res.status === 200)
                {
                        let x = res.data.data;
    
                this.setState({ 
                    country : x.map( (country, index ) => <option key={index} value={country.countryName} > {country.countryName}</option>)
                        });
                }
                else{
                    console.log("error");
                }
            })

            selectState()
            .then(res =>{
                if(res.status === 200)
                {         
                        let x = res.data.data;
     
                this.setState({ 
                    state : x.map( (state, index ) => <option key={index} value={state.stateName} > {state.stateName}</option>)
                        });
                }
                else{
                    console.log("error");
                }
            })

            selectCity()
            .then(res =>{
                if(res.status === 200)
                {
                        let x = res.data.data;
                this.setState({ 
                    city : x.map( (city, index ) => <option key={index} value={city.cityName} > {city.cityName}</option>)
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

        this.setState({[name] : value});

        this.setState({selectValue:event.target.value});

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
            state : this.state.state,
            city :this.state.city
            
        };
 
        console.log("city",user.city)
        let apiUrl = 'accounts/signup/'
        createUser(apiUrl)
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
                         <select value={this.state.selectValue}  onChange={this.handleChange}>
                         {this.state.country}
                         </select> <br/><br/>
                        
                         State : 
                         <select value={this.state.selectValue}  onChange={this.handleChange}>
                         {this.state.state}
                         </select> <br/><br/>   

                         City : 
                         <select value={this.state.selectValue}  onChange={this.handleChange}>
                         {this.state.city}
                         </select> <br/><br/>

                         <button onClick={this.handleSubmit}>Sign Up</button>
                </form>

            </div>
          
        )
    }
}


export default Signup;
