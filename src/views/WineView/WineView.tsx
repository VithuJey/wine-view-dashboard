import { Row } from "antd";
import React from "react";
import Button from "../../components/Button/Button";
import { GoPlus } from "react-icons/go";
import "./WineView.style.less";

function WineView() {
  return (
    <div>
      <Row className="content-header" justify="space-between">
        <p className="content-title">View Wine</p>
        <Button
          title="Add"
          size="large"
          icon={<GoPlus className="add-icon" />}
        />
      </Row>
      <Row className="content-body"></Row>
    </div>
  );
}

export default WineView;
