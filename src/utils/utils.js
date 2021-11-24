import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-ellis.herokuapp.com/api/",
});

export const login = async (username) => {
  const response = await ncNewsApi.get(`users/${username}`);
};
