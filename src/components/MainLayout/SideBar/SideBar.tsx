import React, { useState } from "react";
import { Layout, Menu, Image, Space, Divider } from "antd";
import "./style.less";
import LOGO from "@Assets/Images/logo.png";
import { AiFillAppstore } from "react-icons/ai";
import { FaWineGlassAlt, FaRegUser } from "react-icons/fa";
import SubMenu from "antd/lib/menu/SubMenu";

const { Sider } = Layout;

function SideBar() {
  return (
    <Sider>
      <Menu mode="inline" theme="dark" defaultSelectedKeys={["1"]}>
        <Image width={130} src={LOGO} preview={false} />
        {/* <Divider className="divider" type="horizontal" orientation="center" /> */}
        <Menu.Item
          key="1"
          icon={<AiFillAppstore size={30} className="menu-icon" />}
        >
          Dashboard
        </Menu.Item>
        <SubMenu key="sub1" icon={<FaWineGlassAlt />} title="Wine">
          <Menu.Item key="2.1">View</Menu.Item>
          <Menu.Item key="2.2">Add</Menu.Item>
        </SubMenu>
        <Menu.Item key="3" icon={<FaRegUser size={25} className="menu-icon" />}>
          Account
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideBar;
