import React, { useState } from 'react';
import Layout from './Layout';

const Song = () => {
      const [posts, setPosts] = useState([]);
      const [image, setImage] = useState('');
      const [description, setDescription] = useState('');

      const handleCreatePost = () => {
      // Assume you have an authentication system to check if the user is an admin
      const isAdmin = true; // Replace with your authentication logic

    if (isAdmin) {
      // Create a new post object
      const newPost = {
        image,
        description,
        date: new Date().toLocaleDateString(),
      };

      // Update the posts array with the new post
      setPosts([...posts, newPost]);

      // Clear input fields
      setImage('');
      setDescription('');
    } else {
      alert('You are not authorized to create posts.');
    }
  };

  return (
    <Layout>
    <h1>Song of the Week:</h1>
    <main>
      <h2>Create a New Post</h2>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br></br>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br></br>
      <button onClick={handleCreatePost}>Create Post</button>

      <hr />

      <h2>Recent Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <img src={post.image} alt={`Post ${index + 1}`} style={{ width: '100px' }} />
          <p>{post.description}</p>
          <p>Date: {post.date}</p>
        </div>
      ))}

      <h2>Last Four Weeks' Songs</h2>
      <body>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Song</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Week 1</td>
            <td>Song 1</td>
          </tr>
          <tr>
            <td>Week 2</td>
            <td>Song 2</td>
          </tr>
          <tr>
            <td>Week 3</td>
            <td>Song 3</td>
          </tr>
          <tr>
            <td>Week 4</td>
            <td>Song 4</td>
          </tr>
        </tbody>
      </table>
      </body>
      <hr />
    </main>
    </Layout>
  );
}

export default Song;