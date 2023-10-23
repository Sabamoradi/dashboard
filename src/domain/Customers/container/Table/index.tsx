import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import type { InputRef } from "antd";
import { Input, Table, Tag, Space } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import "./style.scss";
import { localTexts } from "../../../../locals/text";
import { Fragment } from "react";

interface DataType {
  key: string;
  name: string;
  subsDate: string;
  averagePayment: string;
  OrderNumber: number;
  customerValue: string;
  tags: string[];
  tagsStatus?: string[];
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    name: "علیرضا رزاقی طاهری",
    subsDate: "1401/10/10",
    averagePayment: "490,000 تومان",
    OrderNumber: 15,
    customerValue: "7،350,000 تومان",
    tags: ["nice"],
    tagsStatus: ["oh"],
  },
  {
    key: "2",
    name: "پارسا قدیم خانی",
    subsDate: "1401/10/10",
    averagePayment: "490,000 تومان",
    OrderNumber: 20,
    customerValue: "7،350,000 تومان",
    tags: ["loser"],
    tagsStatus: ["no"],
  },
];

const CustomerTable = () => {
  const searchInput = useRef<InputRef>(null);

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: () => (
      <div>
        <Input ref={searchInput} placeholder={`Search ${dataIndex}`} />
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
  });

  const clickItem = () => {
    alert("hello");
  };
  const columns: ColumnsType<DataType> = [
    {
      title: `${localTexts.customer}`,
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: `${localTexts.customerSubsDate}`,
      dataIndex: "subsDate",
      key: "subsDate",
      sorter: true,
    },
    {
      title: `${localTexts.averagePayment}`,
      dataIndex: "averagePayment",
      key: "averagePayment",
      sorter: true,
    },
    {
      title: `${localTexts.OrderNumber}`,
      dataIndex: "OrderNumber",
      key: "OrderNumber",
      sorter: true,
    },
    {
      title: `${localTexts.customerValue}`,
      dataIndex: "customerValue",
      key: "customerValue",
      sorter: true,
    },
    {
      title: `${localTexts.customerTag}`,
      key: "tags",
      dataIndex: "tags",
      sorter: true,
      render: (tags: string[]) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Fragment key={`${tag}-wrapper`}>
                <Tag color={color} key={`${tag}-first`}>
                  {tag.toUpperCase()}
                </Tag>
                <Tag color={color} key={`${tag}-second`}>
                  {tag.toUpperCase()}
                </Tag>
              </Fragment>
            );
          })}
        </span>
      ),
    },
    {
      title: `${localTexts.status}`,
      key: "tagsStatus",
      dataIndex: "tagsStatus",
      filters: [
        {
          text: "text",
          value: "value",
        },
      ],
      render: (tagsStatus: string[]) => (
        <span>
          {tagsStatus.map((tag, index) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "oh") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={`${index}-status`}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: `${localTexts.action}`,
      key: "action",
      render: (_, record) => (
        <>
          <Space className="action-item" size="middle">
            <a onClick={() => clickItem()}>تغییر وضعیت</a>
          </Space>
          <Space className="action-item" size="middle">
            <a onClick={() => clickItem()}>جزئیات</a>
          </Space>
        </>
      ),
    },
  ];

  return (
    <div className="table-wrapper">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CustomerTable;
