import { Row } from "antd";
import React from "react";
import Button from "../../components/Button/Button";
import { GoPlus } from "react-icons/go";
import "./Dashboard.style.less";

function Dashboard() {
  return (
    <div>
      <Row className="content-header" justify="space-between">
        <p className="content-title">Dashboard</p>
      </Row>
      <Row className="content-body"></Row>
    </div>
  );
}

export default Dashboard;
