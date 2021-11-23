import "./styles/ArticleCard.css";
import { Link } from "react-router-dom";
const ArticleCard = ({ article }) => {
  const { article_id, title, author, created_at, topic, total_count, votes } = article;
  return (
    <div className="ArticleCard">
      <article className="article-container" key={article_id}>
        <h3> {title} </h3>
        <h5>{author}</h5>
        <h6>{created_at}</h6>
        <span>{topic}</span>
        <p> Comment Count: {total_count}</p>
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
