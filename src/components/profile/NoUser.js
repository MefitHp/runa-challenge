import React, { useState } from "react";
import { searchUser } from "./../../redux/ducks/main.ducks";
import { connect } from "react-redux";
import { compose } from "redux";
import { Box, Flex } from "rebass";
import { withRouter } from "react-router-dom";
import { useCachedUser } from "../../customHooks/useCachedUser";
import toastr from "toastr";

const NoUser = ({ searchUser, progress, apiUser, history }) => {
  let [searchValue, setSearchValue] = useState("");
  const { addCachedUser } = useCachedUser();

  return (
    <div
      className="container"
      style={{
        background: "#fff",
        borderRadius: 10,
        marginTop: 20,
        padding: "20px"
      }}
    >
      <h2 className="is-size-2	has-text-centered	is-uppercase	has-text-weight-bold	">
        You dont have a selected user, please, search one.
      </h2>
      <SearchField
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchUser={searchUser}
        progress={progress}
      />
      <Flex justifyContent="center">
        {apiUser ? (
          <PlayerCard
            apiUser={apiUser}
            addCachedUser={addCachedUser}
            history={history}
          />
        ) : (
          ""
        )}
      </Flex>
    </div>
  );
};
const SearchField = ({ searchValue, setSearchValue, searchUser, progress }) => {
  return (
    <div className="field has-addons" style={{ width: "100%" }}>
      <div className="control" style={{ width: "100%" }}>
        <form
          id="searchPlayer"
          onSubmit={e => {
            e.preventDefault();
            if (searchValue === "") return;
            searchUser(searchValue);
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
          className={`button is-dark has-text-white is-large ${progress ===
            "loading" && "is-loading"}`}
        >
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  );
};
const PlayerCard = ({ apiUser, addCachedUser, history }) => {
  const { uid, username } = apiUser;
  const entries = apiUser && apiUser.entries;
  const { platform } = entries[0];
  return (
    <Box
      width={[1, 1 / 2]}
      p={3}
      style={{ border: "1px solid rgba(0,0,0,0.3)" }}
    >
      <Flex>
        <div className="media-content">
          <p className="title is-4">Username: {username}</p>
          <p className="subtitle is-6">
            Platform: {platform && platform.toUpperCase()}
          </p>
        </div>
        <button
          className="button is-dark has-text-white is-large"
          onClick={() => {
            addCachedUser(uid);
            toastr.success("Saved!");
            return history.push(`/profile/${uid}`);
          }}
        >
          Select
        </button>
      </Flex>
    </Box>
  );
};

const mapStateToProps = state => {
  return { apiUser: state.main.uid, progress: state.main.progress };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { searchUser }
  )
)(NoUser);
