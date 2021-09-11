import { Row } from "antd";
import React from "react";
import Button from "../../components/Button/Button";
import { GoPlus } from "react-icons/go";
import "./WineAdd.style.less";

function WineAdd() {
  return (
    <div>
      <Row className="content-header" justify="space-between">
        <p className="content-title">Add Wine</p>
      </Row>
      <Row className="content-body"></Row>
    </div>
  );
}

export default WineAdd;
