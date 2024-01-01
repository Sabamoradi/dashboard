import BaseBreadcrumb from "../../../components/base/BreadCrumb";
import CustomHeader from "../../../components/base/CustomHeader";
import { localTexts } from "../../../locals/text";
import "./style.scss";
import { Modal, Tabs } from "antd";

const CUtsomerDetail = () => {
  const items = [
    {
      id: "1",
      text: localTexts.customerInfo,
      content: "hello",
    },
    {
      id: "2",
      text: localTexts.wallet,
      content: "hello",
    },
    {
      id: "3",
      text: localTexts.orders,
      content: "ohh",
    },
    {
      id: "4",
      text: localTexts.transactions,
      content: "ohh",
    },
    {
      id: "5",
      text: localTexts.helper,
      content: "ohh",
    },
    {
      id: "6",
      text: localTexts.comments,
      content: "ohh",
    },
    {
      id: "7",
      text: localTexts.memberCategory,
      content: "ah",
    },
  ];
  return (
    <div>
      <CustomHeader title={localTexts.customerDetail} />
      <div className="tab-wrapper">
        <Tabs
          defaultActiveKey="1"
          items={items.map((el, i) => {
            return {
              label: <span>{el.text}</span>,
              key: el.id,
              children: el.content,
            };
          })}
        />
      </div>
    </div>
  );
};

export default CUtsomerDetail;
