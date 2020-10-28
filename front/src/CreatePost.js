import React, { useState } from "react";
import PropTypes from "prop-types";

const CreatePost = (props) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  console.log("render CreatePost", author, text);
  return (
    <div className="CreatePost">
      <h2>Create Post</h2>
      <form>
        <label>
          Author:{" "}
          <input
            type="text"
            value={author}
            onChange={(evt) => setAuthor(evt.target.value)}
          />
        </label>
        <br />
        <label>
          Text:{" "}
          <input
            type="text"
            value={text}
            onChange={(evt) => setText(evt.target.value)}
          />
        </label>
        <br />
        <button
          type="submit"
          onClick={async (evt) => {
            evt.preventDefault();

            const response = await fetch("/posts/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                author: author,
                text: text,
              }), // body data type must match "Content-Type" header
            });

            props.renderPosts();

            console.log("Please create a post", response);
          }}
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

CreatePost.propTypes = {
  renderPosts: PropTypes.func.isRequired,
};

export default CreatePost;
