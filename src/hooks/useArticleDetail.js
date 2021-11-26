import { useState, useEffect } from "react";
import { getArticleById } from "../utils/api";
const useArticleDetail = (user, article_id) => {
  const [article, setArticle] = useState({});
  const isAuthor = user === article.author;
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(setArticle)
      .then(() => {
        setIsLoading(false);
      });
  }, [article_id]);
  return [article, isAuthor, isLoading, showComments, setShowComments, comments, setComments];
};

export default useArticleDetail;
