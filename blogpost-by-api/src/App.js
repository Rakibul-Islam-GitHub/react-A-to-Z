import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1 className='text-center header'>Welcome Blog-post by API!</h1>
       <Post></Post>
      
    </div>
  );
}

function Post() {
  const [posts, setPosts]= useState([]);
  useEffect( ()=> {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
    .then(res=> res.json())
    .then(data => setPosts(data))
  },[]);
  
  return(
    <div>
      { posts.map(post=>{
       return (
        <article>
        <h2 className="title">{post.title}</h2>
        <p>Author: Rakibul</p>
        <p className="desc">{post.body}</p>
        </article>
       )
      })
      
       }
    </div>
  )
  
}


export default App;
