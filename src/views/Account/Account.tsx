import React from "react";
import { Col, Form, Grid, Input, Row } from "antd";
import "./Account.style.less";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import "antd/es/input/style";
import "antd/es/form/style";
import Button from "../../components/Button/Button";
import { FaSave } from "react-icons/fa";
import { SaveOutlined } from "@ant-design/icons";
import FormLayout from "../../components/ContentLayouts/FormLayout";

export const renderLabel = (label: string) => {
  return <p className="form-label">{label}</p>;
};

function Account() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FormLayout
      title="Account"
      coverImgSrc="https://images.unsplash.com/photo-1598152541316-921ebb5e0433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
    >
      <Form
        name="user-account"
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          restaurantName: "WineGood Restaurant ",
          location: "777 Brockton Avenue, Abington MA 2351",
          email: "admin@winegood.com",
          phone: "508 514 2356",
          poc: "Mary Jane",
        }}
      >
        <Form.Item name="userLogo">
          <ImageUpload
            userName="User"
            img="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=40"
          />
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
          name="location"
          rules={[{ required: true, message: "Location Missing" }]}
        >
          <Input className="form-input-field" />
        </Form.Item>
        <Form.Item
          label={renderLabel("Email")}
          name="email"
          rules={[{ required: true, message: "Email Missing" }]}
        >
          <Input className="form-input-field" />
        </Form.Item>
        <Form.Item
          label={renderLabel("Contact Number")}
          name="phone"
          rules={[{ required: true, message: "Contact Number Missing" }]}
        >
          <Input className="form-input-field" />
        </Form.Item>
        <Form.Item
          label={renderLabel("Point Of Contact")}
          name="poc"
          rules={[{ required: true, message: "Point Of Contact Missing" }]}
        >
          <Input className="form-input-field" />
        </Form.Item>
        <Form.Item>
          <Button
            title="Update"
            htmlType={"submit"}
            size={"small"}
            icon={<SaveOutlined />}
          />
        </Form.Item>
      </Form>
    </FormLayout>
  );
}

export default Account;
