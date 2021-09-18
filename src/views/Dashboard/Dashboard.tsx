import { Row } from "antd";
import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Dashboard.style.less";
import SESSION_LOGO from "../../assets/Images/session.svg";
import WINE_SAVED_LOGO from "../../assets/Images/wine-saved.svg";
import WINE_SHARED_LOGO from "../../assets/Images/wine-shared.svg";
import POPULAR_WINE_LOGO from "../../assets/Images/popular-wine.svg";
import TRANSACTION_LOGO from "../../assets/Images/transaction.svg";

const cardDetails = [
  {
    key: 0,
    imgSrc: SESSION_LOGO,
    color: "#c7158c",
    title: "Sessions",
    count: "44",
  },
  {
    key: 1,
    imgSrc: WINE_SAVED_LOGO,
    color: "#8E278C",
    title: "Wines Saved",
    count: "38",
  },
  {
    key: 2,
    imgSrc: WINE_SHARED_LOGO,
    color: "#EEB55F",
    title: "Wines Shared",
    count: "11",
  },
  {
    key: 3,
    imgSrc: POPULAR_WINE_LOGO,
    color: "#2A336F",
    title: "Most/Least Popular Wines",
    count: "26",
  },
  {
    key: 4,
    imgSrc: TRANSACTION_LOGO,
    color: "#3D488C",
    title: "Estimated Transactions",
    count: "30",
  },
];

function Dashboard() {
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <div>
      <Row className="dashboard-header" justify="space-between">
        <p className="dashboard-title">Dashboard</p>
      </Row>
      <div className="dashboard-body">
        <div className="card-parent">
          {cardDetails.map((detail) => (
            <Card
              key={detail.key}
              imgSrc={detail.imgSrc}
              color={detail.color}
              title={detail.title}
              count={detail.count}
              setSelectedCards={setSelectedCards}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
