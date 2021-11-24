import "./styles/CreateArticle.css";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate, Navigate } from "react-router";

const CreateArticle = () => {
  const { loggedIn, user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  if (loggedIn) {
    return (
      <div className="createArticle">
        <h2 className="create-article-main-header">Create Article </h2>
      </div>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};
export default CreateArticle;
