import "./styles/ArticleDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, getCommentsByArticleId } from "../utils/api";

const ArticleDetail = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  console.log(comments);

  useEffect(() => {
    getArticleById(article_id).then(setArticle);
    getCommentsByArticleId(article_id).then(setComments);
  }, [article_id]);
  return (
    <div className="ArticleDetail">
      <section className="article-detail-container">
        <h2 className="article-detail-title"> {article.title}</h2>
        <h3 className="article-detail-author"> {article.author} </h3>
        <h3 className="article-detail-created-at"> {article.created_at} </h3>
        <p className="article-detail-topic"> {article.topic} </p>
        <p className="article-detail-comment-count"> {article.comment_count} </p>
        <p className="article-detail-votes"> {article.votes} </p>
        <p className="article-detail-body">{article.body} </p>
      </section>
      <section className="article-comments-container">
        {comments.map((comment) => {
          return (
            <article className="article-comment" key={comment.comment_id}>
              <h5 className="article-comment-heading">{comment.author}</h5>
              <p className="article-commment-body">{comment.body}</p>
              <p className="article-comment-created-at">{comment.created_at}</p>
              <p className="article-comment-votes">{comment.votes}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ArticleDetail;
