import IncentiveGiftTable from "./container/Table";
import "./style.scss";
import { useState } from "react";


const IncentiveGift = () => {
  const [listData, setListData] = useState([
    {
      id: 1,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <div>{listData.length === 0 ? "hello" : <IncentiveGiftTable/>}</div>;
};

export default IncentiveGift;
