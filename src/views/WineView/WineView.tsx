import { Row, Space, Table } from "antd";
import React from "react";
import Button from "../../components/Button/Button";
import { GoPlus } from "react-icons/go";
import "./WineView.style.less";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import "antd/es/table/style";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Producer",
    dataIndex: "producer",
    key: "producer",
  },
  {
    title: "Picture",
    dataIndex: "picture",
    key: "picture",
    render: (picture) => (
      <img src={picture} className="user-avatar" alt="wine pic" />
    ),
  },
  {
    title: "Vintage",
    dataIndex: "vintage",
    key: "vintage",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Grape Varietal",
    dataIndex: "grapeVarietal",
    key: "grapeVarietal",
  },
  {
    title: "Region",
    dataIndex: "region",
    key: "region",
  },
  {
    title: "Alcohol %",
    dataIndex: "alcohol",
    key: "alcohol",
    render: (alcohol) => `${alcohol} %`,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link to="/wine/edit/123456" style={{ color: "#C7158C" }}>
          Edit
        </Link>
        <a style={{ color: "red" }}>Delete</a>
      </Space>
    ),
  },
];

const dataSource = [
  {
    producer: "Merlot Red",
    picture:
      "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    vintage: "1990",
    description:
      "Wines range in style from rosé to red. It is from regions of Rioja and Ribera del Duerol.",
    grapeVarietal: "Red Grapes",
    region: "Spain",
    alcohol: "40",
  },
  {
    producer: "Merlot Red",
    picture:
      "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    vintage: "1990",
    description:
      "Wines range in style from rosé to red. It is from regions of Rioja and Ribera del Duerol.",
    grapeVarietal: "Red Grapes",
    region: "Spain",
    alcohol: "40",
  },
  {
    producer: "Merlot Red",
    picture:
      "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    vintage: "1990",
    description:
      "Wines range in style from rosé to red. It is from regions of Rioja and Ribera del Duerol.",
    grapeVarietal: "Red Grapes",
    region: "Spain",
    alcohol: "40",
  },
];

function WineView() {
  return (
    <div>
      <Row className="table-header" justify="space-between">
        <p className="table-title">View Wine</p>
        <Button title="Add" size="large" icon={<PlusOutlined />} />
      </Row>
      <Row className="table-body">
        <Table
          className="table"
          dataSource={dataSource}
          columns={columns}
          pagination={{
            pageSize: 6,
            position: ["bottomLeft"],
            hideOnSinglePage: true,
          }}
        />
      </Row>
    </div>
  );
}

export default WineView;
