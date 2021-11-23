import "./styles/Navbar.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { loggedIn, user } = useContext(UserContext);
  let buttonContent = "";
  let buttonPath = "";
  const navigate = useNavigate();
  if (loggedIn) {
    buttonContent = "Create Article";
    buttonPath = "/articles/create";
  } else {
    buttonContent = "Login";
    buttonPath = "/users/login";
  }
  return (
    <div className="Navbar">
      <button
        onClick={() => {
          navigate(buttonPath);
        }}
      >
        {buttonContent}
      </button>
    </div>
  );
};
export default Navbar;
