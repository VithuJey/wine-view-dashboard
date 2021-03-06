import { DatePicker, Row, Spin } from "antd";
import React, { lazy, Suspense, useState } from "react";
import Card from "../../components/Card/Card";
import "./Dashboard.style.less";
import SESSION_LOGO from "../../assets/Images/session.svg";
import WINE_SAVED_LOGO from "../../assets/Images/wine-saved.svg";
import WINE_SHARED_LOGO from "../../assets/Images/wine-shared.svg";
import POPULAR_WINE_LOGO from "../../assets/Images/popular-wine.svg";
import TRANSACTION_LOGO from "../../assets/Images/transaction.svg";
// import ColumnChart from "../../components/Chart/ColumnChart";
import "antd/es/date-picker/style";
// import StackedChart from "../../components/Chart/StackedChart";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useHistory } from "react-router";

const ColumnChart = lazy(() => import("../../components/Chart/ColumnChart"));
const StackedChart = lazy(() => import("../../components/Chart/StackedChart"));

const { RangePicker } = DatePicker;

const cardDetails = [
  {
    cardNo: "0",
    imgSrc: SESSION_LOGO,
    color: "#c7158c",
    title: "Sessions",
    count: "44",
  },
  {
    cardNo: "1",
    imgSrc: WINE_SAVED_LOGO,
    color: "#8E278C",
    title: "Wines Saved",
    count: "38",
  },
  {
    cardNo: "2",
    imgSrc: WINE_SHARED_LOGO,
    color: "#EEB55F",
    title: "Wines Shared",
    count: "11",
  },
  {
    cardNo: "3",
    imgSrc: POPULAR_WINE_LOGO,
    color: "#2A336F",
    title: "Most/Least Popular Wines",
    count: "26",
  },
  {
    cardNo: "4",
    imgSrc: TRANSACTION_LOGO,
    color: "#3D488C",
    title: "Estimated Transactions",
    count: "30",
  },
];

function Dashboard() {
  const { xs } = useBreakpoint();
  const history = useHistory();

  const [selectedCards, setSelectedCards] = useState<Array<string>>([]);

  React.useEffect(() => {
    if (xs !== undefined) {
      console.log("useEffect xs ", xs);
      !xs && setSelectedCards(["0"]);
    }
  }, [xs]);

  React.useEffect(() => {
    if (selectedCards.length > 0) {
      xs && history.push(`/chart/${selectedCards}`);
    }
  }, [xs, selectedCards, history]);

  return (
    <Suspense fallback={<Spin size="large" />}>
      <div>
        <Row className="dashboard-header" justify="space-between">
          <p className="dashboard-title">Dashboard</p>
        </Row>
        <div className="dashboard-body">
          <div className="card-container">
            {cardDetails.map((detail) => (
              <Card
                cardNo={detail.cardNo}
                imgSrc={detail.imgSrc}
                color={detail.color}
                title={detail.title}
                count={detail.count}
                selectedCards={selectedCards}
                setSelectedCards={setSelectedCards}
              />
            ))}
          </div>

          {!xs && selectedCards.length !== 0 ? (
            <div className="chart-container">
              {selectedCards.includes("1") && selectedCards.includes("2") ? (
                <StackedChart />
              ) : (
                <>
                  <Row justify="end">
                    <RangePicker
                      className="range-picker"
                      placeholder={["From date", "To date"]}
                    />
                  </Row>
                  <ColumnChart className="column-chart" />
                </>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Suspense>
  );
}

export default Dashboard;
