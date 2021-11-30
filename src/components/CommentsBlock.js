import "./styles/CommentsBlock.css";
import { getCommentsByArticleId } from "../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
const CommentsBlock = ({ article_id, setComments, comments }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const numberOfPages = Math.ceil((comments.length ? comments[0].total_count : 0) / 5);

  useEffect(() => {
    getCommentsByArticleId(article_id, pageNumber).then(setComments);
  }, [pageNumber, setComments, article_id]);
  return (
    <div className="CommentsBlock">
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
    </div>
  );
};

export default CommentsBlock;
