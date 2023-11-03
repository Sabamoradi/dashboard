import "./style.scss";
import { useState } from "react";
import CopounReportTable from "./Table";

const CopounReport = () => {
  const [listData, setListData] = useState([
    {
      id: 1,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <div>{listData.length === 0 ? "hello" : <CopounReportTable />}</div>;
};

export default CopounReport;
