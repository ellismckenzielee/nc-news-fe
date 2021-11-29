import "./styles/ArticleDetail.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteArticleById } from "../utils/api";
import { patchArticle } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import useVotes from "../hooks/useVotes";
import CommentForm from "./CommentForm";
import { formatDate } from "../utils/utils";
import CommentsBlock from "./CommentsBlock";
import useArticleDetail from "../hooks/useArticleDetail";

const ArticleDetail = () => {
  const { user, loggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const { article_id } = useParams();
  const [voteIncrement, setVoteIncrement, hasVoted, setHasVoted] = useVotes();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [article, isAuthor, isLoading, showComments, setShowComments, comments, setComments] = useArticleDetail(user, article_id, setIsError, setErrorMessage);
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p> {errorMessage} </p>
  return (
    <div className="ArticleDetail">
      <section className="article-detail-container">
        <h2 className="article-detail-title"> {article.title}</h2>

        <div className="article-detail-information-container">
          <h3 className="aricle-detail-username-date">
            {" "}
            {article.author} | {formatDate(article.created_at)}{" "}
          </h3>

          <p className="article-detail-topic"> {article.topic} </p>
          <p className="article-detail-comment-count"> Comment Count: {article.comment_count} </p>
          <p className="article-detail-votes"> Votes: {article.votes + voteIncrement} </p>
        </div>

        {!hasVoted && !isAuthor && loggedIn && (
          <div className="article-vote-container">
            <button
              className="article-detail-vote-up"
              onClick={() => {
                setVoteIncrement((prev) => prev + 1);
                patchArticle(1, article_id);
                setHasVoted(true);
              }}
            >
              Vote Up
            </button>{" "}
            <button
              className="article-detail-vote-down"
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
        {!isAuthor && (
          <button
            className="article-detail-view-author"
            onClick={() => {
              navigate(`/users/${article.author}`);
            }}
          >
            Visit Author's Page
          </button>
        )}
        {isAuthor && (
          <button
            className="article-detail-delete-article"
            onClick={() => {
              deleteArticleById(article_id).then(() => {
                navigate("/");
              });
            }}
          >
            {" "}
            Delete Article{" "}
          </button>
        )}
      </section>
      <section className="article-comments-container">
        <h2 className="article-detail-comments-header"> Comments </h2>
        {!showComments && (
          <button
            onClick={() => {
              setShowComments(true);
            }}
            className="article-detail-show-comments"
          >
            {" "}
            Show Comments{" "}
          </button>
        )}
        {showComments && <CommentsBlock article_id={article_id} setComments={setComments} comments={comments} />}
      </section>
      {!loggedIn && (
        <p>
          Please <Link to="/login">login</Link> to post a comment!{" "}
        </p>
      )}
      {loggedIn && <CommentForm article_id={article_id} setComments={setComments} />}
    </div>
  );
};

export default ArticleDetail;
