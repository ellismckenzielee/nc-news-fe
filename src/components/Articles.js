import "./styles/Articles.css";
import { getArticles, getTopics } from "../utils/api";
import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sort_by, order, pageNum)
      .then(setArticles)
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [topic, sort_by, order, pageNum]);
  return (
    <div className="Articles">
      <ArticleSelector setSearchParams={setSearchParams} />
      <main className="articles-container">
        {!isLoading &&
          articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        {isLoading && <p> We are currently getting your articles </p>}
        {isError && <p> Oops! Something has gone wrong </p>}
        <div className="page-buttons">{paginationButtons}</div>
      </main>
    </div>
  );
};

export default Articles;
