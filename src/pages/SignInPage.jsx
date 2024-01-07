import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/myStore';
import logo from '../img/logo.png';

const SignInPage = () => {
  const usernameInp = useRef(null);
  const passwordInp = useRef(null);

  const users = useStore((store) => store.users);
  const setMyUser = useStore((store) => store.setMyUser);
  const navigate = useNavigate();

  function auth() {
    const user = {
      username: usernameInp.current.value,
      passwordOne: passwordInp.current.value,
    };

    const loggedIn = users.find(
      (x) => x.username === user.username && x.passwordOne === user.passwordOne
    );

    if (loggedIn) {
      setMyUser(loggedIn);
      navigate('/');
    } else {
      return alert(
        'The user with provided username and password was not found.'
      );
    }
  }

  return (
    <div className='d-flex auth-form'>
      <div className='grow1'></div>
      <div className=' grow1 d-flex f-column a-center'>
        <img className='logo' src={logo} alt='Les Artes - Art Gallery - Logo' />

        <div className=' d-flex f-column a-center '>
          <input
            className='auth-input'
            type='text'
            ref={usernameInp}
            placeholder='Enter your username'
          />
          <input
            className='auth-input'
            type='password'
            ref={passwordInp}
            placeholder='Enter your password'
          />

          <button className='auth-button' onClick={auth}>
            Sign In
          </button>
        </div>
      </div>
      <div className='grow1'></div>
    </div>
  );
};

export default SignInPage;
