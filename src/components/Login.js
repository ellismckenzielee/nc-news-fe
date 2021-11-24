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
        onSubmit={(e) => {
          e.preventDefault();
          login(username).then(() => {
            setUser(username);
            navigate("/");
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
        <button> Login </button>
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
