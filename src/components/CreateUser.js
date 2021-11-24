import "./styles/CreateUser.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { postUser } from "../utils/api";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const CreateUser = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [previewAvatar, setPreviewAvatar] = useState("");
  const navigate = useNavigate();
  return (
    <div className="CreateUser">
      <div className="create-user-form-container">
        <form
          className="create-user-form"
          onSubmit={(e) => {
            e.preventDefault();
            postUser(username).then(() => {
              setUser(username);
            });
          }}
        >
          <label htmlFor="username">Enter Username</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="username"
            type="text"
            value={username}
          ></input>
          <label htmlFor="avatar-input">Enter Avatar URL</label>
          <input
            onChange={(e) => {
              setAvatar(e.target.value);
            }}
            id="avatar-input"
            type="text"
            value={avatar}
          ></input>

          <button> Create Account </button>
        </form>
        <div className="create-user-avatar-preview">
          <img className="avatar-preview" src={previewAvatar} />
          <button
            className="avatar-preview-button"
            onClick={() => {
              setPreviewAvatar(avatar);
            }}
          >
            Avatar Preview
          </button>
        </div>
      </div>

      <div className="create-user-sign-in">
        <p> Already Have an Account? </p>
        <button
          onClick={() => {
            navigate("/users/login");
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
