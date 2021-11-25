import "./styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLoginForm } from "../utils/utils";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);
  const [errorContent, setErrorContent] = useState("");

  const navigate = useNavigate();
  return (
    <div className="Login">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLoginForm(username).then((result) => {
            if (result === "success") {
              setUser(username);
              navigate("/");
            } else {
              setErrorContent(result);
            }
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
        <p className="login-error"> {errorContent} </p>
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
