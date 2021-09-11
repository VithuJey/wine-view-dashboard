import React, { ReactElement } from "react";
import { Button as AntButton } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { IconType } from "react-icons";
import "./Button.style.less";

type ButtonProps = {
  title: string;
  size: SizeType;
  icon: ReactElement<IconType, IconType>;
};

export default function Button({ title, size, icon }: ButtonProps) {
  return (
    <AntButton
      className="button"
      type="primary"
      shape="round"
      icon={icon}
      size={size}
    >
      {title}
    </AntButton>
  );
}
