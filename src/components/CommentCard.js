import "./styles/CommentCard.css";
import { Link } from "react-router-dom";
const CommentCard = ({ comment }) => {
  const { author, created_at, body, votes } = comment;
  return (
    <div className="CommentCard">
      <article className="comment-container">
        <h5>{author}</h5>
        <h6>{created_at}</h6>
        <p> {body} </p>
        <p> Votes: {votes}</p>
      </article>
    </div>
  );
};

export default CommentCard;
