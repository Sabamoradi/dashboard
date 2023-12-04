import { Button, Space } from "antd";
import { ReactNode } from "react";

//TODO
interface Props {
  type: any;
  text: string;
  clickBtn: any;
  icon?: ReactNode;
}

const BaseButton = (props: Props) => {
  const { type, text, clickBtn, icon } = props;
  return (
    <Button type={type} onClick={() => clickBtn()} icon={icon}>
      {text}
    </Button>
  );
};

export default BaseButton;
