import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
const useCreateArticle = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState("coding");
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");
  useEffect(() => {
    getTopics().then(setTopics);
  }, []);

  return [title, setTitle, body, setBody, topics, topic, setTopic, titleError, setTitleError, bodyError, setBodyError];
};

export default useCreateArticle;
