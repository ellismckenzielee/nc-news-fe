import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import UserCard from "./UserCard";
import "./styles/Users.css";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);
  return (
    <div className="Users">
      <h2> Users </h2>
      <div class="user-card-container">
        {users.map((user) => {
          return <UserCard key={user.username} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Users;
