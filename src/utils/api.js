import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-ellis.herokuapp.com/api/",
});

export const getArticles = async (topic, sort_by, order, p, limit = 6) => {
  console.log(topic, order, sort_by);
  const params = {
    topic,
    sort_by,
    order,
    p,
    limit,
  };
  const response = await ncNewsApi.get("/articles", { params });
  return response.data.articles;
};

export const getArticleById = async (article_id) => {
  const response = await ncNewsApi.get(`/articles/${article_id}`);
  return response.data.article;
};

export const getCommentsByArticleId = async (article_id, p) => {
  const params = {
    p,
  };
  const response = await ncNewsApi.get(`/articles/${article_id}/comments`, { params });
  return response.data.comments;
};

export const getTopics = async () => {
  const response = await ncNewsApi.get("/topics");
  return response.data.topics;
};

export const postUser = async (username, avatar_url) => {
  const response = await ncNewsApi.post("/users", { username, avatar_url });
};

export const patchArticle = async (inc_votes, article_id) => {
  const response = await ncNewsApi.patch(`/articles/${article_id}`, { inc_votes });
  return response;
};

export const patchComment = async (inc_votes, comment_id) => {
  const response = await ncNewsApi.patch(`/comments/${comment_id}`, { inc_votes });
  return response;
};

export const postArticle = async (article) => {
  const response = await ncNewsApi.post(`/articles`, article);
  return response.data.article;
};

export const postComment = async (comment, article_id) => {
  console.log(comment, article_id);
  const response = await ncNewsApi.post(`/articles/${article_id}/comments`, comment);
  return response.data.comment;
};

export const deleteComment = async (comment_id) => {
  const response = await ncNewsApi.delete(`/comments/${comment_id}`);
  return response;
};

export const getUserByUsername = async (username) => {
  const response = await ncNewsApi.get(`/users/${username}`);
  return response.data.user;
};
