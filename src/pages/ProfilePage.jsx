import React, { useRef } from 'react';
import { useStore } from '../store/myStore';

const ProfilePage = () => {
  const users = useStore((store) => store.users);
  const posts = useStore((store) => store.posts);
  const myUser = useStore((store) => store.myUser);
  const setMyUser = useStore((store) => store.setMyUser);
  const saveUpdatedUsers = useStore((store) => store.saveUpdatedUsers);
  const saveUpdatedPosts = useStore((store) => store.saveUpdatedPosts);
  const username = useRef(myUser.username);

  function changeUsername() {
    if (
      username.current.value.length < 4 ||
      username.current.value.length > 20
    ) {
      return alert(
        'Username should be from 4 to 20 symbols long. Please adjust your new username.'
      );
    }

    if (users.find((x) => x.username == username.current.value)) {
      return alert('Username is already taken. Please choose another one.');
    }

    const updatedUsers = users.map((user) => {
      if (user.id === myUser.id) {
        return { ...user, username: username.current.value };
      }
      return user;
    });
    saveUpdatedUsers(updatedUsers);
    setMyUser({ ...myUser, username: username.current.value });

    const updatedPosts = posts.map((post) => {
      if (post.userId === myUser.id) {
        return { ...post, username: username.current.value };
      }
      return post;
    });
    saveUpdatedPosts(updatedPosts);
    alert('Username changed successfully.');
  }

  return (
    <div>
      <div className=' d-flex f-column profile-container'>
        <h1>Change your username below: </h1>
        <input
          className='profile-input'
          type='text'
          ref={username}
          placeholder={myUser.username}
        />
        <button onClick={changeUsername}>Change Username</button>
      </div>
    </div>
  );
};

export default ProfilePage;
