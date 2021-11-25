import "./styles/CreateUser.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { handleCreateUserFormSubmission } from "../utils/utils";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const CreateUser = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [previewAvatar, setPreviewAvatar] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <div className="CreateUser">
      <div className="create-user-form-container">
        <form
          className="create-user-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateUserFormSubmission(username, avatar, name).then((result) => {
              if (result.err) {
                setError(result.err);
              } else {
                setUser(username);
              }
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
            required
          ></input>
          <p> {error} </p>
          <label htmlFor="name">Enter Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            type="text"
            value={name}
            required
          ></input>
          <label htmlFor="avatar-input">Enter Avatar URL</label>
          <input
            onChange={(e) => {
              setAvatar(e.target.value);
            }}
            id="avatar-input"
            type="text"
            value={avatar}
            required
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
