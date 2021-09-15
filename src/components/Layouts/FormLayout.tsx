import { Row, Col, Grid } from "antd";
import React from "react";
import "./FormLayout.style.less";

const { useBreakpoint } = Grid;

type FormLayoutProps = {
  children: any;
  title: string;
  coverImgSrc: string;
};

export default function FormLayout({
  children,
  title,
  coverImgSrc,
}: FormLayoutProps) {
  const { lg, md, sm } = useBreakpoint();
  console.log(lg, md, sm);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Row className="content-header" justify="space-between">
        <p className="content-title">{title}</p>
      </Row>
      <Row className="content-body" style={{ width: "100%", height: "100%" }}>
        <Col className="col-form" flex={0.4}>
          <div className="form">{children}</div>
        </Col>
        <Col className="col-cover" flex="0.6">
          <img className="cover-img" src={coverImgSrc} alt="cover-pic" />
        </Col>
      </Row>
    </div>
  );
}
