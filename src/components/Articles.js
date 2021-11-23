import "./styles/Articles.css";
import { getArticles, getTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleSelector from "./ArticleSelector";
import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";

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
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </main>
    </div>
  );
};

export default Articles;
