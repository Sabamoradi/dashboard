import { ReactNode } from "react";
import Header from "../Header";
import SideBar from "../Sidebar";

interface Props {
  children: ReactNode;
}

function MainLayout(props: Props) {
  const { children } = props;
  return (
    <div className="pg-container">
      <Header />
      <SideBar />
      {children}
    </div>
  );
}

export default MainLayout;
