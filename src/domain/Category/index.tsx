import { localTexts } from "../../locals/text";
import "./style.scss";
import { useState } from "react";
import EmptyState from "../../components/base/EmptyState";
import BaseButton from "../../components/base/Button";

const Category = () => {
  const [listData, setListData] = useState([]);
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
        "hello"
      )}
    </div>
  );
};

export default Category;
