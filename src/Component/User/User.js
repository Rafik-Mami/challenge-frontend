import React from "react";
import {Card,Button} from 'react-bootstrap'
import './User.css'
import {Link} from 'react-router-dom'
const User = ({user}) => {
  return (
    <div >
      <Card className='user' style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className='name'>{user.name}</Card.Title>
          <Card.Text className='username'>
           {user.username}
          </Card.Text>
         <Link to={`/posts/:${user.id}`}>
         <Button variant="primary">Posts</Button>
         </Link> 
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
