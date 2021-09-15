import { Avatar, Button, message, Upload } from "antd";
import React, { useState } from "react";
import ImgCrop from "antd-img-crop";
import { HiUpload } from "react-icons/hi";
import "antd/es/modal/style";
import "antd/es/slider/style";
import "./ImageUpload.style.less";

type ImageUploadProps = {
  userName: string;
  img?: string;
  showUploadIcon?: boolean;
};

export default function ImageUpload({
  userName,
  img,
  showUploadIcon,
}: ImageUploadProps) {
  const [imgList, setImgList] =
    useState<{ uid: string; name: string; status: string; url: string }>();
  const [imgSrc, setImgSrc] = useState(img);

  const onChange = ({ fileList: newFileList }) => {
    console.log("newFileList ", newFileList);
    setImgList(newFileList);
    setImgSrc(
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=40"
    );
  };

  const checkBeforeUpload = (file) => {
    if (file.type === "image/png" || file.type === "image/jpg") {
      return true;
    }
    message.error(`Choosen the wrong file: ${file.name}`);
  };

  return (
    <>
      {imgSrc ? (
        <img src={imgSrc} className="user-image" />
      ) : (
        <Avatar className="user-upload-avatar" size={100} shape="circle">
          {userName[0]}
        </Avatar>
      )}
      {showUploadIcon && (
        <ImgCrop rotate shape="round" grid>
          <Upload
            name="avatar"
            maxCount={1}
            showUploadList={false}
            onChange={onChange}
            beforeUpload={checkBeforeUpload}
          >
            <Button className="upload-button">
              <HiUpload fontSize="26px" />
            </Button>
          </Upload>
        </ImgCrop>
      )}
    </>
  );
}
