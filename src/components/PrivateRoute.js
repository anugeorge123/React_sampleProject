import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './../utils';

const role = localStorage.getItem('user_role')      
console.log("head",role)
console.log(isLogin, 'login')

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && role ==='Admin' ?
                <Component {...props} />
            : <Redirect to="/myprofile" />
           
        )} />
     
    );

   
};

export default PrivateRoute;