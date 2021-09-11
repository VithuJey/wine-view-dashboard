import React, { useState } from "react";
import { Drawer, Button, Row, Col } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { GrMenu, GrClose } from "react-icons/gr";
import LOGO from "@Assets/Images/logo.png";
import "./NavBar.style.less";

const UserAvatar =
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=40";

const NavBar = ({ menu }: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Drawer
        className="drawer"
        closable={true}
        placement="left"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {menu}
      </Drawer>
      <Row justify="space-between" align="middle">
        <Col flex="1">
          <Row justify="start">
            <Button
              className="menu-button"
              type="default"
              shape="circle"
              color="#111"
              icon={
                !visible ? (
                  <MenuOutlined className="menu-icon" />
                ) : (
                  <CloseOutlined className="menu-icon" />
                )
              }
              onClick={() => setVisible((visible) => !visible)}
            />
          </Row>
        </Col>
        <Col flex="1">
          <Row justify="center">
            <a href="/">
              <img src={LOGO} className="logo" alt="logo" />
            </a>
          </Row>
        </Col>
        <Col flex="1">
          <Row justify="end">
            <a href="/">
              <img src={UserAvatar} className="user-avatar" alt="logo" />
            </a>
          </Row>
        </Col>
      </Row>
    </nav>
  );
};
export default NavBar;
