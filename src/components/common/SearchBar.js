import React, { useState } from "react";
import { withRouter } from "react-router-dom";
const SearchBar = props => {
  let [searchValue, setSearchValue] = useState("");
  return (
    <div className="field has-addons ">
      <div className="control" style={{ width: "100%" }}>
        <form
          id="searchPlayer"
          onSubmit={e => {
            e.preventDefault();
            if (searchValue === "") return;
            props.history.push(`/user/${searchValue}`);
          }}
        >
          <input
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            className="input is-large"
            type="text"
            placeholder="Find a player, for example: Ninja"
          />
        </form>
      </div>
      <div className="control">
        <button
          type="submit"
          form="searchPlayer"
          className="button is-dark has-text-white is-large"
        >
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  );
};

export default withRouter(SearchBar);
