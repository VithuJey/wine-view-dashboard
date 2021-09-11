import React from "react";
import { Layout, Menu, Image } from "antd";
import LOGO from "@Assets/Images/logo.png";
import { AiFillAppstore } from "react-icons/ai";
import { FaWineGlassAlt, FaRegUser } from "react-icons/fa";
import SubMenu from "antd/lib/menu/SubMenu";
import "./SideBar.style.less";

const { Sider } = Layout;

function SideBar({ menu }: any) {
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
          <img src={LOGO} className="logo" alt="logo" />
        </a>
      </div>
      {menu}
    </Sider>
  );
}

export default SideBar;

{
  /* <Menu mode="inline" theme="dark" defaultSelectedKeys={["1"]}>
  <Image width={130} src={LOGO} preview={false} />
  <Menu.Item key="1" icon={<AiFillAppstore size={30} className="menu-icon" />}>
    Dashboard
  </Menu.Item>
  <SubMenu key="sub1" icon={<FaWineGlassAlt />} title="Wine">
    <Menu.Item key="2.1">View</Menu.Item>
    <Menu.Item key="2.2">Add</Menu.Item>
  </SubMenu>
  <Menu.Item key="3" icon={<FaRegUser size={25} className="menu-icon" />}>
    Account
  </Menu.Item>
</Menu> */
}
