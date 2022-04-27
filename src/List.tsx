import React from "react";
import ListItem from "./ListItem";
import { Users, User } from "./constants/Interfaces/UserListInterface";

const List: React.FC<Users> = ({ users }) => {
  // console.log(users);
  return (
    <>
      {users &&
        users.length > 0 &&
        users.map((user: User) => (
          <>
            <ListItem user={user} key={user.id} />
          </>
        ))}
    </>
  );
};
export default List;
