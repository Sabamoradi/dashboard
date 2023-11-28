import "./style.scss";
import BaseBreadcrumb from "../../../components/base/BreadCrumb";
import { addCategoryBreadCrumb } from "../../../configs/crumbData";
import CustomHeader from "../../../components/base/CustomHeader";
import { localTexts } from "../../../locals/text";

const AddCategory = () => {
  return (
    <div className="category-wrapper">
      <div className="add-header">
        <BaseBreadcrumb items={addCategoryBreadCrumb} />
        <CustomHeader title={localTexts.addCategory}  />
      </div>
      <div className="add-content"></div>
    </div>
  );
};

export default AddCategory;
