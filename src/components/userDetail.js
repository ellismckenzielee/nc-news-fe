import "./styles/UserDetail.css";
import { useEffect, useState } from "react";
import { getArticlesByUsername, getUserByUsername } from "../utils/api";
import { useParams } from "react-router";
import ArticleCard from "./ArticleCard";
const UserDetail = () => {
  const [userDetails, setUserDetails] = useState({});
  const { username } = useParams();
  const [articles, setArticles] = useState([]);

  console.log(articles);
  useEffect(() => {
    getUserByUsername(username).then(setUserDetails);
    getArticlesByUsername(username).then(setArticles);
  }, [username]);
  return (
    <div className="UserDetail">
      <section className="user-details-container">
        <h2 className="user-details-name"> {userDetails.name} </h2>
        <h3 className="user-details-username"> {userDetails.username}</h3>
        <img className="user-details-image" src={userDetails.avatar_url}></img>
      </section>
      <section className="articles-container">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
};

export default UserDetail;
