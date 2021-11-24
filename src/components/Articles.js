import "./styles/Articles.css";
import { getArticles, getTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleSelector from "./ArticleSelector";
import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { createPaginationButtons } from "../utils/utils";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const pageNum = searchParams.get("p");
  const numberOfPages = articles[0] !== undefined ? articles[0].total_count : 0;
  const paginationButtons = createPaginationButtons(numberOfPages, 6, setSearchParams);
  console.log("PAGIN", numberOfPages);
  useEffect(() => {
    getArticles(topic, sort_by, order, pageNum).then(setArticles);
  }, [topic, sort_by, order, pageNum]);
  return (
    <div className="Articles">
      <ArticleSelector setSearchParams={setSearchParams} />
      <main className="articles-container">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
        <div className="page-buttons">{paginationButtons}</div>
      </main>
    </div>
  );
};

export default Articles;
