import React from "react";
import { LayoutContainer } from "./Layout.styled";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
