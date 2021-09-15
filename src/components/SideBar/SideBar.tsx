import React from "react";
import { Layout, Divider } from "antd";
import LOGO from "@Assets/Images/logo.png";
import "./SideBar.style.less";

const { Sider } = Layout;

function SideBar({ children }: any) {
  return (
    <Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
      width="20rem"
    >
      <div className="logo-wrapper">
        <a href="/">
          <img src={LOGO} className="sider-logo" alt="logo" />
        </a>
      </div>
      <Divider
        type="horizontal"
        orientation="center"
        className="sider-col-divider"
      />
      {children}
    </Sider>
  );
}

export default SideBar;
