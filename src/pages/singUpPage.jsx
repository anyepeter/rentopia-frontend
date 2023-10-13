import React from 'react';
import SingUp from '../components/Authentication/authenticateSingUp';
import AuthenticateSider from '../components/Authentication/authenticateSibar';

const SingUpPage = () => {

  const test = {
    address: 'register'
  };
    return <>
    
      <AuthenticateSider test={test}/>
      <SingUp />

    </>;
}

export default SingUpPage;