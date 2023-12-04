import "./style.scss";
import BaseBreadcrumb from "../../../components/base/BreadCrumb";
import { addCategoryBreadCrumb } from "../../../configs/crumbData";
import CustomHeader from "../../../components/base/CustomHeader";
import { localTexts } from "../../../locals/text";
import { ChevronDown, Plus } from "../../../assets/icons";
import BaseInput from "../../../components/base/Input";
import BaseButton from "../../../components/base/Button";

const AddCategory = () => {
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
                clickBtn={() => console.log("hello")}
                icon={<Plus />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
