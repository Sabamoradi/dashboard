import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import type { InputRef } from "antd";
import { Input, Table, Tag, Space } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import "./style.scss";
import { localTexts } from "../../../locals/text";
import { Fragment } from "react";

interface DataType {
  key: string;
  copounName: string;
  copounType: string;
  gift:string;
  statusOfCopoun: string[];
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    copounName: "کوپن اولین خرید از سایت",
    copounType: "اولین خرید",
    gift:'ارسال رایگان',
    statusOfCopoun: ["nice"],
  },
  {
    key: "2",
    copounName: "کوپن اولین خرید از سایت",
    copounType: "اولین خرید",
    gift:'ارسال رایگان',
    statusOfCopoun: ["nice"],
  },
];

const CopounReportTable = () => {
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
      title: `${localTexts.copounName}`,
      dataIndex: "copounName",
      key: "copounName",
      ...getColumnSearchProps("copounName"),
    },
    {
      title: `${localTexts.copounType}`,
      dataIndex: "copounType",
      key: "copounType",
      ...getColumnSearchProps("copounType"),
    },
    {
      title: `${localTexts.gift}`,
      dataIndex: "gift",
      key: "gift",
      filters: [
        {
          text: "text",
          value: "value",
        },
      ],
    },
    {
      title: `${localTexts.statusOfCopoun}`,
      dataIndex: "statusOfCopoun",
      key: "statusOfCopoun",
      filters: [
        {
          text: "text",
          value: "value",
        },
      ],
      render: (statusOfCopoun: string[]) => (
        <span>
          {statusOfCopoun.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Fragment key={`${tag}-wrapper`}>
                <Tag color={color} key={`${tag}-first`}>
                  {tag.toUpperCase()}
                </Tag>
              </Fragment>
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

export default CopounReportTable;
