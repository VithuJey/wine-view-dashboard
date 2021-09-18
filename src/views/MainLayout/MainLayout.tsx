import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Layout } from "antd";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/NavBar/NavBar";
import "./MainLayout.style.less";
import { useLocation } from "react-router-dom";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const { Content } = Layout;

function MainLayout({ children }) {
  const { lg, md } = useBreakpoint();
  const { pathname } = useLocation();
  console.log("useLocation ", pathname);

  const [selectedKey, setSelectedKey] = useState("0");

  useEffect(() => {
    if (pathname.includes("account")) setSelectedKey("2");
    else if (pathname.includes("wine/view")) setSelectedKey("1.1");
    else if (pathname.includes("wine/add")) setSelectedKey("1.2");
    else if (pathname.includes("wine/edit")) setSelectedKey("1.1");
    else setSelectedKey("0");
  }, [pathname]);

  const changeSelectedKey = (event: { key: any }) => {
    const key = event.key;
    setSelectedKey(key);
  };

  if (lg || md)
    return (
      <Layout>
        <SideBar>
          <Menu
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
          />
        </SideBar>
        <Layout>
          <NavBar>
            <Menu
              selectedKey={selectedKey}
              changeSelectedKey={changeSelectedKey}
            />
          </NavBar>
          <Content className="content">{children}</Content>
          <div style={{ height: 40 }} />
        </Layout>
      </Layout>
    );
  else
    return (
      <Layout>
        <NavBar>
          <Menu
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
          />
        </NavBar>
        <Content className="content">{children}</Content>
        <div style={{ minHeight: "20vh" }} />
      </Layout>
    );
}

export default MainLayout;
