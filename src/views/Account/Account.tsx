import React from "react";
import { Col, Form, Grid, Input, Row } from "antd";
import "./Account.style.less";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import "antd/es/input/style";
import "antd/es/form/style";
import Button from "../../components/Button/Button";
import { FaSave } from "react-icons/fa";
import { SaveOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

const renderLabel = (label: string) => {
  return <p className="form-label">{label}</p>;
};

function Account() {
  const { sm } = useBreakpoint();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Row className="content-header" justify="space-between">
        <p className="content-title">Account</p>
      </Row>
      <Row className="content-body" style={{ width: "100%", height: "100%" }}>
        <Col flex="0.4">
          {/* <Row justify="center" align="middle">
            <Col flex="1"> */}
          <div className="form">
            <Form
              name="user-account"
              layout={"vertical"}
              // form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item name="userLogo">
                <ImageUpload userName="User" />
              </Form.Item>
              <Form.Item
                label={renderLabel("Restaurant Name")}
                name="restaurantName"
                rules={[{ required: true, message: "Restaurant Name Missing" }]}
              >
                <Input className="form-input-field" />
              </Form.Item>
              <Form.Item
                label={renderLabel("Location")}
                name="username"
                rules={[{ required: true, message: "Location Missing" }]}
              >
                <Input className="form-input-field" />
              </Form.Item>
              <Form.Item
                label={renderLabel("Email")}
                name="username"
                rules={[{ required: true, message: "Email Missing" }]}
              >
                <Input className="form-input-field" />
              </Form.Item>
              <Form.Item
                label={renderLabel("Contact Number")}
                name="username"
                rules={[{ required: true, message: "Contact Number Missing" }]}
              >
                <Input className="form-input-field" />
              </Form.Item>
              <Form.Item
                label={renderLabel("Point Of Contact")}
                name="username"
                rules={[
                  { required: true, message: "Point Of Contact Missing" },
                ]}
              >
                <Input className="form-input-field" />
              </Form.Item>
              <Button title="Update" size={"small"} icon={<SaveOutlined />} />
            </Form>
          </div>
          {/* </Col>
          </Row> */}
        </Col>
        <Col className="" flex="0.6">
          <img
            className="cover-img"
            // src="https://images.unsplash.com/photo-1598152541316-921ebb5e0433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Account;
