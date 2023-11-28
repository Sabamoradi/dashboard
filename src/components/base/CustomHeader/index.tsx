import { Breadcrumb } from "antd";
import "./style.scss";
import { localTexts } from "../../../locals/text";
import { ChevronLeft } from "../../../assets/icons";

interface Props {
  title: string;
  route?: string;
}

const CustomHeader = (props: Props) => {
  const { title, route } = props;
  return (
    <div className="add-header-wrapper">
      <div className="header-top">
        <ChevronLeft />
        <p>{localTexts.back}</p>
      </div>
      <div className="title">
        <p>
        {title}
        </p>
      </div>
    </div>
  );
};

export default CustomHeader;
