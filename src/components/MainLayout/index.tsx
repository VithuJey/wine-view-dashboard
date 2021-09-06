import React from "react";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
import { Layout } from "antd";
import "./style.css";
const { Footer, Sider, Content } = Layout;

function MainLayout() {
  return (
    <Layout>
      <SideBar />
      <Layout>
        <Header />
        {/* <Content>Content</Content>
        <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
}

export default MainLayout;
