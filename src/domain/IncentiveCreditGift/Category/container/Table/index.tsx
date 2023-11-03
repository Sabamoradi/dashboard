import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import type { InputRef } from "antd";
import { Input, Table, Tag, Space } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import "./style.scss";
import { localTexts } from "../../../../../locals/text";
import { Fragment } from "react";

interface DataType {
  key: string;
  goalCutsomer: string;
  amountOfCredit: string;
  rangOfUsingCredit: string[];
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    goalCutsomer: "لیست مشتریان X ، لیست مشتریان Y ",
    amountOfCredit: "150,000 تومان",
    rangOfUsingCredit: ["nice"],
  },
  {
    key: "2",
    goalCutsomer: "لیست مشتریان X ، لیست مشتریان Y ",
    amountOfCredit: "150,000 تومان",
    rangOfUsingCredit: ["nice"],
  },
];

const IncentiveGiftTable = () => {
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
      title: `${localTexts.goalCutsomer}`,
      dataIndex: "goalCutsomer",
      key: "goalCutsomer",
      ...getColumnSearchProps("goalCutsomer"),
    },
    {
      title: `${localTexts.amountOfCredit}`,
      dataIndex: "amountOfCredit",
      key: "amountOfCredit",
      sorter: true,
    },
    {
      title: `${localTexts.rangOfUsingCredit}`,
      dataIndex: "rangOfUsingCredit",
      key: "rangOfUsingCredit",
      sorter: true,
    },
    {
      title: `${localTexts.action}`,
      key: "action",
      render: (_, record) => (
        <>
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

export default IncentiveGiftTable;
