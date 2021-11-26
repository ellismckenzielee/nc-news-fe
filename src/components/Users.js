import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import UserCard from "./UserCard";
import "./styles/Users.css";
import { useSearchParams } from "react-router-dom";
import UserSelector from "./UserSelector";
const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  console.log(sort_by, order);
  useEffect(() => {
    setIsLoading(true);
    console.log("RELOAD");
    getUsers(sort_by, order)
      .then(setUsers)
      .then(() => {
        setIsLoading(false);
      });
  }, [sort_by, order, searchParams]);
  return (
    <div className="Users">
      <h2 className="users-title"> Users </h2>
      <UserSelector setSearchParams={setSearchParams} />

      {!isLoading && (
        <article className="user-card-container">
          {users.map((user) => {
            return <UserCard key={user.username} user={user} />;
          })}
        </article>
      )}
      {isLoading && <p> Loading... </p>}
    </div>
  );
};

export default Users;
