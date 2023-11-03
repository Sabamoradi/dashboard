import "./style.scss";
import { useState } from "react";
import IncentiveGiftTable from "./container/Table";

const IncentiveCreditGift = () => {
  const [listData, setListData] = useState([
    {
      id: 1,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <div>{listData.length === 0 ? "hello" : <IncentiveGiftTable />}</div>;
};

export default IncentiveCreditGift;
