import { Input } from "antd";
import './style.scss'

interface Props {
  placeTitle: string;
  labelText?: string;
}

const BaseInput = (props: Props) => {
  const { placeTitle, labelText } = props;
  return (
    <div className="input_wrapper">
      <label>{labelText}</label>
      <Input placeholder={placeTitle} />
    </div>
  );
};

export default BaseInput;
