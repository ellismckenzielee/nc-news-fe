import "./styles/ResourceNotFound.css";
import { Link } from "react-router-dom";
const ResourceNotFound = () => {
  return (
    <div className="ResourceNotFound">
      <h2> 404: Page not found </h2>
      <h3> Sorry, we couldn't find that page.</h3>
      <p>
        {" "}
        Please visit the <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default ResourceNotFound;
