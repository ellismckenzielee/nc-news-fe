import axios from "axios";
import { postUser } from "./api";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-ellis.herokuapp.com/api/",
});

export const login = async (username) => {
  /* Get request to API simulates login */
  try {
    const response = await ncNewsApi.get(`users/${username}`);
    return response.status;
  } catch (err) {
    return err.response.status;
  }
};

export const createPaginationButtons = (total, limit, setSearchParams) => {
  /*creates pagination buttons when provides a total and limit (to determine how many)
   pages are required. Uses passed setSearchParams function to update the URL and page */
  const numPages = Math.ceil(total / limit);
  const buttons = [];
  for (let i = 0; i < numPages; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => {
          setSearchParams({ p: i });
        }}
      >
        {i}
      </button>
    );
  }
  return buttons;
};

export const handleLoginForm = async (username) => {
  /* Simple login form checking (length >0, alphanumeric & user exists) */
  if (!username) return "Please enter a username";
  if (!/^[a-zA-Z0-9]+$/.test(username)) return "Please use only alphanumeric characters";
  const code = await login(username);
  if (code === 200) {
    return "success";
  } else if (code === 404) {
    return "Unsuccessful: User Does Not Exist";
  }
};

export const handlePostCommentForm = async (username, body) => {
  if (!username) return "Please Login";
  if (body.length < 10) return "Please enter more than 10 characters";
  if (body.length > 100) return "Please enter fewer than 100 characters";
  return "success";
};

export const handleCreateUserFormSubmission = async (username, avatar_url, name) => {
  try {
    const response = await postUser(username, avatar_url, name);
    return response;
  } catch (err) {
    console.log(err);
    return { err: "username already exists" };
  }
};

export const formatDate = (date) => {
  date = new Date(Date.parse(date));
  return date.toISOString().split("T")[0];
};

export const handleCreateArticleTitle = (title) => {
  if (title === "") return "Please enter a title";
  return "";
};

export const handleCreateArticleBody = (body) => {
  if (body.length < 20) return "Please enter more than 20 characters";
  return "";
};

export const handleCreateArticleSubmit = () => {};
