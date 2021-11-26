import { useState } from "react";
import "./styles/UserSelector.css";
const UserSelector = ({ setSearchParams }) => {
  const [sortBy, setSortBy] = useState("total_votes");
  const [order, setSortOrder] = useState("ASC");
  return (
    <div className="UserSelector">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchParams({ sort_by: sortBy, order });
        }}
        className="user-selector-form"
      >
        {" "}
        <div className="user-selector-form-flex">
          <fieldset className="user-selector-form-fieldset">
            <label htmlFor="sort-by">Sort By: </label>
            <select
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
              id="sort-by"
            >
              {" "}
              <option default value="total_votes">
                Popularity (total votes)
              </option>
              <option default value="username">
                Username
              </option>
              <option default value="name">
                Name
              </option>
            </select>
          </fieldset>
          <fieldset className="user-selector-form-fieldset">
            <label htmlFor="order">Order: </label>
            <select
              onChange={(e) => {
                setSortOrder(e.target.value);
              }}
              id="sort-by"
            >
              <option value="ASC"> Ascending </option>
              <option default value="DESC">
                Descending
              </option>
            </select>
          </fieldset>
        </div>
        <button> Submit </button>
      </form>
    </div>
  );
};

export default UserSelector;
