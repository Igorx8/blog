import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios
        .post("http://posts.com/posts/create", {
          title,
        })
        .finally(() => setTitle(""));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label> Title </label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit" style={{ marginTop: '10px'}}> Submit </button>
      </form>
    </div>
  );
};

export default PostCreate;
