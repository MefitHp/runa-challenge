import React, { useEffect } from "react";
import FeatureHeader from "../common/FeatureHeader";
import { connect } from "react-redux";
import { getUserData } from "../../redux/ducks/main.ducks";
import { Flex } from "rebass";
import { useCachedUser } from "../../customHooks/useCachedUser";
import toastr from "toastr";

const ProfileDetail = ({ getUserData, progress, data, match, history }) => {
  const { removeCachedUser } = useCachedUser();
  console.log(removeCachedUser);
  const gameTypes = data && data.stats && data.stats.touch;
  const username = data && data.username;
  const { id } = match.params;

  useEffect(() => {
    getUserData(id);
  }, [getUserData, id]);

  return (
    <>
      <FeatureHeader
        title="My profile"
        description="Keep your stats on hand, add you profile if you haven't"
      />
      <div
        style={{
          background: "#fff",
          borderRadius: 10,
          marginTop: 20,
          padding: "20px"
        }}
      >
        {username && (
          <div>
            <h3 className="has-text-centered is-size-1 has-text-weight-bold	">
              Username: @{username}
            </h3>
            <Flex justifyContent="center" mb={3}>
              <button
                className="is-link"
                onClick={() => {
                  removeCachedUser();
                  toastr.warning("Removed");
                  return history.push("/profile");
                }}
              >
                Change user
              </button>
            </Flex>
          </div>
        )}
        <div className="container">
          <Flex justifyContent="center" flexDirection="column">
            {progress === "loading" && (
              <h3 className="has-text-centered is-size-3 has-text-weight-bold	">
                Loading..
              </h3>
            )}
            {gameTypes &&
              gameTypes.map((gameType, i) => {
                return (
                  <table
                    className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
                    key={i}
                  >
                    <thead>
                      <tr className="is-selected">
                        <th colSpan={7}>
                          Game type; {gameType.friendlyName || gameType.id}
                        </th>
                      </tr>
                      <tr>
                        <th>#Kill</th>
                        <th>#Matches played</th>
                        <th>#Minutes played</th>
                        <th>Placetop 1</th>
                        <th>Place top 5</th>
                        <th>Place top 12</th>
                        <th>Players outlived</th>
                      </tr>
                      <tr>
                        <td>{gameType.entries[0].stats.kills}</td>
                        <td>{gameType.entries[0].stats.matchesplayed}</td>
                        <td>{gameType.entries[0].stats.minutesplayed}</td>
                        <td>{gameType.entries[0].stats.placetop1}</td>
                        <td>{gameType.entries[0].stats.placetop5}</td>
                        <td>{gameType.entries[0].stats.placetop12}</td>
                        <td>{gameType.entries[0].stats.playersoutlived}</td>
                      </tr>
                    </thead>
                  </table>
                );
              })}
          </Flex>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { data: state.main.data, progress: state.main.progress };
};
export default connect(
  mapStateToProps,
  { getUserData }
)(ProfileDetail);
