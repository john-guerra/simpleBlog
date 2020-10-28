import React, { useState, useEffect } from "react";

import "./App.css";

import Posts from "./Posts.js";

import CreatePost from "./CreatePost.js";

function App() {
  const [show, setShow] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    console.log("getting posts");
    try {
      const _posts = await fetch("/posts").then((res) => res.json());
      console.log("got posts", posts);
      setPosts(_posts);
    } catch (err) {
      console.log("error ", err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []); // Only run the first time

  const onChange = (evt) => {
    console.log("On change", evt);
    setShow(evt.target.checked);
  };

  console.log("render App", posts);
  return (
    <div className="App">
      <h1>My Blog we with cra</h1>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="nav-item active nav-link"
          href="posts"
          onClick={(evt) => {
            evt.preventDefault();
            setShow(true);
          }}
        >
          Posts <span className="sr-only">(current)</span>
        </a>

        <a
          className="nav-link"
          href="about"
          onClick={(evt) => {
            evt.preventDefault();
            setShow(false);
          }}
        >
          About
        </a>
      </nav>

      <label>
        Show posts? <input type="checkbox" checked={show} onChange={onChange} />
      </label>

      <CreatePost renderPosts={getPosts}></CreatePost>
      {show ? <Posts posts={posts}></Posts> : "Sorry no posts for you"}

      <footer>Made by John with Love❤️</footer>
    </div>
  );
}

export default App;
