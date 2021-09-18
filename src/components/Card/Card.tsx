import { Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useState } from "react";
import { hexToRGB } from "../../utils/hexToRGB";
import "./Card.style.less";

const getFontSize = (title: string, xs: boolean) => {
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

const getCSS = (key: number) => {
  if (key === 0) return "card-0";
  if (key === 1) return "card-1";
  if (key === 2) return "card-2";
  if (key === 3) return "card-3";
  if (key === 4) return "card-4";
};

type CardProps = {
  key: number;
  imgSrc: string;
  color: string;
  title: string;
  count: string;
  setSelectedCards: any;
};

export default function Card({
  key,
  imgSrc,
  color,
  title,
  count,
  setSelectedCards,
}: CardProps) {
  const [enableButton, setEnableButton] = useState(false);

  const { xs } = useBreakpoint();

  const onClickCard = () => {
    setEnableButton((prevState) => !prevState);
    setSelectedCards(key);
  };

  return (
    <Row
      className={"card-wrapper"}
      style={{
        backgroundColor: color,
        userSelect: "none",
        boxShadow: enableButton && "0 0 0 10pt " + hexToRGB(color),
        transition: enableButton && "0.4s",
        transitionTimingFunction: enableButton && "linear",
      }}
      onClick={onClickCard}
    >
      <Col className="card-left" flex="2">
        <img src={imgSrc} className="icon" alt="card-icon" />
      </Col>
      <Col className="card-right" flex="3">
        <p className="count">{count}</p>
        <p
          className="title"
          style={{
            fontSize: getFontSize(title, xs),
          }}
        >
          {title}
        </p>
      </Col>
    </Row>
  );
}
