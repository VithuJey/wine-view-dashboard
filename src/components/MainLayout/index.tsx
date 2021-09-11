import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import { Layout } from "antd";
import MainMenu from "./MainMenu/MainMenu";
import NavBar from "./NavBar/NavBar";

import "./style.less";

const { Content } = Layout;

function MainLayout() {
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event: { key: any }) => {
    const key = event.key;
    setSelectedKey(key);
  };

  const Menu = (
    <MainMenu selectedKey={selectedKey} changeSelectedKey={changeSelectedKey} />
  );

  return (
    <Layout>
      <SideBar menu={Menu} />
      <Layout>
        <NavBar menu={Menu} />
        <Content className="content">{selectedKey}</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
