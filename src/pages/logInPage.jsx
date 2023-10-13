import React from 'react';
import AuthenticateSider from '../components/Authentication/authenticateSibar';
import Login from '../components/Authentication/login';


const LoginPage = () => {
    const test = {
      address: 'login'
    };
  
    return (
      <>
        <AuthenticateSider test={test} />
        <Login />
      </>
    );
  };
  
  export default LoginPage;