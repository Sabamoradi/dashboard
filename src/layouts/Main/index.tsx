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
      <div className="bg-wrapper">
      <SideBar />
      <div className="main-wrapper">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
