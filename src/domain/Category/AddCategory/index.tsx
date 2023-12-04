import "./style.scss";
import BaseBreadcrumb from "../../../components/base/BreadCrumb";
import { addCategoryBreadCrumb } from "../../../configs/crumbData";
import CustomHeader from "../../../components/base/CustomHeader";
import { localTexts } from "../../../locals/text";
import { ChevronDown } from "../../../assets/icons";

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
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
