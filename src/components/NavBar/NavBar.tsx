import React, { useState } from "react";
import { Drawer, Button, Row, Col, Grid, Divider } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import LOGO from "@Assets/Images/logo.png";
import "./NavBar.style.less";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

const UserAvatar =
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=40";

const NavBar = ({ children }: any) => {
  const [visible, setVisible] = useState(false);
  const { lg } = useBreakpoint();
  console.log(lg);

  return (
    <nav className="navbar" style={{ backgroundColor: lg ? "#fff" : "#111" }}>
      {!lg && (
        <Drawer
          className="drawer"
          placement="left"
          onClose={() => setVisible(false)}
          visible={visible}
        >
          {children}
        </Drawer>
      )}
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
        <Col className="col-user-control">
          <Row justify="end" align="middle">
            {lg && (
              <>
                <Col flex="0.1">
                  <Row justify="end">
                    <Link to="/login">
                      <Button className="button-logout" shape="round">
                        <RiLogoutCircleLine className="icon-logout" />
                      </Button>
                    </Link>
                  </Row>
                </Col>
                <Col flex="0.07">
                  <Row justify="center">
                    <Divider
                      type="vertical"
                      orientation="center"
                      className="col-divider"
                    />
                  </Row>
                </Col>
                <Col flex="0.1" className="col-user">
                  <p className="user-name">Mary Jane</p>
                  <p className="email">admin@winegood.com</p>
                </Col>
              </>
            )}
            <Col flex="0.1">
              <Row justify="end" align="middle">
                <a href="/account">
                  <img src={UserAvatar} className="user-avatar" alt="logo" />
                </a>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </nav>
  );
};
export default NavBar;
