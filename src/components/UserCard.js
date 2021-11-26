import "./styles/UserCard.css";
import { useNavigate } from "react-router-dom";
const UserCard = ({ user }) => {
  const navigate = useNavigate();
  console.log(user);

  return (
    <div className="UserCard">
      <div className="usercard-container">
        <div className="usercard-titles">
          <h2 className="usercard-username"> {user.username} </h2>
          <h3 className="usercard-name"> {user.name} </h3>
          <p> Popularity: {user.total_votes} </p>
          <button
            className="usercard-button"
            onClick={() => {
              navigate(`/users/${user.username}`);
            }}
          >
            {" "}
            View Profile{" "}
          </button>
        </div>
        <figure className="user-image-container">
          <img className="usercard-profile-photo" src={user.avatar_url} />
        </figure>
      </div>
    </div>
  );
};

export default UserCard;
