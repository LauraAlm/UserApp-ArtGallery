import React from 'react';
import { useStore } from '../store/myStore';
import { useNavigate, Link } from 'react-router-dom';

const Toolbar = () => {
  const myUser = useStore((store) => store.myUser);
  const setMyUser = useStore((store) => store.setMyUser);

  function logOut() {
    setMyUser(null);
  }

  function renderNavButtons() {
    if (myUser !== null) {
      return (
        <div className='toolbar-links'>
          <Link to='/profile'>Profile</Link>
          <Link to='/create'>Create post</Link>
        </div>
      );
    }
  }

  function renderSignInButtons() {
    if (myUser === null) {
      return (
        <div>
          <Link to='/signIn'>
            <button className='toolbar-links'>Sign in</button>
          </Link>

          <Link to='/register'>
            <button className='toolbar-links register'>Register</button>
          </Link>
        </div>
      );
    } else {
      return (
        <Link to='/'>
          <button className='toolbar-links' onClick={logOut}>
            Log out
          </button>
        </Link>
      );
    }
  }

  return (
    <div className='toolbar d-flex space-btw'>
      <div className='toolbar-links'>
        <Link to='/'>Homepage</Link>
      </div>
      {renderNavButtons()}
      {renderSignInButtons()}
    </div>
  );
};

export default Toolbar;
