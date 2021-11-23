import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

import "./styles/ArticleSelector.css";

const ArticleSelector = ({ setSearchParams }) => {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState("");
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const sort_by_object = {
    Author: "author",
    Title: "title",
    Topic: "topic",
    "Creation Time": "created_at",
    Votes: "votes",
    "Number of Comments": "comment_count",
  };
  useEffect(() => {
    getTopics().then(setTopics);
  });
  return (
    <div className="ArticleSelector">
      <form
        className="article-selector-form"
        onSubmit={(e) => {
          e.preventDefault();
          const params = { sort_by, order };
          if (topic) params.topic = topic;

          setSearchParams(params);
        }}
      >
        <fieldset>
          <label className="article-=selector-category-label">Category</label>
          <select
            className="article-selector-category"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          >
            <option value="">All Categories </option>
            {topics.map((topic) => {
              return (
                <option value={topic.slug} className="select-form-topics" key={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
        </fieldset>
        <fieldset>
          <label className="article-=selector-sort-by-label">Sort</label>
          <select
            className="article-selector-sort_by"
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            <option value=""> Creation Date </option>
            {Object.keys(sort_by_object).map((key) => {
              return (
                <option value={sort_by_object[key]} className="select-form-sort_by" key={key}>
                  {key}
                </option>
              );
            })}
          </select>
        </fieldset>
        <fieldset>
          <label className="article-=selector-sort-order-label">Sort Order</label>

          <select
            className="article-selector-sort-order"
            onChange={(e) => {
              setOrder(e.target.value);
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
            );
          </select>
        </fieldset>

        <button type="submit">Submit </button>
      </form>
    </div>
  );
};

export default ArticleSelector;
