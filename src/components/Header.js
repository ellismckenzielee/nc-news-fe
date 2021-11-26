import "./styles/Header.css";
import { Link } from "react-router-dom";
import NCNEWS from "../assets/NCNEWS.png";
const Header = () => {
  return (
    <div className="Header">
      <div className="header-link-container">
        <Link to="/">
          <img className="header-image" src={NCNEWS} alt="NC-NEWS" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
