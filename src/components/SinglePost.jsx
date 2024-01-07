import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SinglePost = ({ post }) => {
  const nav = useNavigate();

  return (
    <div className='singlePost'>
      <img
        src={post.img}
        alt='Artwork of the artist and/or user.'
        onClick={() => nav(`/post/${post.username}/${post.id}`)}
      />
      <h3 className='post-title'>{post.title}</h3>

      <Link to={'/userPosts/' + post.username}>
        <h5>{post.username}</h5>
      </Link>
    </div>
  );
};

export default SinglePost;
