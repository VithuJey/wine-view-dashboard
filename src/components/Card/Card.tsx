import { Col, Row } from "antd";
import React from "react";
import { hexToRGB } from "../../utils/hexToRGB";
import "./Card.style.less";

const getFontSize = (title: string) => {
  if (title.includes("Sessions")) return 24;
  else if (title.includes("Wines Saved")) return 20;
  else if (title.includes("Wines Shared")) return 20;
  else if (title.includes("Most/Least Popular Wines")) return 14;
  else if (title.includes("Estimated Transactions")) return 16;
};

type CardProps = {
  imgSrc: string;
  color: string;
  title: string;
  count: string;
};

export default function Card({ imgSrc, color, title, count }: CardProps) {
  const style = {
    normal: {
      background: "purple",
      color: "#ffffff",
    },
    hover: {
      boxShadow: "0 0 0 10pt " + hexToRGB(color),
      transition: "0.4s",
      transitionTimingFunction: "linear",
    },
  };
  return (
    <Row
      className="card-wrapper"
      style={{
        backgroundColor: color,
      }}
    >
      <Col className="card-left" flex="2">
        <img src={imgSrc} className="icon" alt="card-icon" />
      </Col>
      <Col className="card-right" flex="3">
        <p className="count">{count}</p>
        <p
          className="title"
          style={{
            fontSize: getFontSize(title),
          }}
        >
          {title}
        </p>
      </Col>
    </Row>
  );
}
