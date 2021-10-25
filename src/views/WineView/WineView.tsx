import { Row, Space, Table, Button as AntButton } from "antd";
import React from "react";
import Button from "../../components/Button/Button";
import "./WineView.style.less";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import "antd/es/table/style";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const columns = [
  {
    title: () => <b>Producer</b>,
    dataIndex: "producer",
    key: "producer",
    responsive: ["xs", "sm", "md", "md"],
    render: (producer) => <Link to="/wine/view/123456">{producer}</Link>,
  },
  {
    title: () => <b>Picture</b>,
    dataIndex: "picture",
    key: "picture",
    render: (picture) => (
      <img src={picture} className="user-avatar" alt="wine pic" />
    ),
    responsive: ["sm", "md", "md"],
  },
  {
    title: () => <b>Vintage</b>,
    dataIndex: "vintage",
    key: "vintage",
    responsive: ["sm", "md", "lg"],
  },
  {
    title: () => <b>Description</b>,
    dataIndex: "description",
    key: "description",
    responsive: ["lg"],
  },
  {
    title: () => <b>Grape Varietal</b>,
    dataIndex: "grapeVarietal",
    key: "grapeVarietal",
    responsive: ["lg"],
  },
  {
    title: () => <b>Region</b>,
    dataIndex: "region",
    key: "region",
    responsive: ["lg"],
  },
  {
    title: () => <b>Alcohol %</b>,
    dataIndex: "alcohol",
    key: "alcohol",
    render: (alcohol) => `${alcohol} %`,
    responsive: ["lg"],
  },
  {
    title: () => <b>Action</b>,
    dataIndex: "action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link to="/wine/edit/123456" style={{ color: "#C7158C" }}>
          Edit
        </Link>
        <AntButton type="link" style={{ color: "red" }}>
          Delete
        </AntButton>
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
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <div>
      <Row className="table-header" justify="space-between">
        <p className="table-title">View Wine</p>
        <Button
          title="Add"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => {
            setIsModalVisible(true);
          }}
        />
        <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
      </Row>
      <Row className="table-body">
        <Table
          className="table"
          dataSource={dataSource}
          // @ts-ignore
          columns={columns}
          pagination={{
            pageSize: 6,
            position: ["bottomLeft"],
            hideOnSinglePage: true,
          }}
          // onRow={(record, rowIndex) => {
          //   return {
          //     onClick: onRowClick,
          //   };
          // }}
        />
      </Row>
    </div>
  );
}

export default WineView;
