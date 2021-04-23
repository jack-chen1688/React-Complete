import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <UserItem key={item.id} name={item.name} age={item.age} />
      ))}
    </ul>
  );
};

export default Users;
