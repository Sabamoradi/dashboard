import "./style.scss";
import BaseBreadcrumb from "../../../components/base/BreadCrumb";
import { addCategoryBreadCrumb } from "../../../configs/crumbData";
import CustomHeader from "../../../components/base/CustomHeader";
import { localTexts } from "../../../locals/text";
import { ChevronDown, Plus } from "../../../assets/icons";
import BaseInput from "../../../components/base/Input";
import BaseButton from "../../../components/base/Button";
import { Modal, Select } from "antd";
import { useState } from "react";

const AddCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="category-wrapper">
      <div className="add-header">
        <BaseBreadcrumb items={addCategoryBreadCrumb} />
        <CustomHeader title={localTexts.addCategory} />
      </div>
      <div className="add-content">
        <div className="guid mt-10">
          <p>{localTexts.guidLine}</p>
          <ChevronDown />
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="content-top">
              <div className="content-item">
                <BaseInput
                  placeTitle={localTexts.writeCategoryTitle}
                  labelText={localTexts.categoryTitle}
                />
              </div>
            </div>
            <div className="content-bottom">
              <p>{localTexts.filters}</p>
              <BaseButton
                type="primary"
                text={localTexts.addFilter}
                clickBtn={() => setIsModalOpen(true)}
                icon={<Plus />}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal title="Basic Modal" open={isModalOpen}>
        <div className="add-modal">
          <p>{localTexts.filter}</p>
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddCategory;
