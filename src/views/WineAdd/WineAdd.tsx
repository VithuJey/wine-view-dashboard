import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined";
import { Form, Input, InputNumber, Row } from "antd";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import FormLayout from "../../components/FormLayout/FormLayout";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { renderLabel } from "../Account/Account";
import "./WineAdd.style.less";
import "antd/es/input/style";
import "antd/es/input-number/style";
import DatePicker from "../../components/DatePicker/DatePicker";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import { useLocation, useParams } from "react-router-dom";

function WineAdd() {
  const { pathname } = useLocation();
  const { id }: { id: string } = useParams();
  const [formState, setFormState] = useState<"add" | "edit" | "view">("add");
  const [form] = Form.useForm();

  useEffect(() => {
    // console.log(pathname, id);
    if (pathname.includes("add")) {
      setFormState("add");
      form.setFieldsValue({
        producer: "",
        description: "",
        grapeVarietal: "",
        region: "",
        vintage: "",
        alcoholPercent: "",
      });
    } else if (pathname.includes("edit")) {
      setFormState("edit");
      form.setFieldsValue({
        producer: "Merlot Red",
        description:
          "Wines range in style from rosé to red. It is from regions of Rioja and Ribera del Duerol.",
        grapeVarietal: "Red Grapes",
        region: "Spain",
        vintage: new Date(1990),
        alcoholPercent: "40",
      });
    } else if (pathname.includes("view")) {
      setFormState("view");
      form.setFieldsValue({
        producer: "Merlot Red",
        description:
          "Wines range in style from rosé to red. It is from regions of Rioja and Ribera del Duerol.",
        grapeVarietal: "Red Grapes",
        region: "Spain",
        vintage: new Date(1990),
        alcoholPercent: "40",
      });
    }
  }, [form, pathname, id]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FormLayout
      title={
        formState === "add"
          ? "Add Wine"
          : formState === "edit"
          ? "Edit Wine"
          : "View Wine"
      }
      coverImgSrc="https://images.unsplash.com/photo-1590938027555-672ec33abd7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80"
    >
      <Form
        name="user-account"
        form={form}
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="userLogo">
          <ImageUpload
            userName="User"
            img="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            showUploadIcon={formState === "view" ? false : true}
          />
        </Form.Item>
        <Form.Item
          label={renderLabel("Producer")}
          name="producer"
          rules={[{ required: true, message: "Producer Missing" }]}
        >
          <Input
            className="form-input-field"
            disabled={formState === "view" ? true : false}
            bordered={formState === "view" ? false : true}
          />
        </Form.Item>
        <Form.Item
          label={renderLabel("Description")}
          name="description"
          rules={[{ required: true, message: "Description Missing" }]}
        >
          {/* <TextArea showCount maxLength={60} className="form-text-area" /> */}
          <Input
            maxLength={60}
            className="form-input-field"
            disabled={formState === "view" ? true : false}
            bordered={formState === "view" ? false : true}
          />
        </Form.Item>
        <Form.Item
          label={renderLabel("Grape Varietal")}
          name="grapeVarietal"
          rules={[{ required: true, message: "Grape Varietal Missing" }]}
        >
          <Input
            className="form-input-field"
            disabled={formState === "view" ? true : false}
            bordered={formState === "view" ? false : true}
          />
        </Form.Item>
        <Form.Item
          label={renderLabel("Region")}
          name="region"
          rules={[{ required: true, message: "Region Missing" }]}
        >
          <Input
            className="form-input-field"
            disabled={formState === "view" ? true : false}
            bordered={formState === "view" ? false : true}
          />
        </Form.Item>
        {/* Vintage & Alcohol% */}
        <Row justify="space-between">
          <Form.Item
            label={renderLabel("Vintage")}
            name="vintage"
            rules={[{ required: true, message: "Vintage Missing" }]}
          >
            {/* <Input className="form-input-field" /> */}
            <DatePicker
              className="form-input-field"
              defaultPickerValue={new Date(2010, 6, 2)}
              picker="year"
              onChange={(date, dateString) => {
                console.log(date, dateString);
              }}
              disabled={formState === "view" ? true : false}
              bordered={formState === "view" ? false : true}
            />
          </Form.Item>
          <Form.Item
            label={renderLabel("Alcohol %")}
            name="alcoholPercent"
            rules={[{ required: true, message: "Alcohol % Missing" }]}
          >
            {/* <Input className="form-input-field" /> */}
            <InputNumber
              className="form-input-field"
              defaultValue={100}
              min={0}
              max={100}
              formatter={(value) => `${value}%`}
              // @ts-ignore
              parser={(value) => value.replace("%", "")}
              // onChange={onChange}
              disabled={formState === "view" ? true : false}
              bordered={formState === "view" ? false : true}
            />
          </Form.Item>
        </Row>

        {formState !== "view" && (
          <Form.Item>
            {formState === "add" ? (
              <Button
                title="Save"
                htmlType={"submit"}
                size={"small"}
                icon={<SaveOutlined />}
              />
            ) : (
              <Row justify="space-around">
                <Button
                  type="outlined"
                  title="Cancel"
                  htmlType={"button"}
                  size={"small"}
                  icon={<CloseOutlined />}
                />
                <Button
                  title="Update"
                  htmlType={"submit"}
                  size={"small"}
                  icon={<SaveOutlined />}
                />
              </Row>
            )}
          </Form.Item>
        )}
      </Form>
    </FormLayout>
  );
}

export default WineAdd;
