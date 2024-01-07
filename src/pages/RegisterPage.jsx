import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/myStore';
import logo from '../img/logo.png';

const RegisterPage = () => {
  const refs = {
    usernameRegister: useRef(),
    passwordOneRegister: useRef(),
    passwordTwoRegister: useRef(),
  };

  const users = useStore((store) => store.users);
  const registerUser = useStore((store) => store.register);
  const setMyUser = useStore((store) => store.setMyUser);
  const navigate = useNavigate();

  function auth() {
    const allIds = [...users].map((x) => x.id);

    let nextId = Math.max(...allIds) + 1;

    const user = {
      id: nextId,
      username: refs.usernameRegister.current.value,
      passwordOne: refs.passwordOneRegister.current.value,
      passwordTwo: refs.passwordTwoRegister.current.value,
    };

    if (user.username.length < 4 || user.username.length > 20) {
      return alert(
        'Username should be from 4 to 20 symbols long. Please adjust your username.'
      );
    }

    if (user.passwordOne !== user.passwordTwo) {
      return alert('Passwords should match. Please adjust your passwords.');
    }

    if (user.passwordOne.length < 4 || user.passwordOne.length > 20) {
      return alert(
        'Password should be from 4 to 20 symbols long. Please adjust your password.'
      );
    }

    const r = /\d+/;

    if (user.passwordOne.match(r) === null) {
      return alert(
        'Password should contain at least one numeric symbol. Please adjust your password.'
      );
    }

    if (users.find((x) => x.username === user.username)) {
      return alert('Username is already taken. Please create a new one.');
    }

    registerUser(user);

    navigate('/signIn');
  }

  return (
    <div className='d-flex auth-form'>
      <div className='grow1'></div>
      <div className=' grow1 d-flex f-column gap10 a-center'>
        <img className='logo' src={logo} alt='Les Artes - Art Gallery - Logo' />

        <div className=' d-flex f-column gap10 a-center'>
          <input
            className='auth-input'
            type='text'
            ref={refs.usernameRegister}
            placeholder='Enter your username'
          />
          <input
            className='auth-input'
            type='password'
            ref={refs.passwordOneRegister}
            placeholder='Enter your password'
          />
          <input
            className='auth-input'
            type='password'
            ref={refs.passwordTwoRegister}
            placeholder='Confirm your password'
          />

          <button className='auth-button' onClick={auth}>
            Register
          </button>
        </div>
      </div>
      <div className='grow1'></div>
    </div>
  );
};

export default RegisterPage;
