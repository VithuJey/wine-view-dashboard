import { Row } from "antd";
import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Dashboard.style.less";
import SESSION_LOGO from "../../assets/Images/session.svg";
import WINE_SAVED_LOGO from "../../assets/Images/wine-saved.svg";
import WINE_SHARED_LOGO from "../../assets/Images/wine-shared.svg";
import POPULAR_WINE_LOGO from "../../assets/Images/popular-wine.svg";
import TRANSACTION_LOGO from "../../assets/Images/transaction.svg";

function Dashboard() {
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <div>
      <Row className="content-header" justify="space-between">
        <p className="content-title">Dashboard</p>
      </Row>
      {/* <div className="content-body"> */}
      <div className="parent">
        <Card
          imgSrc={SESSION_LOGO}
          color="#c7158c"
          title="Sessions"
          count="44"
        />
        <Card
          imgSrc={WINE_SAVED_LOGO}
          color="#8E278C"
          title="Wines Saved"
          count="38"
        />
        <Card
          imgSrc={WINE_SHARED_LOGO}
          color="#EEB55F"
          title="Wines Shared"
          count="11"
        />
        <Card
          imgSrc={POPULAR_WINE_LOGO}
          color="#2A336F"
          title="Most/Least Popular Wines"
          count="26"
        />
        <Card
          imgSrc={TRANSACTION_LOGO}
          color="#3D488C"
          title="Estimated Transactions"
          count="30"
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
