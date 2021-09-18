import { Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useState } from "react";
import { hexToRGB } from "../../utils/hexToRGB";
import "./Card.style.less";

type CardProps = {
  imgSrc: string;
  color: string;
  title: string;
  count: string;
};

export default function Card({ imgSrc, color, title, count }: CardProps) {
  const [enableButton, setEnableButton] = useState(false);

  const { xs } = useBreakpoint();

  const getFontSize = (title: string) => {
    if (title.includes("Sessions"))
      if (xs) return 12;
      else return 24;
    else if (title.includes("Wines Saved"))
      if (xs) return 12;
      else return 20;
    else if (title.includes("Wines Shared"))
      if (xs) return 12;
      else return 20;
    else if (title.includes("Most/Least Popular Wines"))
      if (xs) return 12;
      else return 14;
    else if (title.includes("Estimated Transactions"))
      if (xs) return 12;
      else return 16;
  };

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
      className={enableButton ? "card-button-wrapper" : "card-wrapper"}
      style={{
        backgroundColor: color,
        userSelect: "none",
        // -moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;
      }}
      onClick={() => {
        setEnableButton((prevState) => !prevState);
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
