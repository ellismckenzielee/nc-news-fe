import "./styles/Articles.css";
import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import ArticleSelector from "./ArticleSelector";
import ArticleCard from "./ArticleCard";
import useUpdateParams from "../hooks/useUpdateParams";
import usePageStatus from "../hooks/usePageStatus";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topic, sort_by, order, pageNum, paginationButtons, setSearchParams] = useUpdateParams(articles);
  const [isLoading, setIsLoading, isError, setIsError] = usePageStatus();
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sort_by, order, pageNum)
      .then(setArticles)
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
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
