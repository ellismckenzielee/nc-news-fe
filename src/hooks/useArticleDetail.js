import { useState, useEffect } from "react";
import { getArticleById } from "../utils/api";
const useArticleDetail = (user, article_id, setIsError, setIsErrorMessage) => {
  const [article, setArticle] = useState({});
  const [isAuthor, setIsAuthor] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(setArticle)
      .then(() => {
        setIsLoading(false);
        setIsAuthor(user === article.author)
      }).catch( (err)=> {
        setIsError(true);
        setIsLoading(false);
        setIsErrorMessage(err.response.data.msg)
        console.log('CATCH BLOCK')
      })
  }, [article_id]);
  return [article, isAuthor, isLoading, showComments, setShowComments, comments, setComments];
};

export default useArticleDetail;
