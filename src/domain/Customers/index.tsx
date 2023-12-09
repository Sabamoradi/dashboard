import { localTexts } from "../../locals/text";
import "./style.scss";
import { useState } from "react";
import EmptyState from "../../components/base/EmptyState";
import BaseButton from "../../components/base/Button";
import { Modal, Tabs } from "antd";
import { Button, TabsProps } from "antd";
import FirstCreateTab from "./container/FirstCreateTab";
import SecondCreateTab from "./container/SecondCreateTab";
import CustomerTable from "./container/Table";
import { Plus } from "../../assets/icons";

const Customers = () => {
  const [listData, setListData] = useState([
    {
      id: 1,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (key: string) => {
    console.log(key);
  };

  const items = [
    {
      id: "1",
      text: localTexts.handyAdd,
      content: <FirstCreateTab />,
    },
    {
      id: "2",
      text: localTexts.addWithCSV,
      content: <SecondCreateTab />,
    },
  ];

  return (
    <div className="customer-container">
      <div className="customer-top">
        <h2>{localTexts.customerList}</h2>
        <div className="customer-btn">
          <BaseButton
            type="primary"
            text={localTexts.addCustomer}
            icon={<Plus />}
            clickBtn={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      {listData.length === 0 ? (
        <EmptyState text={localTexts.customerEmptyState}>
          <BaseButton
            type="primary"
            text={localTexts.addCustomer}
            clickBtn={() => setIsModalOpen(true)}
          />
        </EmptyState>
      ) : (
        <CustomerTable />
      )}

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        width={700}
        footer={[
          <Button
            key="back"
            className="font-data"
            onClick={() => setIsModalOpen(false)}
          >
            {localTexts.close}
          </Button>,
          <Button
            key="submit"
            className="font-data"
            onClick={() => setIsModalOpen(false)}
          >
            {localTexts.submit}
          </Button>,
        ]}
      >
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
      </Modal>
    </div>
  );
};

export default Customers;
