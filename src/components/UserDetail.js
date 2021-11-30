import "./styles/UserDetail.css";
import { useEffect, useState, useContext } from "react";
import { getArticlesByUsername, getUserByUsername, deleteUserByUsername } from "../utils/api";
import { Navigate, useNavigate, useParams } from "react-router";
import ArticleCard from "./ArticleCard";
import { UserContext } from "../contexts/UserContext";

const UserDetail = () => {
  const [userDetails, setUserDetails] = useState({});
  const { username } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  console.log(userDetails);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    Promise.all([getUserByUsername(username).then((response) => setUserDetails(response.user)), getArticlesByUsername(username).then(setArticles)])
      .then(() => {
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage("User not found");
      });
  }, [username]);
  if (isLoading) return <p> Loading... </p>;
  if (isError) return <p>{errorMessage}</p>;
  return (
    <div className="UserDetail">
      <section className="user-details-container">
        <h2 className="user-details-name"> {userDetails.name} </h2>
        <h3 className="user-details-username"> {userDetails.username}</h3>

        <figure className="user-details-image-container">
          <img src={userDetails.avatar_url} className="user-details-image" />
        </figure>
      </section>
      {username === user.username && !confirmDelete && (
        <button
          className="delete-user-profile-button"
          onClick={() => {
            setConfirmDelete(true);
          }}
        >
          Delete Profile{" "}
        </button>
      )}
      {user.username === username && confirmDelete && (
        <>
          <p> Are you sure you want to delete? </p>
          <button
            onClick={() => {
              console.log("deleting", username);
              deleteUserByUsername(username).then(() => {
                console.log("deleted");
                setUser({});
                navigate("/");
              });
            }}
          >
            {" "}
            Yes{" "}
          </button>
          <button
            onClick={() => {
              setConfirmDelete(false);
            }}
          >
            {" "}
            No{" "}
          </button>
        </>
      )}

      <section className="articles-container">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
};

export default UserDetail;
