import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import { Button } from "react-bootstrap";
import "./PostUser.css";
const PostUser = ({ match, history }) => {
  const [posts, setPost] = useState([]);
  const getPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  };

  useEffect(() => {
    getPost();
    console.log(Number(y[1]));
  }, []);

  var x = match.params.id;
  var y = x.toString();
  var z = y.slice(1);

  return(<div classname="postuser">
    <h1>Posts of User N° {z}</h1>
   
    <div className="listPost">
      {posts
        .filter((post) => post.userId === Number(z))
        .map((post) => (
          <Post post={post} key={post.id} idpost={match.params.id} />
        ))}
    </div>
    <div className="btn">
      
      <Button variant="success" onClick={() => history.goBack()}>
        Go back{" "}
      </Button>
    </div>
  </div>)
  
};

export default PostUser;
