import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-ellis.herokuapp.com/api/",
});

export const login = async (username) => {
  const response = await ncNewsApi.get(`users/${username}`);
};

export const createPaginationButtons = (total, limit, setSearchParams) => {
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
        {" "}
        {i}{" "}
      </button>
    );
  }
  return buttons;
};
