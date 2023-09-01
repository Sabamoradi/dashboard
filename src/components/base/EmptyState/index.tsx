import "./style.scss";
import { EmptyIcon } from "../../../assets/icons";
import { localTexts } from "../../../locals/text";
import BaseButton from "../Button";

//TODO
interface Props {
  text?: string;
  btnText?: any;
}

const EmptyState = (props: Props) => {
  const { text, btnText } = props;

  const clickBtn = () => {
    alert("hello");
  };

  return (
    <div className="empty-container">
      <EmptyIcon />
      <div className="empty-text">
        <p>{text}</p>
        <BaseButton type="primary" text={btnText} clickBtn={() => clickBtn()} />
      </div>
    </div>
  );
};

export default EmptyState;
