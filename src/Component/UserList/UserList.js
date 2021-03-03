import React, { useState, useEffect } from "react";
import User from "../User/User";
import { Form } from "react-bootstrap";
import "./UserList.css";
const UserList = () => {
  const [users, setUser] = useState([]);

  function getUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }
  useEffect(() => {
    getUser();
    console.log(users)
  }, []);
const [input, setInput] = useState("")
  return (
    <div className="home">
      <h1>List of Users</h1>
      <div className="inp">
        <Form.Control type="text" onChange={(e)=>setInput(e.target.value)} placeholder="set user name..." />
      </div>

      <div className="listUser">
        {users.filter(user=>user.name.toLowerCase().includes(input.toLowerCase())).map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
