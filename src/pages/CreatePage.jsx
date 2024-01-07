import React, { useRef } from 'react';
import { useStore } from '../store/myStore';

const CreatePage = () => {
  const postImg = useRef(null);
  const postTitle = useRef(null);

  const addPost = useStore((store) => store.addPost);
  const myUser = useStore((store) => store.myUser);
  const getPosts = useStore((store) => store.posts);

  function createPost() {
    const allIds = [...getPosts].map((x) => x.id);

    let nextId = Math.max(...allIds) + 1;

    addPost({
      id: nextId,
      userId: myUser.id,
      img: postImg.current.value,
      title: postTitle.current.value,
      username: myUser.username,
      date: new Date(Date.now()).toDateString(),
    });

    alert(
      'Post created successfully. Please click OK and head to the homepage.'
    );
  }

  return (
    <div>
      <div className='create-container'>
        <h1 className='create-post-title'>Create your post below: </h1>
        <input
          className='create-post-input'
          type='text'
          ref={postImg}
          placeholder='Insert image URL...'
        />
        <input
          className='create-post-input'
          type='text'
          ref={postTitle}
          placeholder='Insert artwork title & year...'
        />
        <button className='create-post-button' onClick={createPost}>
          Create post
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
