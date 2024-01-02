import { UpButton } from "../UpButton/UpButton";
import { DrawerProps } from "./types";
import { DrawerStyled } from "./UpDrawer.styled";

const UpDrawer: React.FC<DrawerProps> = ({ open, onClose, children }) => {
  return (
    <DrawerStyled open ={open}>
      <div>
        <UpButton onClick={onClose}>Close Drawer</UpButton>
        {children}
      </div>
    </DrawerStyled>  
  );
};

export default UpDrawer;