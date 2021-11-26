import "./styles/CreateArticle.css";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { postArticle } from "../utils/api";
import { handleCreateArticleBody, handleCreateArticleTitle } from "../utils/utils";
import useCreateArticle from "../hooks/useCreateArticle";

const CreateArticle = () => {
  const { loggedIn, user } = useContext(UserContext);
  const navigate = useNavigate();
  const [title, setTitle, body, setBody, topics, topic, setTopic, titleError, setTitleError, bodyError, setBodyError] = useCreateArticle;

  if (loggedIn) {
    return (
      <div className="createArticle">
        <h2 className="create-article-main-header">Create Article </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const bodyErr = handleCreateArticleBody(body);
            const titleErr = handleCreateArticleTitle(title);
            if (titleErr === "" && bodyErr === "") {
              postArticle({ body, title, author: user, topic }).then((article) => {
                navigate(`/articles/${article.article_id}`);
              });
            } else {
              setBodyError(bodyErr);
              setTitleError(titleErr);
            }
          }}
          className="create-article-form"
        >
          <label htmlFor="article-title">Title:</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            id="article-title"
            value={title}
          ></input>
          <p className="create-article-form-warning">{titleError}</p>
          <label htmlFor="body">Content (> 20 characters)</label>
          <input
            onChange={(e) => {
              setBody(e.target.value);
            }}
            type="text"
            id="body"
            value={body}
          ></input>
          <p className="create-article-form-warning">{bodyError}</p>

          <label htmlFor="select-category">Category</label>

          <select
            id="select-category"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          >
            {topics.map((topic) => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
          <button>Post Article!</button>
        </form>
      </div>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};
export default CreateArticle;
