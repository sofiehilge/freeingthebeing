import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../templates/Header';
import Background from '../templates/Background';
const Groups = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace 'https://your-wordpress-site.com' with your actual WordPress site URL
    axios
      .get('http://localhost/wp-json/wp/v2/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  return (
    <>
      <Background>
        <Header title='Grupper' />
        <div className='text-center'>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title.rendered}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </li>
            ))}
          </ul>
        </div>
      </Background>
    </>
  );
};

export default Groups;
