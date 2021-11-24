import "./styles/UserDetail.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserByUsername } from "../utils/api";
import { useParams } from "react-router";
const UserDetail = () => {
  const [userDetails, setUserDetails] = useState({});
  const { username } = useParams();
  useEffect(() => {
    getUserByUsername(username).then(setUserDetails);
  }, [username]);
  return (
    <div className="UserDetail">
      <div className="user-details-container">
        <h2 className="user-details-name"> {userDetails.name} </h2>
        <h3 className="user-details-username"> {userDetails.username}</h3>
        <img className="user-details-image" src={userDetails.avatar_url}></img>
      </div>
    </div>
  );
};

export default UserDetail;
