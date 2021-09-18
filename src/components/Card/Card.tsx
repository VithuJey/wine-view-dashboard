import { Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useCallback, useEffect, useState } from "react";
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

type CardProps = {
  cardNo: string;
  imgSrc: string;
  color: string;
  title: string;
  count: string;
  selectedCards: Array<string>;
  setSelectedCards: any;
};

export default function Card({
  cardNo,
  imgSrc,
  color,
  title,
  count,
  selectedCards,
  setSelectedCards,
}: CardProps) {
  const [enableButton, setEnableButton] = useState(false);
  const { xs } = useBreakpoint();

  useEffect(() => {
    console.log(selectedCards);
    setEnableButton(
      !!selectedCards.find((selectedCard: string) => selectedCard === cardNo)
    );
  }, [selectedCards, cardNo]);

  const onClickCard = useCallback(() => {
    let index = selectedCards.findIndex(
      (selectedCard: string) => selectedCard === cardNo
    );
    if (index === -1)
      if (cardNo === "0" || cardNo === "3" || cardNo === "4")
        setSelectedCards([cardNo]);
      else {
        if (
          selectedCards.includes("0") ||
          selectedCards.includes("3") ||
          selectedCards.includes("4")
        )
          setSelectedCards([cardNo]);
        else
          setSelectedCards((selectedCards: []) => [...selectedCards, cardNo]);
      }
    else
      setSelectedCards((selectedCards: []) => {
        selectedCards.splice(index, 1);
        return [...selectedCards];
      });
  }, [selectedCards, cardNo, setSelectedCards]);

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
