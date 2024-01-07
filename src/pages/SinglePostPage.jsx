import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/myStore';

const SinglePostPage = () => {
  const params = useParams();
  const posts = useStore((store) => store.posts);

  const post = posts.find((x) => x.id == params.id);

  return (
    <div>
      {
        <div className='d-flex gap10 selected-post-container'>
          <div className='grow1'>
            <img
              className='single-post-img'
              src={post.img}
              alt='Artwork of the artist and/or user.'
            />
          </div>
          <div className='grow1 selected-post-title'>
            <h1>Title: {post.title}</h1>
            <h3>User: {post.username}</h3>
            <div>Post created: {post.date}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default SinglePostPage;
