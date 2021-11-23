import "./styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router";
const Login = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  return (
    <div className="Login">
      <form>
        <label htmlFor="username">Enter Username</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          id="username"
          type="text"
          value={username}
        ></input>
        <label htmlFor="avatar-input">Enter Username</label>

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
      <p> Already Have an Account? </p>
      <button
        onClick={() => {
          navigate("/users/login");
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
