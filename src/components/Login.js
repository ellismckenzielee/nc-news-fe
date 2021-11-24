import "./styles/Login.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { login } from "../utils/utils";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="Login">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          login(username).then(() => {
            setUser(username);
            navigate("/");
          });
        }}
      >
        <label className="login-form-username-label" htmlFor="username">
          Enter Username
        </label>
        <input
          className="login-form-username-input"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          id="username"
          type="text"
          value={username}
        ></input>
        <button className="login-form-submit-button"> Login </button>
      </form>
      <p> Don't have an account? </p>
      <button
        onClick={() => {
          navigate("/users/create");
        }}
      >
        Create Account
      </button>
    </div>
  );
};

export default Login;
