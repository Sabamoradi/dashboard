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
  categoryName: string;
  numberOfCustomer: string;
  statusOfCategory: string[];
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    categoryName: "دسته‌بندی مشتریان راضی",
    numberOfCustomer: "150 مشتری",
    statusOfCategory: ["nice"],
  },
  {
    key: "2",
    categoryName: "دسته‌بندی مشتریان راضی",
    numberOfCustomer: "200 مشتری",
    statusOfCategory: ["nice"],
  },
];

const CategoryTable = () => {
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
      title: `${localTexts.categoryName}`,
      dataIndex: "categoryName",
      key: "categoryName",
      ...getColumnSearchProps("categoryName"),
    },
    {
      title: `${localTexts.numberOfCustomer}`,
      dataIndex: "numberOfCustomer",
      key: "numberOfCustomer",
      sorter: true,
    },
    {
      title: `${localTexts.statusOfCategory}`,
      dataIndex: "statusOfCategory",
      key: "statusOfCategory",
      sorter: true,
      render: (statusOfCategory: string[]) => (
        <span>
          {statusOfCategory.map((tag) => {
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

export default CategoryTable;
