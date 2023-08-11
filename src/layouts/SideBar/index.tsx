import "./style.scss";
import { MenuItems } from "../../configs/menuItem";

const SideBar = () => {
  const openItem = (val: Number) => {
    console.log(val);
  };
  const navigate = (val: string) => {
    console.log(val);
  };
  return (
    <div className="side-wrapper">
      <ul className="items">
        {MenuItems.map((el) => {
          return (
            <li
              className="item"
              key={el.id}
              onClick={() =>
                el.children ? openItem(el.id) : navigate(el.route)
              }
            >
              <div className="item_left">
                <img src={el.icon} />
                <p>{el.title}</p>
              </div>
              {el.children && <div className="item_right">hello</div>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SideBar;
