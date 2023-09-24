import "./style.scss";
import { EmptyIcon } from "../../../assets/icons";
import { localTexts } from "../../../locals/text";
import BaseButton from "../Button";
import { ReactNode } from "react";

//TODO
interface Props {
  text?: string;
  btnText?: any;
  children:ReactNode
}

const EmptyState = (props: Props) => {
  const { text, btnText,children } = props;

  const clickBtn = () => {
    alert("hello");
  };

  return (
    <div className="empty-container">
      <EmptyIcon />
      <div className="empty-text">
        <p>{text}</p>
        {children}
        {/* <BaseButton type="primary" text={btnText} clickBtn={() => clickBtn()} /> */}
      </div>
    </div>
  );
};

export default EmptyState;
