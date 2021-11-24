import "./styles/Navbar.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  console.log("USER", user, "LOGGED In", loggedIn);
  if (loggedIn) {
    return (
      <div className="Navbar">
        <button
          onClick={() => {
            navigate("/articles/create");
          }}
        >
          Create An Article
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
        <nav>
          <button to="/users/login">Login</button>
        </nav>
      </div>
    );
  }
};
export default Navbar;
