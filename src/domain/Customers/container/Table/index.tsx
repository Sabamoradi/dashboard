import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import type { InputRef } from "antd";
import { Input, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import "./style.scss";
import { localTexts } from "../../../../locals/text";

interface DataType {
  key: string;
  name: string;
  subsDate: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    name: "علیرضا رزاقی طاهری",
    subsDate: "1401/10/10",
  },
  {
    key: "2",
    name: "پارسا قدیم خانی",
    subsDate: "1401/10/10",
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

  const columns: ColumnsType<DataType> = [
    {
      title: `${localTexts.customer}`,
      dataIndex: "name",
      key: "name",
      width: "15%",
      ...getColumnSearchProps("name"),
    },
    {
      title: `${localTexts.customerSubsDate}`,
      dataIndex: "subsDate",
      key: "subsDate",
      width: "15%",
      sorter: true,
    },
  ];

  return (
    <div className="table-wrapper">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CustomerTable;
