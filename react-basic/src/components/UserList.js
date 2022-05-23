import React from "react";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="card mb-4" key={user.id}>
            <div className="card-body p-5">{user.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
