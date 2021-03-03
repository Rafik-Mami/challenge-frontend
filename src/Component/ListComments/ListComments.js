import React, { useState, useEffect } from "react";
import Comments from "../Comments/Comments";
import {Button} from 'react-bootstrap'

import "./ListComments.css";
const ListComments = ({ match ,history}) => {
  const [comments, setComments] = useState([]);
  const getComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  };
  useEffect(() => {
    getComments();
    console.log(comments.filter((comment) => comment.postId ===5));
    console.log(match.params.id)
    console.log(z);
  }, []);

  var x = match.params.id;
  var y = x.toString();
  var z = y.slice(1);
  return (
    <div className="ListComments">
      <span className="nbComments">
        {
          comments.filter((comment) => comment.postId === Number(z))
            .length
        }{" "}
        comments
      </span>
      {comments
        .filter((comment) => comment.postId === Number(z))
        .map((comment) => (
          <Comments comment={comment} key={comment.id} />
        ))}
        
      <div className='btn'>

        <Button variant="success" onClick={() => history.goBack()}>Go back </Button>
      </div>
   
    </div>
  );
};

export default ListComments;
