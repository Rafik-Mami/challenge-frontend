import React from "react";
import "./Post.css";
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Post = ({ post }) => {
  return (
    <div className='post'>
      <Card className="post" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>

          <Card.Text>{post.body}</Card.Text>
          <Link to={`/comments/:${post.id}`}>
            <Button variant="primary">comments</Button>
          </Link>{" "}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
