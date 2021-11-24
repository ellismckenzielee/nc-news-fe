import "./styles/ArticleDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";
import { patchArticle } from "../utils/api";

const ArticleDetail = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [voteIncrement, setVoteIncrement] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

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
        <p className="article-detail-comment-count"> Comment Count: {article.comment_count} </p>
        <p className="article-detail-votes"> Votes: {article.votes + voteIncrement} </p>
        {!hasVoted && (
          <div className="article-vote-container">
            <button
              onClick={() => {
                setVoteIncrement((prev) => prev + 1);
                patchArticle(1, article_id);
                setHasVoted(true);
              }}
            >
              Vote Up
            </button>{" "}
            <button
              onClick={() => {
                setVoteIncrement((prev) => prev + -1);
                patchArticle(-1, article_id);
                setHasVoted(true);
              }}
            >
              Vote Down
            </button>
          </div>
        )}
        <p className="article-detail-body">{article.body} </p>
      </section>
      <section className="article-comments-container">
        <h2 className="article-detail-comments-header"> Comments </h2>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
    </div>
  );
};

export default ArticleDetail;
