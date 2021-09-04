import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

function NavBar() {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0, backgroundColor: "aqua" }}
    />
  );
}

export default NavBar;
