import "./styles/CreateArticle.css";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { getTopics } from "../utils/api";
import { postArticle } from "../utils/api";

const CreateArticle = () => {
  const { loggedIn, user, logout } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState("coding");
  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then(setTopics);
  }, []);

  if (loggedIn) {
    return (
      <div className="createArticle">
        <h2 className="create-article-main-header">Create Article </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postArticle({ body, title, author: user, topic }).then((article) => {
              navigate(`/articles/${article.article_id}`);
            });
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
          <label htmlFor="body">Content</label>
          <input
            onChange={(e) => {
              setBody(e.target.value);
            }}
            type="text"
            id="body"
            value={body}
          ></input>
          <select
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
