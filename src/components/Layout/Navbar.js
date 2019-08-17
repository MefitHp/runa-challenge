import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
const Navbar = () => {
  return (
    <Nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src={require("./../../assets/main_logo.png")}
            alt="FortniteStates: Get all Fortnite data related on any platform"
            width="112"
            height="28"
          />
        </Link>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 1px 6px hsla(0, 0%, 0%, 0.4);
`;

export default Navbar;
