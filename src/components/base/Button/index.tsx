import { Button, Space } from "antd";

//TODO
interface Props {
  type: any;
  text: string;
  clickBtn: any;
}

const BaseButton = (props: Props) => {
  const { type, text, clickBtn } = props;
  return (
    <Button type={type} onClick={() => clickBtn()}>
      {text}
    </Button>
  );
};

export default BaseButton;
