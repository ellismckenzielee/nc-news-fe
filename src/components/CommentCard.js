import "./styles/CommentCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { patchComment } from "../utils/api";
const CommentCard = ({ comment }) => {
  const { author, created_at, body, votes, comment_id } = comment;
  const [voteIncrement, setVoteIncrement] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  return (
    <div className="CommentCard">
      <article className="comment-container">
        <h5>{author}</h5>
        <h6>{created_at}</h6>
        <p> {body} </p>
        <p> Votes: {votes + voteIncrement}</p>
        {!hasVoted && (
          <div className="comment-vote-button-containers">
            <button
              onClick={() => {
                setVoteIncrement((prev) => prev + 1);
                patchComment(1, comment_id);
                setHasVoted(true);
              }}
            >
              Vote Up
            </button>
            <button
              onClick={() => {
                setVoteIncrement((prev) => prev - 1);
                patchComment(-1, comment_id);
                setHasVoted(true);
              }}
            >
              Vote Down
            </button>
          </div>
        )}
      </article>
    </div>
  );
};

export default CommentCard;
