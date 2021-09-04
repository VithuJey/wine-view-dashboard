import React from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Layout from "antd/lib/layout";
import { Content } from "antd/lib/layout/layout";
import "./style.css";

function MainLayout() {
  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />
      {/* <Layout>
        <NavBar />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            content
          </div>
        </Content>
        <Footer />
      </Layout> */}
    </Layout>
  );
}

export default MainLayout;
