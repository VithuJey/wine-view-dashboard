import React, { useState } from "react";
import { Drawer, Button, Row, Col, Grid, Divider } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { GrMenu, GrClose } from "react-icons/gr";
import LOGO from "@Assets/Images/logo.png";
import "./NavBar.style.less";
import { RiLogoutCircleLine } from "react-icons/ri";

const { useBreakpoint } = Grid;

const UserAvatar =
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=40";

const NavBar = ({ menu }: any) => {
  const [visible, setVisible] = useState(false);
  const { lg, md, sm } = useBreakpoint();
  console.log(lg, md, sm);

  return (
    <nav className="navbar" style={{ backgroundColor: lg ? "#fff" : "#111" }}>
      <Drawer
        className="drawer"
        placement="left"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {menu}
      </Drawer>
      <Row justify="space-between" align="middle">
        <Col flex="1">
          <Row justify="start" align="middle">
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
          <Row justify="center" align="middle">
            <a href="/">
              <img src={LOGO} className="nav-logo" alt="logo" />
            </a>
          </Row>
        </Col>
        <Col flex={md ? "3" : "1"}>
          <Row justify="end" align="middle">
            {lg && (
              <>
                <Col
                  flex="0.1"
                  // style={{ backgroundColor: "#e1e1e1" }}
                >
                  <Button className="button-logout">
                    <RiLogoutCircleLine className="icon-logout" />
                  </Button>
                </Col>
                <Col flex="0.01">
                  <Divider
                    type="vertical"
                    orientation="center"
                    className="col-divider"
                  />
                </Col>
                <Col
                  flex="0.3"
                  className="col-user"
                  // style={{ backgroundColor: "#111" }}
                >
                  <p className="user-name">Mary Jane</p>
                  <p className="email">maryjane@gmail.com</p>
                </Col>
              </>
            )}
            <Col
              flex={!lg ? "0.1" : "0.2"}
              style={{
                backgroundColor: "#e1e1e1",
              }}
            >
              <a href="/">
                <img src={UserAvatar} className="user-avatar" alt="logo" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </nav>
  );
};
export default NavBar;
