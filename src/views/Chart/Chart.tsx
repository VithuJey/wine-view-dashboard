import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import ColumnChart from "../../components/Chart/ColumnChart";
import StackedChart from "../../components/Chart/StackedChart";
import DatePicker from "../../components/DatePicker/DatePicker";
import "antd/es/date-picker/style";
import { Grid, message, Row } from "antd";
import id from "date-fns/esm/locale/id/index.js";

const { RangePicker } = DatePicker;
const { useBreakpoint } = Grid;

const getCardName = (cardNo: number) => {
  if (cardNo === 0) return "Sessions";
  if (cardNo === 1) return "Wines Saved";
  if (cardNo === 2) return "Wines Shared";
  if (cardNo === 3) return "Most/Least Popular Wine";
  if (cardNo === 4) return "Estimated Transactions";
};

export default function Chart() {
  const { pathname } = useLocation();
  const history = useHistory();
  const { name }: { name: string } = useParams();
  const { lg, md, xs } = useBreakpoint();

  const rotateDeviceMessage = () => {
    message.info({
      content: "Turn your device to landscape mode for better chart view",
      className: "info-message",
      style: {
        marginTop: "88vh",
      },
    });
  };

  React.useEffect(() => {
    xs && rotateDeviceMessage();
  }, [xs]);

  React.useEffect(() => {
    if (lg) history.push("/");
  }, [lg, md]);

  return (
    <div>
      <Row className="dashboard-header" justify="space-between">
        <p className="dashboard-title">
          Dashboard &gt; {getCardName(Number(name))}
        </p>
      </Row>
      <div className="chart-container">
        {false ? (
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
    </div>
  );
}
