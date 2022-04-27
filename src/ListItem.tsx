import React from "react";
import { User } from "./constants/Interfaces/UserListInterface";

const ListItem: React.FC<User> = ({ user }) => {
  //console.log(user);
  return (
    <li className="list-item">
      <div className="list-item-image">
        <img src={user.avatar.url} alt="profile-img" />
      </div>
      <div className="list-item-content">
        <h4>
          {user.name.first} {user.name.last}
        </h4>
        <p> {user.email} </p>
      </div>
    </li>
  );
};

export default ListItem;
