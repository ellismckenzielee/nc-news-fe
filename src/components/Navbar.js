import "./styles/Navbar.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const toggleLoginButtonText = loggedIn ? "Logout" : "Login";
  const viewArticles = (
    <button
      onClick={() => {
        navigate("/articles");
      }}
    >
      Articles
    </button>
  );

  const createArticle = (
    <button
      onClick={() => {
        if (!loggedIn) {
          navigate("/users/login");
        } else {
          navigate("/articles/create");
        }
      }}
    >
      Create An Article
    </button>
  );

  const viewProfile = (
    <button
      onClick={() => {
        if (!loggedIn) {
          navigate("/users/login");
        } else {
          navigate(`/users/${user}`);
        }
      }}
    >
      My Profile
    </button>
  );

  const viewUsers = (
    <button
      onClick={() => {
        navigate("/users");
      }}
    >
      Users
    </button>
  );

  const toggleLoginButton = (
    <button
      onClick={() => {
        if (loggedIn) {
          logout();
          navigate("/");
        } else {
          navigate("/users/login");
        }
      }}
    >
      {toggleLoginButtonText}
    </button>
  );
  return (
    <div className="NavBar">
      {viewArticles}
      {viewUsers}
      {createArticle}
      {viewProfile}
      {toggleLoginButton}
    </div>
  );
};
export default Navbar;
