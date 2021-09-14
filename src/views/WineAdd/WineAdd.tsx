import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined";
import { Form, Input, Row } from "antd";
import React from "react";
import Button from "../../components/Button/Button";
import FormLayout from "../../components/ContentLayouts/FormLayout";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { renderLabel } from "../Account/Account";
import "./WineAdd.style.less";
import "antd/es/input/style";

const { TextArea } = Input;

function WineAdd() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FormLayout
      title="Add Wine"
      coverImgSrc="https://images.unsplash.com/photo-1590938027555-672ec33abd7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80"
    >
      <Form
        name="user-account"
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          wineName: "Tempranillo",
          description:
            "Wines range in style from rosé to red. It is from regions of Rioja and Ribera del Duerol.",
          grapeVarietal: "Red Grapes",
          region: "Spain",
          vintage: "1990",
          alcoholPercent: "40",
        }}
      >
        <Form.Item name="userLogo">
          <ImageUpload
            userName="User"
            img="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
        </Form.Item>
        <Form.Item
          label={renderLabel("Wine Name")}
          name="wineName"
          rules={[{ required: true, message: "Wine Name Missing" }]}
        >
          <Input className="form-input-field" />
        </Form.Item>
        <Form.Item
          label={renderLabel("Description")}
          name="description"
          rules={[{ required: true, message: "Description Missing" }]}
        >
          {/* <TextArea showCount maxLength={60} className="form-text-area" /> */}
          <Input maxLength={60} className="form-input-field" />
        </Form.Item>
        <Form.Item
          label={renderLabel("Grape Varietal")}
          name="grapeVarietal"
          rules={[{ required: true, message: "Grape Varietal Missing" }]}
        >
          <Input className="form-input-field" />
        </Form.Item>
        <Form.Item
          label={renderLabel("Region")}
          name="region"
          rules={[{ required: true, message: "Region Missing" }]}
        >
          <Input className="form-input-field" />
        </Form.Item>
        <Form.Item
          label={renderLabel("Vintage")}
          name="vintage"
          rules={[{ required: true, message: "Vintage Missing" }]}
        >
          <Input className="form-input-field" />
        </Form.Item>
        <Form.Item
          label={renderLabel("Alcohol %")}
          name="alcoholPercent"
          rules={[{ required: true, message: "Alcohol % Missing" }]}
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

export default WineAdd;