import "./styles/Login.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
const Login = () => {
  const [username, setUsername] = useState("");
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
