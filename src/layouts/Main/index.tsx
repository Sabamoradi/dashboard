import { ReactNode } from "react";
import Header from "../Header";
import SideBar from "../Sidebar";
import "./style.scss";

interface Props {
  children: ReactNode;
}

function MainLayout(props: Props) {
  const { children } = props;
  return (
    <div className="pg-container">
      <Header />
      <SideBar />
      <div className="main-wrapper">{children}</div>
    </div>
  );
}

export default MainLayout;
