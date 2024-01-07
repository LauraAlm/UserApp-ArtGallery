import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/myStore';
import SinglePost from '../components/SinglePost';

const UserPostsPage = () => {
  const params = useParams();
  const posts = useStore((store) => store.posts);

  const postByUser = posts.filter((x) => x.username == params.username);

  return (
    <div>
      {
        <div className='d-flex f-wrap gap10'>
          {postByUser.map((x) => (
            <SinglePost key={x.id} post={x} />
          ))}
        </div>
      }
    </div>
  );
};

export default UserPostsPage;
