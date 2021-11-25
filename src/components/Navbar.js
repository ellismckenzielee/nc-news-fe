import "./styles/Navbar.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let loginDisabled = pathname === "/users/login";
  console.log(loginDisabled, pathname);
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

  const logoutButton = (
    <button
      onClick={() => {
        logout();
        navigate("/");
      }}
    >
      Sign Out
    </button>
  );

  const loginButton = (
    <button
      onClick={() => {
        logout();
        navigate("/users/login");
      }}
    >
      Login
    </button>
  );
  if (loggedIn) {
    return (
      <div className="NavBar">
        {viewArticles}
        {createArticle}
        {viewProfile}
        {logoutButton}
      </div>
    );
  } else {
    return (
      <div className="NavBar">
        {viewArticles}
        {createArticle}
        {viewProfile}
        {loginButton}
      </div>
    );
  }
};
export default Navbar;
