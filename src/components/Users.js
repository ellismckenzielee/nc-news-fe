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
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  console.log(sort_by, order);
  useEffect(() => {
    setIsLoading(true);
    console.log("RELOAD");
    getUsers(sort_by, order)
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage("Internal Error");
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
      {isError && <p>{errorMessage}</p>}
    </div>
  );
};

export default Users;
