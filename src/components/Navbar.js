import "./styles/Navbar.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let loginDisabled = pathname === "/users/login";
  console.log(loginDisabled, pathname);
  if (loggedIn) {
    return (
      <div className="Navbar">
        <button
          onClick={() => {
            navigate("/articles");
          }}
        >
          Articles
        </button>
        <button
          onClick={() => {
            navigate("/articles/create");
          }}
        >
          Create An Article
        </button>
        <button
          onClick={() => {
            navigate(`/users/${user}`);
          }}
        >
          My Profile
        </button>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="Navbar">
        <Link className={loginDisabled ? "disabled" : ""} to="/users/login">
          Login
        </Link>
      </div>
    );
  }
};
export default Navbar;
