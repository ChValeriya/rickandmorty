import React, { useContext } from 'react';

import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { Context } from '../../index';

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const googleProvider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;
    console.log(user);

  };

  return (
    <>
      <button type="button" onClick={login}>login button</button>
      Login
    </>
  );
};

export default Login;
