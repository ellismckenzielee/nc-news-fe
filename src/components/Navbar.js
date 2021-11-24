import "./styles/Navbar.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

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
        <button
          onClick={() => {
            navigate("users/login");
          }}
        >
          Login
        </button>
      </div>
    );
  }
};
export default Navbar;
