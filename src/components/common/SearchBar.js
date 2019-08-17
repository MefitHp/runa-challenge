import React, { useState } from "react";

const SearchBar = () => {
  let [searchValue, setSearchValue] = useState("");
  return (
    <div className="field has-addons ">
      <div className="control" style={{ width: "100%" }}>
        <form
          id="searchPlayer"
          onSubmit={e => {
            e.preventDefault();
            console.log("Submitted");
          }}
        >
          <input
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            className="input"
            type="text"
            placeholder="Find a player, for example: Ninja"
          />
        </form>
      </div>
      <div className="control">
        <button
          type="submit"
          form="searchPlayer"
          className="button is-dark has-text-white"
        >
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
