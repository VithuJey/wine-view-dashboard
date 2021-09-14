import React, { ReactElement } from "react";
import { Button as AntButton } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { IconType } from "react-icons";
import "./Button.style.less";
import "antd/es/button/style";

type ButtonProps = {
  title: string;
  size: SizeType;
  icon: ReactElement<IconType, IconType>;
  htmlType?: "button" | "submit" | "reset";
};

export default function Button({ title, size, icon, htmlType }: ButtonProps) {
  return (
    <AntButton
      className="button"
      type="primary"
      shape="round"
      icon={icon}
      size={size}
      htmlType={htmlType}
    >
      {title}
    </AntButton>
  );
}
