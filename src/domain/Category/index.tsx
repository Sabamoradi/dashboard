import { localTexts } from "../../locals/text";
import "./style.scss";
import { useState } from "react";
import EmptyState from "../../components/base/EmptyState";
import BaseButton from "../../components/base/Button";
import CategoryTable from "./container/Table";

const Category = () => {
  const [listData, setListData] = useState([
    {
      id: 1,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {listData.length === 0 ? (
        <EmptyState text={localTexts.categoryEmptyState}>
          <BaseButton
            type="primary"
            text={localTexts.addCategory}
            clickBtn={() => setIsModalOpen(true)}
          />
        </EmptyState>
      ) : (
        <CategoryTable />
      )}
    </div>
  );
};

export default Category;
