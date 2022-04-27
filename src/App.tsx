import React, { useEffect, useState } from "react";
import "./styles.css";
import List from "./List";
import { Users, User } from "./constants/Interfaces/UserListInterface";
import { findCurUser } from "./utils/utils";
import { fetchUsersData, fetchCurUser } from "./constants/APIs/UsersApi";

export default function App() {
  const [users, setUsers] = useState<Users | undefined>(undefined);
  const [currUser, setCurrUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    async function fetchInt() {
      let promiseAll = await Promise.all([fetchUsersData(), fetchCurUser()]);
      console.log(promiseAll);
      // console.log(promiseAll[0].userList);
      if (promiseAll && promiseAll.length > 0) {
        setUsers(promiseAll[0].userList);
        let myUser = findCurUser(promiseAll[1].userId, promiseAll[0].userList);

        setCurrUser(myUser);
        console.log(myUser);
      }
    }
    fetchInt();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="myuser">
        <img
          src={currUser?.avatar.url}
          alt="profile-img"
          className="list-item-image"
        />
        <span>
          {currUser?.name.first} {currUser?.name.last}
        </span>
      </div>
      <List users={users} />
    </div>
  );
}
