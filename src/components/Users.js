import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import UserCard from "./UserCard";
import "./styles/Users.css";
const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then(setUsers)
      .then(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <p> Loading... </p>;
  return (
    <div className="Users">
      <h2 className="users-title"> Users </h2>
      <article class="user-card-container">
        {users.map((user) => {
          return <UserCard key={user.username} user={user} />;
        })}
      </article>
    </div>
  );
};

export default Users;
