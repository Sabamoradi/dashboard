import { Breadcrumb } from "antd";
import "./style.scss";
import { localTexts } from "../../../locals/text";
import { ChevronLeft } from "../../../assets/icons";
import BaseButton from "../Button";

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
        <div className="status-wrapper">
          <div className="status">
            <p>فعال</p>
          </div>
          <BaseButton text={localTexts.changeStatus} clickBtn={()=>alert('hello')} type={'primary'}/>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
