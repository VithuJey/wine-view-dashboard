import { Row, Col, Form, Input, Button } from "antd";
import React from "react";
import LOGO from "@Assets/Images/logo.png";
import "./Register.style.less";
import "antd/es/input/style";
import "antd/es/form/style";
import "antd/es/button/style";

const renderLabel = (label: string) => {
  return <p className="auth-form-label">{label}</p>;
};

export default function Register() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="auth-container">
      <Row className="auth-body" style={{ width: "100%", height: "100%" }}>
        <Col className="auth-col-cover" flex="0.6">
          <img
            className="auth-cover-img"
            src={
              "https://images.unsplash.com/photo-1566843579928-9c51d956eeee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
            }
            alt="cover-pic"
          />
          <div className="img-overlay">
            <div className="wrapper">
              <p className="text-1">Welcome to</p>
              <p className="text-2">WineView Dashboard</p>
              <p className="text-3">Create your account</p>
              <div className="bottom-content">
                <p className="text-3">Do have an account?</p>
                <Button className="login-button auth-button">LOGIN</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col className="auth-col-form" flex="0.4">
          <Row justify="center" align="middle">
            <img src={LOGO} className="auth-company-logo" alt="logo" />
          </Row>

          <div className="auth-form">
            <Form
              name="login-form"
              layout={"vertical"}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              initialValues={{
                email: "",
                password: "",
              }}
            >
              <Form.Item
                label={renderLabel("Company Name")}
                name="company-name"
                rules={[{ required: true, message: "Company Name missing!" }]}
              >
                <Input className="form-input-field" />
              </Form.Item>

              <Form.Item
                label={renderLabel("Email")}
                name="email"
                rules={[{ required: true, message: "Email missing!" }]}
              >
                <Input className="form-input-field" />
              </Form.Item>

              <Form.Item
                label={renderLabel("Password")}
                name="password"
                rules={[{ required: true, message: "Password missing!" }]}
              >
                <Input.Password className="form-input-field" />
              </Form.Item>

              <Form.Item
                label={renderLabel("Confirm Password")}
                name="confirm-password"
                rules={[
                  { required: true, message: "Confirm Password missing!" },
                ]}
              >
                <Input.Password className="form-input-field" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="signup-button auth-button"
                >
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="signup-content">
            <p className="text-3">Do have an account?</p>
            <Button className="login-button auth-button">LOGIN</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
