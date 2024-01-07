import React, { useState } from 'react';
import { useStore } from '../store/myStore';
import SinglePost from '../components/SinglePost';

const IndexPage = () => {
  const notSortedPosts = useStore((store) => store.posts);

  const [posts, setPosts] = useState(notSortedPosts);

  function compareByTitle(a, b) {
    return a.title.localeCompare(b.title);
  }

  function sortByTitle() {
    let sortedPosts = [...posts].sort(compareByTitle);
    setPosts(sortedPosts);
  }

  function sortByUploadTime() {
    let sortedPosts = [...posts].sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    setPosts(sortedPosts);
  }

  return (
    <div>
      <div>
        <button className='sort' onClick={() => sortByTitle()}>
          Sort by: title
        </button>
        <button className='sort' onClick={sortByUploadTime}>
          Sort by: upload time
        </button>
      </div>

      <div className='d-flex f-wrap gap10 posts-container'>
        {posts.map((x) => (
          <SinglePost key={x.id} post={x} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
