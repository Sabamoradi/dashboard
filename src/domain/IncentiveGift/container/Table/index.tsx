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
  present: string;
  amountOfPresent: string;
  statusOfGift: string[];
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    present: "کد تخفیف 10 درصدی ",
    amountOfPresent: "10 امتیاز",
    statusOfGift: ["nice"],
  },
  {
    key: "2",
    present: "کد تخفیف 10 درصدی ",
    amountOfPresent: "10 امتیاز",
    statusOfGift: ["nice"],
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
      title: `${localTexts.present}`,
      dataIndex: "present",
      key: "present",
      ...getColumnSearchProps("present"),
    },
    {
      title: `${localTexts.amountOfPresent}`,
      dataIndex: "amountOfPresent",
      key: "amountOfPresent",
      sorter: true,
    },
    {
      title: `${localTexts.statusOfGift}`,
      dataIndex: "statusOfGift",
      key: "statusOfGift",
      filters: [
        {
          text: "text",
          value: "value",
        },
      ],
      render: (statusOfGift: string[]) => (
        <span>
          {statusOfGift.map((tag, index) => {
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
            <a onClick={() => clickItem()}>ویرایش</a>
          </Space>
          <Space className="action-item red-action" size="middle">
            <a onClick={() => clickItem()}>حذف</a>
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
