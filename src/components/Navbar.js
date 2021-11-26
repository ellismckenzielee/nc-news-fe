import "./styles/Navbar.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const toggleLoginButtonText = loggedIn ? "Logout" : "Login";
  const { pathname } = useLocation();
  const userPath = pathname.split("/").slice(-1)[0];
  console.log(userPath);
  console.log(pathname);
  const viewArticles = (
    <button
      className={`navbar-button ${pathname === "/articles" ? "active-nav-button" : ""}`}
      onClick={() => {
        navigate("/articles");
      }}
    >
      Articles
    </button>
  );

  const createArticle = (
    <button
      className={`navbar-button ${pathname === "/articles/create" ? "active-nav-button" : ""}`}
      onClick={() => {
        if (!loggedIn) {
          navigate("/login");
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
      className={`navbar-button ${/users\/[\w]*/.test(pathname) && userPath === user ? "active-nav-button" : ""}`}
      onClick={() => {
        if (!loggedIn) {
          navigate("/login");
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
      className={`navbar-button ${pathname === "/users" ? "active-nav-button" : ""}`}
      onClick={() => {
        navigate("/users");
      }}
    >
      Users
    </button>
  );

  const toggleLoginButton = (
    <button
      className={`navbar-button ${pathname === "/login" ? "active-nav-button" : ""}`}
      onClick={() => {
        if (loggedIn) {
          logout();
          navigate("/");
        } else {
          navigate("/login");
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
