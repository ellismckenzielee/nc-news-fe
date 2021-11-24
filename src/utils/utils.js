import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-ellis.herokuapp.com/api/",
});

export const login = async (username) => {
  /* Get request to API simulates login */
  try {
    const response = await ncNewsApi.get(`users/${username}`);
    console.log(response);
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
          console.log(true);
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
