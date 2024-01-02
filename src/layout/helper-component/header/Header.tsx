import { Toolbar } from "@mui/material";
import { AppBarWrapper } from "./Header.styled";
import DateTime from "@/layout/dateTime/dateTime";


const HeaderDashboard = () => {
  return(
      <>
      <AppBarWrapper position="fixed" issidebar={false}>
        <Toolbar className="p-0">
        <DateTime/>
        </Toolbar>
      </AppBarWrapper> 
 
      </>
  )
}

export default HeaderDashboard;