import React from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { AiFillAppstore } from "react-icons/ai";
import { FaWineGlassAlt, FaRegUser } from "react-icons/fa";
import "./MainMenu.style.less";

const MainMenu = ({ selectedKey, changeSelectedKey }: any) => {
  return (
    <Menu className="menu" mode="inline" selectedKeys={[selectedKey]}>
      <Menu.Item
        className="menu-item"
        key="0"
        onClick={changeSelectedKey}
        icon={<AiFillAppstore size={30} className="menu-icon" />}
      >
        Dashboard
      </Menu.Item>
      <SubMenu
        className="sub-menu"
        key="1"
        icon={<FaWineGlassAlt size={30} className="sub-menu-icon" />}
        title="Wine"
      >
        <Menu.Item
          className="sub-menu-item"
          key="1.1"
          onClick={changeSelectedKey}
        >
          View
        </Menu.Item>
        <Menu.Item
          className="sub-menu-item"
          key="1.2"
          onClick={changeSelectedKey}
        >
          Add
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        className="menu-item"
        key="2"
        onClick={changeSelectedKey}
        icon={<FaRegUser size={25} className="menu-icon" />}
      >
        Account
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
