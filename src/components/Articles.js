import "./styles/Articles.css";
import { getArticles, getTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleSelector from "./ArticleSelector";
import { useNavigate, useSearchParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  console.log("SORT ORDER", order);

  useEffect(() => {
    getArticles(topic, sort_by, order).then(setArticles);
  }, [topic, sort_by, order]);
  return (
    <div className="Articles">
      <ArticleSelector setSearchParams={setSearchParams} />
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
