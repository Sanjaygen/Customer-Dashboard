
import { ReactNode} from "react";
import { LayoutContainer, SideNavWrapper } from "./Layout.styled";
import SideBar from "./sidebar/SideBar";
import HeaderDashboard from "./helper-component/header/Header";

export type LayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: LayoutProps) => {
  const renderSidebar = () => {
    return (
      <>
        <SideNavWrapper>
          <SideBar/>
        </SideNavWrapper>
      </>
    );
  };

  return (
    <LayoutContainer>
      {renderSidebar()}
      <HeaderDashboard/>  
      {children}
    </LayoutContainer>
  );
};

export default DashboardLayout;
