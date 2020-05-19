import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import {API_PATH} from '../config';

class SocialLogin extends Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
    }

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };
    
    facebookResponse = (e) => {

        const user = {
            access_token :e.accessToken ,
            signup_method : "facebook"
                      
        };
        const endpoint = 'accounts/social-login/'
        axios.post(API_PATH.concat(endpoint), user)
        .then(res => {
          if (res.data['status']===200)
          {
             window.location="/editprofile"
     
          }

          console.log("response data",res.data);
       
       })
        .catch(err => console.log("error",err))
    

    };

    googleResponse = (e) => {


        const googleuser = {
            access_token :e.accessToken ,
            signup_method : "google"
                      
        };
        const endpoint = 'accounts/social-login/'
        axios.post(API_PATH.concat(endpoint), googleuser)
        .then(res => {
          if (res.data['status']===200)
          {
             window.location="/editprofile"
     
          }

          console.log("response data",res.data);
       
       })
        .catch(err => console.log("error",err))
    
    };
    onFailure = (error) => {
      alert(error);
    }
    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>

                    <FacebookLogin
                        appId="483938939147442"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.facebookResponse} />
                    <GoogleLogin
                        clientId="209288068765-as0l0g8e56pd1regmvec3101pk556jqj.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                    />
                </div>
            );

        return (
            <div className="SocialLogin">
                {content}
            </div>
        );
    }
}

export default SocialLogin;
