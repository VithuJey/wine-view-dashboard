import React from "react";
import { Layout } from "antd";

const { Footer: Foot } = Layout;

function Footer() {
  return (
    <Foot>
      <div style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </div>
    </Foot>
  );
}

export default Footer;
