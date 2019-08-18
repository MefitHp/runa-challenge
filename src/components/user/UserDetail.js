import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchUser } from "./../../redux/ducks/main.ducks";
const UserDetail = ({ match, searchUser, ...rest }) => {
  console.log(rest);
  const {
    params: { id }
  } = match;

  useEffect(() => {
    searchUser(id);
  }, [searchUser, id]);
  return (
    <div>
      <p>Detalle de usuario {id}</p>
    </div>
  );
};
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { searchUser }
)(UserDetail);
