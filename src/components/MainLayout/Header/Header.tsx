import React from "react";
import { Layout, Row, Col, Divider, Button } from "antd";
import "./style.less";
import { RiLogoutCircleLine } from "react-icons/ri";

const { Header: HeaderComp } = Layout;

function Header() {
  return (
    <HeaderComp>
      <Row justify="end" className="header-row">
        <Col className="header-col-button">
          <Button className="header-button-logout">
            <RiLogoutCircleLine className="header-icon-logout" />
          </Button>
        </Col>
        <Col>
          <Divider
            type="vertical"
            orientation="center"
            className="header-col-divider"
          />
        </Col>
        <Col span={4} className="header-col-user">
          <p className="header-user-name">Mary Jane</p>
          <p className="header-email">maryjane@gmail.com</p>
        </Col>
        <Col>
          <img
            className="row-img"
            src={
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=40"
            }
            alt="user-pic"
          />
        </Col>
      </Row>
    </HeaderComp>
  );
}

export default Header;
