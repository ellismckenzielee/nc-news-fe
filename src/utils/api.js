import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-ellis.herokuapp.com/api/",
});

export const getArticles = async () => {
  const articles = await ncNewsApi.get("/articles");
  return articles.data.articles;
};
