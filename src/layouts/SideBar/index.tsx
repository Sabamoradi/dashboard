import "./style.scss";
import { MenuItems } from "../../configs/menuItem";
import { useState } from "react";
import { ChevronIcon } from "../../assets/icons";
import {
  useNavigate,
  useLocation,
} from 'react-router-dom';  

const SideBar = () => {
  const [toggleId, setToggleId] = useState<number | null>(-1);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const openItem = (value: number) => {
    if (toggleId === value) {
      setToggleId(-1);
    } else {
      setToggleId(value);
    }
  };

  const navigateRoute = (val: string) => {
    navigate(val)
  };
  return (
    <div className="side-wrapper">
      <ul className="items">
        {MenuItems.map((el) => {
          return (
            <li
              className={`item ${toggleId === el.id ? "item_height" : ""} `}
              key={el.id}
              onClick={() =>
                el.children ? openItem(el.id) : navigateRoute(el.route)
              }
            >
              <div className="item_top">
                <div className="item_left" data-is-selected={el.route === pathname}>
                  <object className="item_icon" data={el.icon}></object>
                  <p>{el.title}</p>
                </div>
                {el.children && (
                  <div className="item_right">
                    <ChevronIcon className={`${toggleId === el.id ? 'rotate-item':''}`} />
                  </div>
                )}
              </div>
              {el.children && (
                <div className="item_bottom">
                  <ul>
                    {el.children.map((element) => {
                      return (
                        <li key={element.id}>
                          <p>{element.title}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SideBar;
