import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import { Layout } from "antd";
import MainMenu from "./MainMenu/MainMenu";
import NavBar from "./NavBar/NavBar";

import "./style.less";
import Dashboard from "../../views/Dashboard/Dashboard";
import WineView from "../../views/WineView/WineView";
import WineAdd from "../../views/WineAdd/WineAdd";
import Account from "../../views/Account/Account";

const { Content } = Layout;

const renderContent = (selectedKey: string) => {
  switch (selectedKey) {
    case "1.1":
      return <WineView />;
    case "1.2":
      return <WineAdd />;
    case "2":
      return <Account />;
    default:
      return <Dashboard />;
  }
};

function MainLayout() {
  const [selectedKey, setSelectedKey] = useState("1.2");
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
        <Content className="content">{renderContent(selectedKey)}</Content>
        <div style={{ height: 40 }} />
      </Layout>
    </Layout>
  );
}

export default MainLayout;
