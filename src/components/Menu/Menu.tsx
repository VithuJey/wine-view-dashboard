import React from "react";
import { Menu as AntMenu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { AiFillAppstore } from "react-icons/ai";
import { FaWineGlassAlt, FaRegUser } from "react-icons/fa";
import "./Menu.style.less";
import { Link } from "react-router-dom";

const Menu = ({ selectedKey, changeSelectedKey }: any) => {
  return (
    <AntMenu className="menu" mode="inline" selectedKeys={[selectedKey]}>
      <AntMenu.Item
        className="menu-item"
        key="0"
        onClick={changeSelectedKey}
        icon={<AiFillAppstore size={30} className="menu-icon" />}
      >
        <span>Dashboard</span>
        <Link to="/" />
      </AntMenu.Item>
      <SubMenu
        className="sub-menu"
        key="1"
        icon={<FaWineGlassAlt size={30} className="sub-menu-icon" />}
        title="Wine"
      >
        <AntMenu.Item
          className="sub-menu-item"
          key="1.1"
          onClick={changeSelectedKey}
        >
          <span>View</span>
          <Link to="/wine/view" />
        </AntMenu.Item>
        <AntMenu.Item
          className="sub-menu-item"
          key="1.2"
          onClick={changeSelectedKey}
        >
          <span>Add</span>
          <Link to="/wine/add" />
        </AntMenu.Item>
      </SubMenu>
      <AntMenu.Item
        className="menu-item"
        key="2"
        onClick={changeSelectedKey}
        icon={<FaRegUser size={25} className="menu-icon" />}
      >
        <span>Account</span>
        <Link to="/account" />
      </AntMenu.Item>
    </AntMenu>
  );
};

export default Menu;
