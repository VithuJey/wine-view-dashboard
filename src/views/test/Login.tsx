import { Col, Row } from "antd";
import React from "react";
import "./Login.style.less";

export default function Login() {
  return (
    <div className="auth-container">
      <img
        className="auth-cover-img"
        src={
          "https://images.unsplash.com/photo-1440713017205-02904f447e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
        }
        alt="cover-pic"
      />
      <div className="auth-col-cover" />
      {/* <Row justify="center" align="middle" style={{ position: "absolute" }}>
        <Col> */}
      <div className="card"></div>
      {/* </Col>
      </Row> */}
    </div>
  );
}
