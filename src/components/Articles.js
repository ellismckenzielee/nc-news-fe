import "./styles/Articles.css";
import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  useEffect(() => {
    getArticles().then(setArticles);
  }, []);
  return (
    <div className="Articles">
      <p> Here are some articles! </p>
      <main className="articles-container">
        {articles.map((article) => {
          return (
            <article className="article-container" key={article.article_id}>
              <h3> {article.title} </h3>
              <h5>{article.author}</h5>
              <h6>{article.created_at}</h6>
              <p>{article.topic}</p>
              <p> {article.total_count}</p>
              <p> {article.votes}</p>
              <Link to={`/articles/${article.article_id}`}> Read More </Link>
            </article>
          );
        })}
      </main>
    </div>
  );
};

export default Articles;
