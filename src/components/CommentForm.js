import "./styles/CommentForm.css";
import { handlePostCommentForm } from "../utils/utils";
import { postComment } from "../utils/api";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const CommentForm = ({ article_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="CommentForm">
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
            id="article-comment-label"
            value={commentBody}
          ></input>
          <p className="comment-form-error-message"> {error} </p>
          <button className="article-comment-submit-button">Submit Comment </button>
        </form>
      </section>
    </div>
  );
};

export default CommentForm;
