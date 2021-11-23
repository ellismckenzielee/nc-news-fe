import "./styles/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="main-header"> NC-NEWS</h1>
      </Link>
    </div>
  );
};

export default Header;
