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
  DiscountName: string;
  discountSetting: string[];
  amountOfDiscount: string;
  targetCustomer:string;
  discountStatus:string[];
  rangOfDiscount:string
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    DiscountName: "تخفیف عید نوروز 1402 ",
    discountSetting: ["nice"],
    amountOfDiscount: '100,000 تومان',
    targetCustomer:'150  مشتری',
    discountStatus:['nice'],
    rangOfDiscount:'00:00 ، 24 مرداد 1401'
  },
  {
    key: "2",
    DiscountName: "تخفیف عید نوروز 1402 ",
    discountSetting: ["nice"],
    amountOfDiscount: '100,000 تومان',
    targetCustomer:'150  مشتری',
    discountStatus:['nice'],
    rangOfDiscount:'00:00 ، 24 مرداد 1401'
  },
];

const IncentiveDiscountTable = () => {
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
      title: `${localTexts.DiscountName}`,
      dataIndex: "DiscountName",
      key: "DiscountName",
      ...getColumnSearchProps("DiscountName"),
    },
    {
      title: `${localTexts.discountSetting}`,
      dataIndex: "discountSetting",
      key: "discountSetting",
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
                <div className="flex-tag">
                <Tag color={color} key={`${tag}-first`}>
                  {tag.toUpperCase()}
                </Tag>
                <Tag color={color} key={`${tag}-first`}>
                  {tag.toUpperCase()}
                </Tag>
                <Tag color={color} key={`${tag}-first`}>
                  {tag.toUpperCase()}
                </Tag>
                </div>
              </Fragment>
            );
          })}
        </span>
      ),
    },
    {
      title: `${localTexts.amountOfDiscount}`,
      dataIndex: "amountOfDiscount",
      key: "amountOfDiscount",      
    },
    {
      title: `${localTexts.targetCustomer}`,
      dataIndex: "targetCustomer",
      key: "targetCustomer",      
    },
    {
      title: `${localTexts.discountStatus}`,
      dataIndex: "discountStatus",
      key: "discountStatus",
      filters: [
        {
          text: "text",
          value: "value",
        },
      ],
      render: (statusOfCategory: string[]) => (
        <span>
          {statusOfCategory.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Fragment key={`${tag}-wrapper`}>
                <div className="flex-tag">
                <Tag color={color} key={`${tag}-first`}>
                  {tag.toUpperCase()}
                </Tag>
                </div>
              </Fragment>
            );
          })}
        </span>
      ),
    },
    {
      title: `${localTexts.rangOfDiscount}`,
      dataIndex: "rangOfDiscount",
      key: "rangOfDiscount", 
      sorter:true     
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

export default IncentiveDiscountTable;
