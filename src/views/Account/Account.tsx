import { Row } from "antd";
import React from "react";
import "./Account.style.less";

function Account() {
  return (
    <div>
      <Row className="content-header" justify="space-between">
        <p className="content-title">Account</p>
      </Row>
      <Row className="content-body"></Row>
    </div>
  );
}

export default Account;
