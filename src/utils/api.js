import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-ellis.herokuapp.com/api/",
});

export const getArticles = async () => {
  const response = await ncNewsApi.get("/articles");
  return response.data.articles;
};

export const getArticleById = async (article_id) => {
  const response = await ncNewsApi.get(`/articles/${article_id}`);
  return response.data.article;
};

export const getCommentsByArticleId = async (article_id) => {
  const response = await ncNewsApi.get(`/articles/${article_id}/comments`);
  return response.data.comments;
};
