import "./styles/ArticleDetail.css";
import { useParams, useNavigate, useSearchParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getArticleById, getCommentsByArticleId, deleteArticleById } from "../utils/api";
import CommentCard from "./CommentCard";
import { patchArticle } from "../utils/api";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { handlePostCommentForm } from "../utils/utils";
import useVotes from "../hooks/useVotes";

const ArticleDetail = () => {
  const { article_id } = useParams();
  const { user, loggedIn } = useContext(UserContext);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [voteIncrement, setVoteIncrement, hasVoted, setHasVoted] = useVotes();
  const [commentBody, setCommentBody] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [error, setError] = useState("");
  const numberOfPages = Math.ceil((comments.length ? comments[0].total_count : 0) / 5);
  const isAuthor = user === article.author;
  const navigate = useNavigate();
  useEffect(() => {
    getArticleById(article_id).then(setArticle);
    getCommentsByArticleId(article_id, pageNumber).then(setComments);
  }, [article_id]);
  return (
    <div className="ArticleDetail">
      <section className="article-detail-container">
        <h2 className="article-detail-title"> {article.title}</h2>
        {isAuthor && (
          <button
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
        <h3 className="article-detail-author"> {article.author} </h3>
        <h3 className="article-detail-created-at"> {article.created_at} </h3>
        <p className="article-detail-topic"> {article.topic} </p>
        <p className="article-detail-comment-count"> Comment Count: {article.comment_count} </p>
        <p className="article-detail-votes"> Votes: {article.votes + voteIncrement} </p>
        {!hasVoted && !isAuthor && (
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
        {!isAuthor && (
          <button
            onClick={() => {
              navigate(`/users/${article.author}`);
            }}
          >
            Visit Author's Page
          </button>
        )}
      </section>
      <section className="article-comments-container">
        <h2 className="article-detail-comments-header"> Comments </h2>
        {comments.map((comment) => {
          return <CommentCard setComments={setComments} key={comment.comment_id} comment={comment}></CommentCard>;
        })}
        {pageNumber + 1 < numberOfPages && (
          <button
            onClick={() => {
              const nextPage = pageNumber + 1;
              getCommentsByArticleId(article_id, nextPage)
                .then((response) => {
                  setComments((prev) => {
                    return [...prev, ...response];
                  });
                })
                .then(() => {
                  setPageNumber((prev) => prev + 1);
                });
            }}
          >
            {" "}
            More Comments...
          </button>
        )}
      </section>
      {!loggedIn && (
        <p>
          Please <Link to="/users/login">login</Link> to post a comment!{" "}
        </p>
      )}
      {loggedIn && (
        <section className="article-comments-form-container">
          <h3 className="article-detail-create-comment-header"> Post A Comment </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePostCommentForm(user, commentBody).then((result) => {
                if (result === "success") {
                  postComment({ username: user, body: commentBody }, article_id).then((article) => {
                    setError("");
                    setComments((prev) => {
                      return [...prev, article];
                    });
                  });
                } else {
                  setError(result);
                }
              });
            }}
            className="article-detail-comments-form"
          >
            <label htmlFor="article-comment-label">Content (Between 10 and 100 chaarcters)</label>
            <input
              onChange={(e) => {
                setCommentBody(e.target.value);
              }}
              type="text"
              id="article-comment-body"
              value={commentBody}
            ></input>
            <p> {error} </p>
            <button className="article-comment-submit-button">Submit Comment </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;
