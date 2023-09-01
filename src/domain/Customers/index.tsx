import { localTexts } from "../../locals/text";
import "./style.scss";
import { useState } from "react";
import EmptyState from "../../components/base/EmptyState";

const Customers = () => {
  const [listData, setListData] = useState([]);

  return (
    <div className="customer-container">
      <div className="customer-top">
        <h2>{localTexts.customerList}</h2>
      </div>
      {listData.length === 0 ? (
        <EmptyState
          text={localTexts.customerEmptyState}
          btnText={localTexts.addCustomer}
        />
      ) : (
        <div>hello</div>
      )}
    </div>
  );
};

export default Customers;
