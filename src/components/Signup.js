import React, {Component} from 'react';
import {selectCountry,selectState, selectCity} from '../utils/Network'
import {createUser} from '../utils/API';

import { Button , Row, Form, Input, Select} from "antd";
import "antd/dist/antd.css";
const FormItem = Form.Item;


const role = localStorage.getItem('user_role')      
console.log("Role",role)


const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };


  const layoutSecond = {
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
        this.fetchCountry =this.fetchCountry.bind(this)

        const headers = {
            'Authorization': `Token ${localStorage.getItem('token')?localStorage.getItem('token'):''}`, 
        }
        console.log("headers----------------->",headers['Authorization'])
        if (headers['Authorization']==="Token ")
            {
            console.log("logout")
            }
        else{
            console.log("login")
            // alert("you are already logged in, Please logout for another sign-up")
            if(role==='Admin')
            {
                window.location="/adminDashboard"
            }
            else{
                window.location="/myprofile"
            }
          
            
        }
        
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
        
      fetchCountry = (e) => {
        // let idx = e.target.selectedIndex;
        let dataset = e.target.options.dataset;
        console.log('ISD Code: ', dataset);
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
               <Form >
               <FormItem  style={{ marginLeft: 100 }}>
                   <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Row type= "flex"  style={{ marginLeft: 700 }}  >
                <h1>Signup</h1></Row><br/>
                </FormItem>

                  <Row style={{ marginLeft: 450 }}>
                  <FormItem   {...layout} label ="Username" name = "username"> 
                 {/* <Input type='text' name='username' onChange={this.handleChange} style={{ width: 400 }} size="middle"/> */}
                <Input onChange={this.handleChange} style={{ width: 300 }}size="large" name = "username"/>
                </FormItem>
               

                <FormItem   {...layoutSecond}  label ="Password" >
                {/* <b>Password  :  </b> <Input type='text' name='password' onChange={this.handleChange} style={{ width: 400 }}/> */}
                 <Input style={{ width: 300 }}  name = "password" size="large"/>
                 </FormItem>
                      
                      </Row>   <br/> 
               
                <Row style={{ marginLeft: 455 }}>
                 <FormItem  {...layout} label ="  E-mail" >

                 {/* <Row type= "flex"  style={{ marginLeft: 700 }}  > */}
                        {/* <b>email :</b><Input type='text' name='email' onChange={this.handleChange} style={{ width: 400 }}/> */}
                        {/* </Row> */}
                        {/* <br/><br/> */}
                        <Input style={{ width: 300 }} name = "email" size="large" />

                 </FormItem>

                 <FormItem  {...layoutSecond} label ="Phone" >
                 {/* <Row type= "flex"  style={{ marginLeft: 700 }}  > */}
                       {/* <b>phone :</b>  <Input type='text' name='phone' onChange={this.handleChange} style={{ width: 400 }}/> */}
                        {/* </Row> */}
                        {/* <br/><br/> */}
                        <Input style={{ marginRight: 80, width: 300  }} size="large" name = "phone"/>

                 </FormItem>
                 </Row> <br/>
                 <Row style={{ marginLeft:450 }}>
                        
                 <FormItem  {...layout} label ="Country" name = "country">
                        {/* <Row type= "flex"  style={{ marginLeft: 700 }}  > */}
                        {/* <b>Country : </b> */}
                         <Select  onChange={this.fetchCountry} style={{ width: 300 }} size="large">
                         {this.state.country}
                         </Select> 
                         {/* </Row> */}
                         {/* <br/><br/> */}
                 </FormItem>        
                        
                 <FormItem  {...layout} label ="State" name = "state">
                         {/* <Row type= "flex"  style={{ marginLeft: 700 }}  > */}
                         {/* <b>State :</b>  */}
                         <Select value={this.state.selectValue}  onChange={this.handleChange} style={{ marginRight: 310, width: 300 }} size="large">
                         {this.state.state}
                         </Select> 
                         {/* </Row> */}
                         {/* <br/><br/> */}
                </FormItem>   
                </Row><br/>
                <Row style={{ marginLeft: 455 }}>
                <FormItem  {...layout} label ="City" name = "city" >
                         {/* <Row type= "flex"  style={{ marginLeft: 700 }}  >  */}
                         {/* <b>City :</b>  */}
                         <Select value={this.state.selectValue}  onChange={this.handleChange} style={{ width: 300 }} size="large">
                         {this.state.city}
                         </Select>                        
                         {/*</Row> */}
                         {/* <br/><br/> */}
                </FormItem >
                
                         <FormItem {...tailLayout}>
                         <Button type="primary" onClick={this.handleSubmit} style={{ marginRight: 200}}>Sign Up</Button>
                         <a href="/login">{' '}Already have an account? Login</a> 
                         </FormItem>    
                   </Row>  
                         </Form>
                         {/* <button type="primary" style={{ marginLeft: 700 }} onClick={this.handleSubmit}>Sign Up</button> */}
                         {/* </FormItem> */}

            </div>
          
        )
    }
}


export default Signup;
