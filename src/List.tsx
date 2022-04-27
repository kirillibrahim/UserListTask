import React, { useState } from "react";
import ListItem from "./ListItem";
import { Users, User } from "./constants/Interfaces/UserListInterface";

const List: React.FC<Users> = ({ users }) => {
  // console.log(users);
  const [filter, setFilter] = useState<string>("");

  return (
    <>
      <div className="filter">
        <label className="form-label">Type to filter the list:</label>
        <input
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <div className="list-wrapper">
        <ul className="list">
          {users &&
            users.length > 0 &&
            users
              .filter((user: User) => {
                let name = user.name.first.concat(" ", user.name.last);
                return name.toLowerCase().includes(filter) || filter === "";
              })
              .map((user: User) => (
                <>
                  <ListItem user={user} key={user.id} />
                </>
              ))}
        </ul>
      </div>
    </>
  );
};
export default List;
