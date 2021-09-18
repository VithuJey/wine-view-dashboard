import React, { ReactElement } from "react";
import { Button as AntButton } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { IconType } from "react-icons";
import "./Button.style.less";
import "antd/es/button/style";

type ButtonProps = {
  type?: "contained" | "outlined";
  title: string;
  size: SizeType;
  icon: ReactElement<IconType, IconType>;
  htmlType?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export default function Button({
  type = "contained",
  title,
  size,
  icon,
  htmlType,
  onClick,
}: ButtonProps) {
  if (type === "contained")
    return (
      <AntButton
        className="button-contained"
        type="primary"
        shape="round"
        icon={icon}
        size={size}
        htmlType={htmlType}
        onClick={onClick}
      >
        {title}
      </AntButton>
    );
  else if (type === "outlined")
    return (
      <AntButton
        className="button-outlined"
        type="default"
        shape="round"
        icon={icon}
        size={size}
        htmlType={htmlType}
        onClick={onClick}
      >
        {title}
      </AntButton>
    );
}
