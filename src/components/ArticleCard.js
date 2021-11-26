import "./styles/ArticleCard.css";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/utils";
const ArticleCard = ({ article }) => {
  const { article_id, title, author, created_at, topic, comment_count, votes } = article;

  return (
    <div className="ArticleCard">
      <article className="article-container">
        <h3 className="article-card-header"> {title} </h3>
        <h4 className="article-card-author">
          <Link to={`/users/${author}`}>{author}</Link>
        </h4>
        <div className="article-card-meta-info">
          <h5>{formatDate(created_at)}</h5>
          <h5>{topic}</h5>
        </div>

        <p> Comment Count: {comment_count}</p>
        <p> Votes: {votes}</p>
        <Link className="article-card-button" to={`/articles/${article_id}`}>
          {" "}
          Read More{" "}
        </Link>
      </article>
    </div>
  );
};

export default ArticleCard;
