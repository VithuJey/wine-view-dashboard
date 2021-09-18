import React from "react";
import {
  Modal as AntModal,
  Button,
  Row,
  Upload,
  message,
  Divider,
  Input,
} from "antd";
import { HiUpload } from "react-icons/hi";
import "./Modal.style.less";
import "antd/es/input/style";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

type ModalProps = {
  isVisible: boolean;
  setIsVisible: any;
};

export default function Modal({ isVisible, setIsVisible }: ModalProps) {
  return (
    <AntModal
      visible={isVisible}
      centered
      footer={null}
      onCancel={() => {
        setIsVisible(false);
      }}
      className="modal-container"
    >
      <Row justify="center" align="middle">
        <Upload {...props}>
          <Button
            className="upload-long-button"

            // style={{ backgroundColor: "" }}
          >
            <Row justify="center">
              <HiUpload fontSize="26px" />
              Upload File
            </Row>
          </Button>
        </Upload>
        <Divider className="modal-divider" />
        {/* <Row justify="center"> */}
        <p>Insert URL here</p>
        <Input className="input-field-url" />
        {/* </Row> */}
      </Row>
    </AntModal>
  );
}
