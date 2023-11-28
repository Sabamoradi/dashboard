import { Breadcrumb } from "antd";
import './style.scss'

interface Items {
  title: string;
}
interface Props {
  items: Items[];
}

const BaseBreadcrumb = (props: Props) => {
  const { items } = props;
  return (
    <div className="crumb_wrapper">
      <Breadcrumb items={items} />
    </div>
  );
};

export default BaseBreadcrumb;
