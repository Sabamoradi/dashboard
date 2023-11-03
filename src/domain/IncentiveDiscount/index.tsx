import "./style.scss";
import { useState } from "react";
import IncentiveDiscountTable from "./container/Table";

const IncentiveDiscount = () => {
  const [listData, setListData] = useState([
    {
      id: 1,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <div>{listData.length === 0 ? "hello" : <IncentiveDiscountTable />}</div>;
};

export default IncentiveDiscount;
